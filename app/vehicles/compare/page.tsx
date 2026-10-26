'use client'

import { ArrowRight, Check, ChevronDown, Fuel, Leaf, Zap } from 'lucide-react'
import { useMemo, useState } from 'react'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'

const comparisons = [
  { ev: 'Hyundai IONIQ 5', evPrice: '$48,899', evRange: '488 km', fuel: 'Hyundai Tucson Hybrid', fuelPrice: '$42,999', fuelRange: '6.9 L/100 km', type: 'Crossover', slug: 'hyundai-ioniq-5' },
  { ev: 'Tesla Model Y', evPrice: '$53,990', evRange: '531 km', fuel: 'Toyota RAV4 Hybrid', fuelPrice: '$42,450', fuelRange: '6.0 L/100 km', type: 'SUV', slug: 'tesla-model-y' },
  { ev: 'Chevrolet Equinox EV', evPrice: '$46,999', evRange: '513 km', fuel: 'Chevrolet Equinox Hybrid', fuelPrice: '$39,999', fuelRange: '7.1 L/100 km', type: 'SUV', slug: 'chevrolet-equinox-ev' },
  { ev: 'Nissan LEAF', evPrice: '$37,966', evRange: '341 km', fuel: 'Nissan Kicks', fuelPrice: '$24,798', fuelRange: '7.2 L/100 km', type: 'Hatchback', slug: 'nissan-leaf-s' },
]

export default function ComparePage() {
  const [selected, setSelected] = useState('All')
  const filtered = useMemo(() => selected === 'All' ? comparisons : comparisons.filter((item) => item.type === selected), [selected])
  return <main className="catalogue-page compare-page">
    <SiteHeader />
    <div className="compare-container">
      <div className="compare-intro">
        <p className="eyebrow"><span className="eyebrow-dot" /> EV North comparison desk</p>
        <h1>See what changes<br /><em>when you go electric.</em></h1>
        <p>Put a Canadian EV beside the gas or hybrid vehicle you might buy instead. Compare the numbers that matter before you take a test drive.</p>
      </div>
      <div className="compare-filters" aria-label="Filter comparisons">
        {['All', 'Crossover', 'SUV', 'Hatchback'].map((item) => <button className={selected === item ? 'pill active' : 'pill'} key={item} onClick={() => setSelected(item)}>{item}</button>)}
      </div>
      <section className="comparison-list" aria-live="polite">
        <div className="comparison-heading"><span>{filtered.length} comparison{filtered.length === 1 ? '' : 's'}</span><span>Canadian MSRP before tax</span></div>
        {filtered.map((item) => <article className="comparison-card" key={item.ev}>
          <div className="comparison-side comparison-ev"><span className="comparison-label"><Zap size={14} fill="currentColor" /> Electric</span><h2>{item.ev}</h2><p>{item.type} · zero tailpipe emissions</p><div className="comparison-stats"><span><small>From</small><b>{item.evPrice}</b></span><span><small>Range</small><b>{item.evRange}</b></span></div><a href={`/vehicles/${item.slug}`} className="card-link">View EV details <ArrowRight size={16} /></a></div>
          <div className="comparison-divider"><span>vs</span></div>
          <div className="comparison-side comparison-fuel"><span className="comparison-label"><Fuel size={14} /> Gas / hybrid</span><h2>{item.fuel}</h2><p>{item.type} · familiar fuel stops</p><div className="comparison-stats"><span><small>From</small><b>{item.fuelPrice}</b></span><span><small>Efficiency</small><b>{item.fuelRange}</b></span></div><span className="comparison-note">Comparable size and purpose</span></div>
        </article>)}
      </section>
      <section className="compare-callout"><div className="compare-callout-icon"><Leaf size={22} /></div><div><p className="eyebrow">The short version</p><h2>Compare the whole ownership picture.</h2><p>Sticker price is only the beginning. Electricity, fuel, maintenance, winter driving, and available rebates can change the math over the years.</p></div><a href="/ev-vs-gas-cost-calculator" className="button button-light">Calculate your savings <ArrowRight size={16} /></a></section>
    </div>
    <SiteFooter />
  </main>
}
