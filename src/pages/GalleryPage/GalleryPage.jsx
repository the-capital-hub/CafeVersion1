import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import "./GalleryPage.css";
const images=[
 ['https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=88','The café','CAFÉ'],
 ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=88','Morning ritual','COFFEE'],
 ['https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=88','Fresh plates','FOOD'],
 ['https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1500&q=88','GAVA','STAY'],
 ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1500&q=88','Slow mornings','STAY'],
 ['https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1500&q=88','Long evenings','EVENTS'],
 ['https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=88','At the table','FOOD'],
 ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1500&q=88','Good company','CAFÉ'],
];
const filters=['ALL','CAFÉ','COFFEE','FOOD','STAY','EVENTS'];
function GalleryPage(){const [filter,setFilter]=useState('ALL');const [active,setActive]=useState(null);const shown=filter==='ALL'?images:images.filter(i=>i[2]===filter);return <main className="gallery-page"><section className="gallery-page-hero"><div className="gallery-hero-image"><img src={images[0][0]} alt="Café De Verde interior"/></div><div className="gallery-hero-copy"><span className="eyebrow dark">06 · A GLIMPSE OF DE VERDE</span><h1>See the<br/><em>feeling.</em></h1><p>Spaces, people, food and small moments — a visual diary of Café De Verde and GAVA.</p></div></section><section className="gallery-work"><div className="page-container"><div className="gallery-toolbar"><div><span className="eyebrow dark">THE COLLECTION</span><h2>Little moments,<br/><em>beautifully kept.</em></h2></div><div className="gallery-filters">{filters.map(f=><button key={f} className={filter===f?'active':''} onClick={()=>setFilter(f)}>{f}</button>)}</div></div><div className="gallery-masonry">{shown.map((item,i)=><motion.button key={item[1]} className={`gallery-tile tile-${i%5}`} layout initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.45,delay:i*.04}} onClick={()=>setActive(item)}><img src={item[0]} alt={item[1]}/><span><small>{item[2]}</small><strong>{item[1]}</strong></span><ArrowUpRight size={18}/></motion.button>)}</div></div></section><section className="gallery-note"><div className="page-container"><span className="eyebrow dark">COME SEE IT YOURSELF</span><h2>The best frame<br/><em>is the one you're in.</em></h2><a href="/contact" className="text-link">Plan your visit <ArrowUpRight size={16}/></a></div></section><AnimatePresence>{active&&<motion.div className="gallery-lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setActive(null)}><button aria-label="Close"><X size={24}/></button><motion.img src={active[0]} alt={active[1]} initial={{scale:.96}} animate={{scale:1}} onClick={e=>e.stopPropagation()}/><div><span>{active[2]}</span><strong>{active[1]}</strong></div></motion.div>}</AnimatePresence></main>}
export default GalleryPage;
