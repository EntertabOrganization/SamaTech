import HowWeWork from '@/Components/website/services/HowWeWork/HowWeWork'
import PillarDetail from '@/Components/website/services/Pillars/Pillardetails'
import { pillars } from '@/Components/website/services/Pillars/Pillars'
import ServicesCapabilities from '@/Components/website/services/ServicesCapabilities/ServicesCapabilities'

export default function Services() {
  return <>
    <ServicesCapabilities/>
    <HowWeWork/>
    <PillarDetail slug={pillars[0].slug} />

  </>
}
