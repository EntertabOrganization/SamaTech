import PageHeader from "@/Components/dashboard/Layout/PageHeader";
import RequestCard from "@/Components/dashboard/consultations/RequestCard";
import StatusTabs from "@/Components/dashboard/shared/StatusTabs";

export default function ConsultationRequestsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Inbox"
        title="Consultation requests"
        description="Requests booked from the website. Confirm or decline each one."
      />

      {/* TODO(backend): active from ?status=, and add count to each tab */}
      <StatusTabs
        label="Filter by status"
        active="all"
        tabs={[
          { id: "all", label: "All requests" },
          { id: "pending", label: "Pending" },
          { id: "confirmed", label: "Confirmed" },
          { id: "declined", label: "Declined" },
        ]}
      />

      <section
        aria-label="Consultation requests"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {/* TODO(backend): replace these two placeholder cards with requests.map(...) */}
        <RequestCard
          href="#"
          organization="Organization"
          requesterName="Requester name"
          topic="What the requester wants to discuss appears here, up to two lines, then it is cut."
          slot="Requested slot"
          receivedAt="Received"
          status="pending"
        />
        <RequestCard
          href="#"
          organization="Organization"
          requesterName="Requester name"
          topic="What the requester wants to discuss appears here, up to two lines, then it is cut."
          slot="Requested slot"
          receivedAt="Received"
          status="confirmed"
        />
      </section>
    </div>
  );
}
