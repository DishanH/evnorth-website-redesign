'use client'

import { ArrowRight, BatteryCharging, CarFront, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'

const vehicles = [
  ['Hyundai IONIQ 5', 'Crossover', '$48,899', '488 km', 'hyundai-ioniq-5'],
  ['Tesla Model Y', 'Crossover', '$53,990', '531 km', 'tesla-model-y'],
  ['Chevrolet Equinox EV', 'SUV', '$46,999', '513 km', 'chevrolet-equinox-ev'],
  ['Ford F-150 Lightning', 'Truck', '$69,995', '386 km', 'ford-f-150-lightning'],
  ['Nissan LEAF', 'Hatchback', '$37,966', '341 km', 'nissan-leaf-s'],
  ['Rivian R1T', 'Truck', '$99,000', '515 km', 'rivian-r1t'],
]

export default function VehiclesPage() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('All')
  const filtered = useMemo(() => vehicles.filter(([name, category]) => `${name} ${category}`.toLowerCase().includes(query.toLowerCase()) && (type === 'All' || category === type)), [query, type])
  return <main className="catalogue-page directory-page">
    <SiteHeader />
    <div className="directory-container">
      <div className="directory-intro"><p className="eyebrow"><span className="eyebrow-dot" /> EV North catalogue</p><h1>Find the EV that<br /><em>fits your life.</em></h1><p>Compare electric vehicles available in Canada with clear pricing, real-world range, charging details, and rebate eligibility.</p></div>
      <div className="directory-stats"><div><strong>53</strong><span>vehicles tracked</span></div><div><strong>21</strong><span>EVAP eligible</span></div><div><strong>6</strong><span>body styles</span></div></div>
      <section className="directory-explorer"><div className="directory-toolbar"><label className="directory-search"><Search size={18} /><input aria-label="Search vehicles" placeholder="Search make or model" value={query} onChange={e => setQuery(e.target.value)} /></label><span className="result-count">{filtered.length} vehicles</span></div><div className="directory-filters">{['All', 'Crossover', 'SUV', 'Truck', 'Hatchback'].map(item => <button key={item} onClick={() => setType(item)} className={type === item ? 'pill active' : 'pill'}>{item}</button>)}</div><div className="directory-grid">{filtered.map(([name, category, price, range, slug], index) => <article className="directory-card" key={name}><div className={`directory-art art-${index % 4}`}><CarFront size={58} strokeWidth={1.1} /><span>{category}</span></div><div className="directory-card-body"><p className="article-tag">{index % 2 ? 'EVAP status reviewed' : 'Canada catalogue'}</p><h2>{name}</h2><div className="directory-card-stats"><span><small>From</small><b>{price}</b></span><span><small>Range</small><b>{range}</b></span></div><a href={`/vehicles/${slug}`} className="card-link">View vehicle details <ArrowRight size={16} /></a></div></article>)}</div></section>
      <div className="directory-note"><BatteryCharging size={20} /><p><strong>Numbers that make sense.</strong> Prices are Canadian MSRP before tax unless noted. Rebates, range, and availability change — each listing is dated and sourced.</p></div>
    </div>
    <SiteFooter />
  </main>
}
function DirectoryHeader() { return <header className="catalogue-header"><a href="/" className="catalogue-brand"><span><Zap size={16} fill="currentColor" /></span>EV<span>North</span></a><nav><a href="/vehicles">Vehicles</a><a href="/guides">Guides</a><a href="/blog">Stories</a><a href="/electric-trucks-canada">EV trucks</a></nav><a className="catalogue-cta" href="/#tools">Calculate savings</a></header> }
function DirectoryFooter() { return <footer className="catalogue-footer"><span>EV North · Independent EV research for Canada.</span><a href="/">Back to EV North <ArrowRight size={14} /></a></footer> }
