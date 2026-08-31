import { motion } from "framer-motion";
import { ArrowUpRight, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import "./FinalCTA.css";
const image="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=2000&q=88";
function FinalCTA(){return <section className="final-cta"><img src={image} alt="Warm café atmosphere"/><div className="final-cta-overlay"/><motion.div className="final-cta-inner" initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7}}><span className="final-cta-kicker">COME AS YOU ARE</span><h2>Your next<br/><em>favourite place.</em></h2><p>Good coffee. Good food. Good people. A warm place to stay and even better stories to take home.</p><div className="final-cta-actions"><Link to="/book-table" className="final-cta-primary"><Coffee size={16}/>Book a Table<ArrowUpRight size={16}/></Link><Link to="/contact" className="final-cta-secondary">Find us <ArrowUpRight size={16}/></Link></div></motion.div></section>}
export default FinalCTA;
