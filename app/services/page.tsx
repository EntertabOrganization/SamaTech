import HowWeWork from '@/Components/services/HowWeWork/HowWeWork'
import PillarDetail from '@/Components/services/Pillars/Pillardetails'
import { pillars } from '@/Components/services/Pillars/Pillars'
import ServicesCapabilities from '@/Components/services/ServicesCapabilities/ServicesCapabilities'

export default function Services() {
  return <>
    <ServicesCapabilities/>
    <HowWeWork/>
    <PillarDetail slug={pillars[0].slug} />

  </>
}
