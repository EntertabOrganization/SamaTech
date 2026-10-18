"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "./LoadingScreen";

function waitForDocument(signal: AbortSignal): Promise<void> {
  if (document.readyState === "complete") return Promise.resolve();

  return new Promise((resolve) => {
    const finish = () => {
      window.removeEventListener("load", finish);
      signal.removeEventListener("abort", finish);
      resolve();
    };
    window.addEventListener("load", finish, { once: true });
    signal.addEventListener("abort", finish, { once: true });
  });
}

async function waitForImage(image: HTMLImageElement, signal: AbortSignal) {
  if (!image.complete) {
    await new Promise<void>((resolve) => {
      const finish = () => {
        image.removeEventListener("load", finish);
        image.removeEventListener("error", finish);
        signal.removeEventListener("abort", finish);
        resolve();
      };
      image.addEventListener("load", finish, { once: true });
      image.addEventListener("error", finish, { once: true });
      signal.addEventListener("abort", finish, { once: true });
      // Hidden and below-the-fold images must load before the page is revealed.
      image.loading = "eager";
      if (image.complete || signal.aborted) finish();
    });
  }

  if (!signal.aborted) await image.decode().catch(() => undefined);
}

async function waitForAssets(content: HTMLElement, signal: AbortSignal) {
  const backgrounds = new Set<string>();
  for (const element of [content, ...content.querySelectorAll("*")]) {
    const background = getComputedStyle(element).backgroundImage;
    for (const match of background.matchAll(/url\((?:"([^"]*)"|'([^']*)'|([^)]*))\)/g)) {
      const url = (match[1] ?? match[2] ?? match[3]).trim();
      if (url) backgrounds.add(url);
    }
  }

  await Promise.all([
    document.fonts.ready.catch(() => undefined),
    ...Array.from(content.querySelectorAll("img"), (image) => waitForImage(image, signal)),
    ...Array.from(backgrounds, (url) => {
      const image = new Image();
      image.src = url;
      return waitForImage(image, signal);
    }),
  ]);
}

function PageReadiness({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function preparePage() {
      try {
        await waitForDocument(signal);
        if (!content.current || signal.aborted) return;
        await waitForAssets(content.current, signal);
      } finally {
        // Resource failures should reveal the page, rather than trap visitors.
        if (!signal.aborted) setReady(true);
      }
    }

    void preparePage().catch(() => undefined);
    return () => controller.abort();
  }, []);

  return (
    <>
      {!ready && <LoadingScreen />}
      <div ref={content} className="website-content" data-ready={ready} aria-busy={!ready}>
        {children}
      </div>
      <noscript>
        <style>{"html{overflow:auto!important}.website-loader{display:none!important}.website-content{visibility:visible!important}"}</style>
      </noscript>
    </>
  );
}

export default function WebsiteLoader({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return <PageReadiness key={pathname}>{children}</PageReadiness>;
}
