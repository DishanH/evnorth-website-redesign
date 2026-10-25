import { ArrowLeft, ArrowRight, CalendarDays, Zap } from 'lucide-react'

const stories: Record<string, { tag: string; title: string; date: string; intro: string; sections: [string, string][] }> = {
  'byd-not-for-sale-canada': {
    tag: 'News & analysis', title: 'BYD is not for sale in Canada yet', date: 'September 30, 2026', intro: 'Canada’s EV market is changing fast. Here is what the latest signals actually mean for shoppers.',
    sections: [['The short answer', 'BYD vehicles are not currently available through a Canadian retail network. That does not mean Canadian drivers should stop paying attention: the brand’s global growth is reshaping the choices and prices the market will eventually offer.'], ['What shoppers should watch', 'Availability, charging support, parts access, and service coverage matter just as much as a vehicle’s sticker price. Until those pieces are clear, established Canadian networks remain the lower-risk choice for most buyers.'], ['A market that is still moving', 'New models, changing rebate rules, and expanding charging infrastructure will keep shifting the conversation. EV North will keep tracking the practical details behind the headlines.']],
  },
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const story = stories[slug] ?? stories['byd-not-for-sale-canada']
  return <main className="catalogue-page editorial-page"><header className="catalogue-header"><a href="/" className="catalogue-brand"><span><Zap size={16} fill="currentColor" /></span>EV<span>North</span></a><nav><a href="/vehicles">Vehicles</a><a href="/guides">Guides</a><a href="/blog">Stories</a><a href="/electric-trucks-canada">EV trucks</a></nav><a className="catalogue-cta" href="/#tools">Calculate savings</a></header><article className="article-container"><a className="breadcrumb" href="/blog"><ArrowLeft size={14} /> Back to stories</a><div className="article-hero"><p className="eyebrow"><span className="eyebrow-dot" /> {story.tag}</p><h1>{story.title}</h1><p>{story.intro}</p><div className="editorial-meta"><span><CalendarDays size={14} /> {story.date}</span><span>EV North editorial</span></div></div><div className="article-layout"><div className="article-copy">{story.sections.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}<a href="/blog" className="button button-primary">More stories <ArrowRight size={16} /></a></div><aside className="article-aside"><span>EV NORTH</span><strong>Independent context for the road ahead.</strong></aside></div></article><footer className="catalogue-footer"><span>EV North · Independent EV research for Canada.</span><a href="/">Back to EV North <ArrowRight size={14} /></a></footer></main>
}
