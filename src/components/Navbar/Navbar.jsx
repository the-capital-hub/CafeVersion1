import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const navLinks=[
  {name:"Our Story",path:"/our-story"},
  {name:"Menu",path:"/menu"},
  {name:"Events",path:"/events"},
  {name:"GAVA",path:"/gava"},
  {name:"Gallery",path:"/gallery"},
  {name:"Contact",path:"/contact"},
];

function Navbar(){
  const [scrolled,setScrolled]=useState(false);
  const [open,setOpen]=useState(false);
  const location=useLocation();
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>30);fn();window.addEventListener("scroll",fn);return()=>window.removeEventListener("scroll",fn)},[]);
  useEffect(()=>{setOpen(false);window.scrollTo(0,0)},[location.pathname]);
  useEffect(()=>{document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);
  return <>
    <motion.header className={`navbar ${scrolled?"navbar-scrolled":""} ${open?"navbar-menu-open":""}`} initial={{y:-24,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.65,ease:[.22,1,.36,1]}}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-main">CAFÉ DE VERDE</span>
          <span className="logo-sub">FOOD • COFFEE • COMMUNITY</span>
        </Link>
        <nav className="navbar-links">
          {navLinks.map(link=><Link key={link.path} to={link.path} className={location.pathname===link.path?"navbar-link navbar-link-active":"navbar-link"}>{link.name}</Link>)}
        </nav>
        <Link to="/book-table" className="navbar-book-button"><span>Book a Table</span><ArrowUpRight size={15}/></Link>
        <button className="navbar-menu-button" onClick={()=>setOpen(v=>!v)} aria-label="Toggle navigation" aria-expanded={open}>{open?<X size={23}/>:<Menu size={23}/>}</button>
      </div>
    </motion.header>
    <AnimatePresence>{open&&<motion.div className="mobile-menu" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className="mobile-menu-inner">
        <span className="mobile-menu-label">EXPLORE</span>
        <nav className="mobile-menu-links">
          {navLinks.map((link,i)=><Link key={link.path} to={link.path} className={location.pathname===link.path?"mobile-link-active":""}><span>{String(i+1).padStart(2,"0")}</span><strong>{link.name}</strong><ArrowUpRight size={19}/></Link>)}
        </nav>
        <Link to="/book-table" className="mobile-book-button">Book a Table <ArrowUpRight size={18}/></Link>
        <div className="mobile-menu-footer"><span>CAFÉ DE VERDE</span><span>FOOD • COFFEE • COMMUNITY</span></div>
      </div>
    </motion.div>}</AnimatePresence>
  </>;
}
export default Navbar;
