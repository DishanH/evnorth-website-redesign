'use client'

import { useState } from 'react'
import { ArrowRight, BatteryCharging, BookOpen, CarFront, Check, ChevronDown, Filter, Leaf, Menu, Search, ShieldCheck, X, Zap } from 'lucide-react'

const vehicles = [
  { name: 'Hyundai IONIQ 5', type: 'Crossover', price: '$48,899', range: '488 km', charge: '235 kW', rebate: 'EVAP eligible', tone: 'silver' },
  { name: 'Tesla Model Y', type: 'Crossover', price: '$53,990', range: '531 km', charge: '250 kW', rebate: 'EVAP eligible', tone: 'blue' },
  { name: 'Chevrolet Equinox EV', type: 'SUV', price: '$46,999', range: '513 km', charge: '150 kW', rebate: 'EVAP eligible', tone: 'red' },
  { name: 'Ford F-150 Lightning', type: 'Truck', price: '$69,995', range: '386 km', charge: '150 kW', rebate: 'Built in Canada', tone: 'dark' },
]

const articles = [
  { tag: 'News & analysis', title: 'BYD is not for sale in Canada yet', text: "Canada's EV market is changing fast. Here is what the latest signals actually mean for shoppers.", date: 'Sep 30, 2026', icon: BatteryCharging },
  { tag: 'Buying guide', title: 'Used EV buying checklist for Canada', text: 'The practical 8-point checklist for battery health, recalls, charging, and insurance.', date: 'Aug 18, 2026', icon: Check },
  { tag: 'Ownership', title: 'How much does it cost to charge an EV?', text: 'A province-by-province look at real-world charging costs, from home to highway.', date: 'Jul 04, 2026', icon: Leaf },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All vehicles')
  const visibleVehicles = vehicles.filter((vehicle) => `${vehicle.name} ${vehicle.type}`.toLowerCase().includes(search.toLowerCase()) && (filter === 'All vehicles' || vehicle.type === filter))

  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="EV North home"><span className="brand-mark"><Zap size={16} fill="currentColor" /></span><span>EV<span className="brand-muted">North</span></span></a>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <a href="#vehicles">Vehicles</a><a href="#guides">Guides</a><a href="#stories">Stories</a><a href="#tools">Tools</a>
        </nav>
        <div className="header-actions"><a href="#tools" className="header-tool">Calculate savings <ArrowRight size={15} /></a><button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> The Canadian EV guide</p><h1>Make the switch<br /><em>with confidence.</em></h1><p className="hero-sub">Clear, independent guidance for choosing, buying, and living with an electric vehicle in Canada.</p><div className="hero-ctas"><a href="/vehicles" className="button button-primary">Explore vehicles <ArrowRight size={17} /></a><a href="/guides" className="button button-quiet">Start with a guide</a></div><div className="hero-proof"><div><strong>53</strong><span>EVs catalogued</span></div><div><strong>21</strong><span>Eligible for EVAP</span></div><div><strong>100%</strong><span>Canada-focused</span></div></div></div>
        <div className="hero-visual"><img src="/ev-north-hero.png" alt="Electric vehicle on a forest road in Canada" /><div className="hero-badge"><span className="badge-icon"><ShieldCheck size={18} /></span><div><strong>Research you can trust</strong><small>Updated for 2026</small></div></div><div className="hero-caption">Independent. Practical. Canadian.</div></div>
      </section>

      <section className="section vehicles-section" id="vehicles"><div className="section-heading"><div><p className="eyebrow">Find your fit</p><h2>Every EV in one place.</h2></div><a className="text-link" href="/vehicles">View full catalogue <ArrowRight size={16} /></a></div><div className="explorer"><div className="explorer-top"><div className="search-wrap"><Search size={18} /><input aria-label="Search vehicles" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search make or model" /></div><button className="filter-button"><Filter size={16} /> Filters <span>0</span></button></div><div className="filter-pills">{['All vehicles', 'Sedan', 'Crossover', 'SUV', 'Truck'].map((item) => <button key={item} className={filter === item ? 'pill active' : 'pill'} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="vehicle-grid">{visibleVehicles.map((vehicle) => <article className="vehicle-card" key={vehicle.name}><div className={`vehicle-image ${vehicle.tone}`}><CarFront size={72} strokeWidth={1.15} /><span className="vehicle-tag">{vehicle.rebate}</span></div><div className="vehicle-info"><div className="vehicle-name"><div><h3>{vehicle.name}</h3><p>{vehicle.type}</p></div><a href={`/vehicles/${vehicle.name === 'Hyundai IONIQ 5' ? 'hyundai-ioniq-5' : vehicle.name === 'Tesla Model Y' ? 'tesla-model-y' : vehicle.name === 'Chevrolet Equinox EV' ? 'chevrolet-equinox-ev' : 'ford-f-150-lightning'}`} className="circle-arrow" aria-label={`View ${vehicle.name}`}><ArrowRight size={17} /></a></div><div className="vehicle-stats"><span><small>From</small><strong>{vehicle.price}</strong></span><span><small>Range</small><strong>{vehicle.range}</strong></span><span><small>Fast charge</small><strong>{vehicle.charge}</strong></span></div></div></article>)}</div></div></section>

      <section className="section stories-section" id="stories"><div className="section-heading"><div><p className="eyebrow">The latest from EV North</p><h2>Know more. Drive better.</h2></div><a className="text-link" href="/blog">Browse all stories <ArrowRight size={16} /></a></div><div className="article-grid">{articles.map((article, index) => <article className={`article-card article-${index}`} key={article.title}><div className="article-art"><article.icon size={index === 1 ? 38 : 32} /><span>{index === 0 ? '01' : index === 1 ? '02' : '03'}</span></div><div className="article-body"><p className="article-tag">{article.tag}</p><h3>{article.title}</h3><p>{article.text}</p><div className="article-meta"><span>{article.date}</span><span>6 min read</span></div></div></article>)}</div></section>

      <section className="guide-cta" id="guides"><div><p className="eyebrow">A better way to buy used</p><h2>Start with the<br /><em>right questions.</em></h2><p>Our used EV checklist helps you inspect the battery, understand charging, and buy with fewer surprises.</p><a href="#stories" className="button button-primary">Read the buying guide <ArrowRight size={17} /></a></div><div className="checklist-card"><div className="checklist-top"><BookOpen size={19} /><span>USED EV BUYING CHECKLIST</span></div>{['Battery health & warranty', 'Charging speed and access', 'Recalls and service history', 'Insurance and total cost'].map((item) => <div className="check-row" key={item}><span><Check size={14} /></span>{item}<ArrowRight size={15} /></div>)}<div className="check-count">8 checks before you buy</div></div></section>

      <section className="tools-strip" id="tools"><div className="tools-icon"><Zap size={21} /></div><div><p className="eyebrow">Free tools</p><h2>See what an EV could save you.</h2></div><a href="#tools" className="button button-light">Calculate your savings <ArrowRight size={17} /></a></section>
      <footer><a href="#top" className="brand"><span className="brand-mark"><Zap size={16} fill="currentColor" /></span><span>EV<span className="brand-muted">North</span></span></a><p>Independent EV research for Canada.</p><div><a href="#vehicles">Vehicles</a><a href="#guides">Guides</a><a href="#stories">Stories</a></div><span className="copyright">© 2026 EV North</span></footer>
    </main>
  )
}
