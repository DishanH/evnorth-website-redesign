'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, BatteryCharging, BookOpen, Check, Search, Zap } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/site-chrome'

const guides = [
  ['Used EV buying checklist for Canada', 'The practical 8-point checklist for battery health, recalls, charging, and insurance.', 'Buying guide', '/used-ev-buying-checklist-canada'],
  ['Electric trucks in Canada', 'Range, towing, winter realities, and every electric pickup worth watching.', 'Vehicle guide', '/electric-trucks-canada'],
  ['How much does it cost to charge an EV?', 'Understand home charging, public networks, and the cost per 100 kilometres.', 'Ownership guide', '/guides/ev-charging-cost-canada'],
]
export default function GuidesPage() {
  const [activeFilter, setActiveFilter] = useState('All guides')
  const [query, setQuery] = useState('')
  const filters = ['All guides', 'Buying', 'Ownership', 'Vehicle guides']
  const filteredGuides = useMemo(() => guides.filter(([title, text, tag]) => {
    const matchesFilter = activeFilter === 'All guides' || (activeFilter === 'Buying' && tag === 'Buying guide') || (activeFilter === 'Ownership' && tag === 'Ownership guide') || (activeFilter === 'Vehicle guides' && tag === 'Vehicle guide')
    return matchesFilter && `${title} ${text}`.toLowerCase().includes(query.toLowerCase())
  }), [activeFilter, query])

  return <main className="catalogue-page guide-directory"><SiteHeader /><div className="guide-directory-container"><div className="guide-directory-intro"><p className="eyebrow"><span className="eyebrow-dot" /> Practical EV guides</p><h1>Less guesswork.<br /><em>More confidence.</em></h1><p>Clear explainers for the decisions that come with driving electric in Canada.</p></div><div className="guide-feature"><div><p className="article-tag">Start here</p><h2>Buying a used EV?<br />Ask these questions first.</h2><p>Battery health is only one part of the picture. Use our field-tested checklist before you sign.</p><a href="/used-ev-buying-checklist-canada" className="button button-primary">Open the checklist <ArrowRight size={17} /></a></div><div className="guide-feature-icon"><BookOpen size={64} strokeWidth={1.1} /><span>8 checks</span></div></div><div className="guide-filter-panel"><div className="guide-filter-heading"><div><p className="article-tag">Browse by need</p><h2>Find the right guide</h2></div><span>{filteredGuides.length} of {guides.length} guides</span></div><label className="guide-search"><Search size={17} /><span className="sr-only">Search guides</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search guides" /></label><div className="guide-filters" role="group" aria-label="Filter guides">{filters.map((filter) => <button className={activeFilter === filter ? 'active' : ''} type="button" key={filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div></div><h2 className="guide-list-title">Explore all guides</h2><div className="guide-list">{filteredGuides.map(([title, text, tag, href], i) => <article className="guide-list-card" key={title}><div className={`guide-list-art art-${i}`}><span>0{i + 1}</span>{i === 0 ? <Check size={34} /> : i === 1 ? <Zap size={34} /> : <BatteryCharging size={34} />}</div><div><p className="article-tag">{tag}</p><h2>{title}</h2><p>{text}</p><a href={href} className="card-link">Read guide <ArrowRight size={16} /></a></div></article>)}</div></div><SiteFooter /></main>
}
