'use client'

import { ChevronDown, Menu, X, Zap } from 'lucide-react'
import { useState } from 'react'

const menus = [
  { label: 'Buy & compare', items: [['Vehicles', '/vehicles'], ['Electric trucks', '/electric-trucks-canada'], ['Used EV checklist', '/used-ev-buying-checklist-canada']] },
  { label: 'Costs & tools', items: [['Savings calculator', '/#tools'], ['Charging costs', '/guides/ev-charging-cost-canada']] },
  { label: 'Learn', items: [['Guides', '/guides'], ['Stories', '/blog'], ['EV basics', '/guides']] },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="catalogue-header shared-site-header">
    <a href="/" className="catalogue-brand"><span><Zap size={16} fill="currentColor" /></span>EV<span>North</span></a>
    <nav className="shared-desktop-nav">{menus.map((menu) => <div className="shared-nav-group" key={menu.label}><button type="button">{menu.label}<ChevronDown size={14} /></button><div className="shared-nav-dropdown">{menu.items.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div></div>)}<a href="/blog">Stories</a></nav>
    <a className="catalogue-cta" href="/#tools">Calculate savings</a>
    <button className="shared-menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <nav className="shared-mobile-nav">{menus.map((menu) => <div key={menu.label}><p>{menu.label}</p>{menu.items.map(([label, href]) => <a href={href} key={label} onClick={() => setOpen(false)}>{label}</a>)}</div>)}<a href="/blog" onClick={() => setOpen(false)}>Stories</a></nav>}
  </header>
}

export function SiteFooter() { return <footer className="catalogue-footer shared-site-footer"><span>EV North · Independent EV research for Canada.</span><a href="/">Back to EV North <span aria-hidden="true">→</span></a></footer> }
