'use client'

import { ArrowRight, ChevronDown, Menu, X, Zap } from 'lucide-react'
import { useState } from 'react'

const menus = [
  { label: 'Buy & compare', columns: [['Explore EVs', [['All vehicles', '/vehicles'], ['Compare vehicles', '/vehicles/compare'], ['Cheapest EVs in Canada', '/cheapest-ev-canada'], ['Best EVs under $50,000', '/best-ev-under-50000-canada']]], ['Buying help', [['Electric trucks hub', '/electric-trucks-canada'], ['Used EV checklist', '/used-ev-buying-checklist-canada']]]] },
  { label: 'Costs & calculators', columns: [['Calculate your costs', [['Calculators hub', '/calculator'], ['EV vs. gas cost calculator', '/ev-vs-gas-cost-calculator'], ['Monthly cost calculator', '/calculator/monthly-cost']]], ['Ownership costs', [['Charging costs', '/guides/ev-charging-cost-canada'], ['EV tire cost calculator', '/ev-tire-cost-calculator']]]] },
  { label: 'Rebates & incentives', columns: [['Canada-wide', [['All rebates & incentives', '/electric-vehicle-rebate'], ['iZEV / EVAP eligible vehicles', '/evap-eligible-vehicles-canada']]], ['By province', [['Ontario rebates', '/ontario-ev-rebate'], ['BC rebates', '/bc-ev-rebate']]]] },
  { label: 'Charging & trips', columns: [['Plan with confidence', [['EV road trips hub', '/ev-road-trips'], ['Public charging costs', '/public-ev-charging-cost-canada'], ['Condo charging guide', '/condo-ev-charging-canada']]], ['Canadian conditions', [['EV winter range', '/ev-winter-range-canada']]]] },
  { label: 'Guides & insights', columns: [['Learn more', [['Guides hub', '/guides'], ['EV industry statistics', '/statistics'], ['Blog', '/blog'], ['About EV North', '/about']]]] },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header shared-site-header">
    <a href="/" className="brand" aria-label="EV North home"><span className="brand-mark"><Zap size={16} fill="currentColor" /></span><span>EV<span className="brand-muted">North</span></span></a>
    <nav className={`main-nav shared-desktop-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">{menus.map((menu) => <details className="nav-menu" key={menu.label}><summary>{menu.label} <ChevronDown size={14} /></summary><div className={`nav-dropdown ${menu.label === 'Guides & insights' ? 'nav-dropdown-right' : ''}`}>{menu.columns.map(([heading, items]) => <div key={heading}><strong>{heading}</strong>{items.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>)}</div></details>)}</nav>
    <div className="header-actions"><a className="header-tool" href="/#tools">Calculate savings <ArrowRight size={15} /></a><button className="menu-button shared-menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button></div>
    {open && <nav className="shared-mobile-nav" aria-label="Mobile navigation">{menus.map((menu) => <div key={menu.label}><p>{menu.label}</p>{menu.columns.flatMap(([, items]) => items).map(([label, href]) => <a href={href} key={label} onClick={() => setOpen(false)}>{label}</a>)}</div>)}</nav>}
  </header>
}

export function SiteFooter() { return <footer className="catalogue-footer shared-site-footer"><span>EV North · Independent EV research for Canada.</span><a href="/">Back to EV North <span aria-hidden="true">→</span></a></footer> }
