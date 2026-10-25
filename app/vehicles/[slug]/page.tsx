'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Battery, Check, ChevronDown, CircleGauge, ExternalLink, Leaf, Zap } from 'lucide-react'

const provinces = ['Ontario', 'Alberta', 'British Columbia', 'Quebec', 'Manitoba', 'Nova Scotia']

export default function VehiclePage() {
  const [province, setProvince] = useState('Ontario')
  const taxRates: Record<string, number> = { Ontario: 0.13, Alberta: 0.05, 'British Columbia': 0.12, Quebec: 0.14975, Manitoba: 0.12, 'Nova Scotia': 0.15 }
  const driveAway = Math.round(37966 * (1 + taxRates[province]) - 5000)

  return <main className="catalogue-page">
    <CatalogHeader />
    <div className="catalogue-container">
      <nav className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/">Vehicles</a><span>/</span><span>Nissan LEAF</span></nav>
      <section className="vehicle-hero-detail">
        <div className="vehicle-intro">
          <div className="eligibility"><Check size={14} /> EVAP eligible · $5,000</div>
          <div className="vehicle-kicker"><span>ELECTRIC</span> 2027 · Crossover</div>
          <h1>Nissan <strong>LEAF</strong></h1><p className="trim-label">S</p>
          <p className="vehicle-summary">$32,966 all-in after the federal EVAP rebate, 341 km official range, and eligible for the federal $5,000 EVAP rebate — see the exact numbers below.</p>
          <div className="highlight-list"><span><Zap size={14} /> 150 kW fast charge</span><span><Leaf size={14} /> Under $40,000 after rebate</span></div>
          <span className="source-chip">OFFICIAL SOURCE · VERIFIED SEP 2026</span>
        </div>
        <aside className="price-panel">
          <p className="panel-label">PRICE AFTER EVAP REBATE</p><strong className="price-big">$32,966</strong><p className="price-break"><s>$37,966</s> <b>−$5,000 EVAP</b></p>
          <div className="panel-divider" /><div className="panel-label-row"><p className="panel-label">ESTIMATED DRIVE-AWAY PRICE</p><select aria-label="Province for sales tax" value={province} onChange={(e) => setProvince(e.target.value)}>{provinces.map((item) => <option key={item}>{item}</option>)}</select></div>
          <strong className="drive-price">${driveAway.toLocaleString()}</strong><p className="price-note">$37,966 all-in + provincial sales tax − $5,000 EVAP applied after tax. Licensing, registration and dealer fees are extra.</p><span className="source-chip">OFFICIAL SOURCE · VERIFIED OCT 2026</span>
          <a className="panel-primary-action" href="#cost">See the 10-year cost <ArrowRight size={16} /></a><a className="panel-secondary-action" href="#compare">Compare this trim</a><a className="panel-link" href="#rebate">EVAP-eligible list</a><p className="review-note">Catalogue reviewed Oct 2026. Pricing and eligibility change — confirm with the dealer.</p>
        </aside>
      </section>
      <section className="spec-grid" aria-label="Vehicle specifications">
        {[['OFFICIAL RANGE','341 km',CircleGauge],['USABLE BATTERY','53 kWh',Battery],['EFFICIENCY','15.5 kWh/100km',CircleGauge],['DC FAST-CHARGE PEAK','150 kW',Zap],['ASSEMBLED IN','Not yet verified',Leaf],['ENERGY / 100 KM','$0.88',Battery]].map(([label, value, Icon]) => <div className="spec-card" key={label as string}><p><Icon size={14} /> {label as string}</p><strong>{value as string}</strong>{label === 'EFFICIENCY' && <small>Estimated</small>}</div>)}
        <div className="catalogue-callout"><h3>In this catalogue</h3><p>Compare against 53 EVs and 17 gas and hybrid comparison vehicles, sourced and dated.</p><a href="/">← Back to full catalogue</a></div>
      </section>
      <section className="info-section" id="rebate"><div><p className="eyebrow">Rebate status</p><h2>Federal EVAP rebate: <em>eligible.</em></h2><p>Because the LEAF S is priced below the federal cap and meets the program requirements, it qualifies for the full $5,000 incentive. Always confirm current eligibility before signing.</p></div><div className="info-stat"><span>EVAP incentive</span><strong>$5,000</strong><small>Applied after tax at purchase</small></div></section>
    </div>
    <CatalogFooter />
  </main>
}

function CatalogHeader() { return <header className="catalogue-header"><a href="/" className="catalogue-brand"><span><Zap size={16} fill="currentColor" /></span>EV<span>North</span></a><nav><a href="/">Buy an EV <ChevronDown size={13} /></a><a href="/">Costs & calculators <ChevronDown size={13} /></a><a href="/">Rebates <ChevronDown size={13} /></a><a href="/">Charging & trips <ChevronDown size={13} /></a><a href="/">Blog</a></nav><a className="catalogue-cta" href="/">Calculate savings</a></header> }
function CatalogFooter() { return <footer className="catalogue-footer"><span>EV North · Independent EV research for Canada.</span><a href="/">Back to EV North <ArrowRight size={14} /></a></footer> }
