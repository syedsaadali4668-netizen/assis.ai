import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Menu, X, BrainCircuit, Bot, Workflow, Code2,
  GraduationCap, Palette, Cpu, Network, Database, Sparkles, ShieldCheck,
  Lightbulb, Rocket, Search, Layers3, Check, Mail, Phone, MapPin, Github,
  Linkedin, Instagram, ChevronDown, ExternalLink, MessageCircle, BookOpen,
  Microscope, FlaskConical, Terminal, WandSparkles, ChartNoAxesCombined,
  Globe2, Zap, FileText, MonitorSmartphone
} from 'lucide-react';

const EMAIL = 'theassis.ai@gmail.com';
const PHONE = '03144668442';
const PHONE_LINK = '923144668444';
const services = [
  { id:'ai', num:'01', title:'AI Development & Intelligent Systems', short:'Turn complex ideas into intelligent products built around real-world needs.', icon:BrainCircuit, color:'cyan', items:['Custom AI applications','AI chatbots & copilots','Retrieval-Augmented Generation (RAG)','Knowledge-based AI systems','AI API integrations','Intelligent decision support'] },
  { id:'agents', num:'02', title:'AI Agents & Automation', short:'Build autonomous workflows that reason, coordinate tools, and get meaningful work done.', icon:Bot, color:'violet', items:['Autonomous AI agents','Multi-agent architectures','LangGraph workflows','MCP integrations','Business process automation','Human-in-the-loop workflows'] },
  { id:'software', num:'03', title:'Software & Web Development', short:'Beautiful, scalable digital products engineered for performance and usability.', icon:Code2, color:'blue', items:['Business websites','SaaS applications','Full-stack web apps','React & Next.js development','Node.js APIs','Admin dashboards & portals'] },
  { id:'ml', num:'04', title:'Machine Learning & Data Intelligence', short:'Transform data into useful predictions, insights, and intelligent capabilities.', icon:ChartNoAxesCombined, color:'teal', items:['Machine learning models','Predictive analytics','Deep learning & neural networks','Natural language processing','Computer vision prototypes','Model evaluation & optimization'] },
  { id:'academic', num:'05', title:'Academic & Research Solutions', short:'Professional technical documentation and thoughtfully structured academic resources.', icon:GraduationCap, color:'amber', items:['Final year project support','AI & software project development','Thesis and research formatting','LaTeX books & documents','Technical reports & documentation','Educational content & MCQ books'] },
  { id:'design', num:'06', title:'Graphic Design & Digital Branding', short:'Create a consistent visual identity and polished communication for your brand.', icon:Palette, color:'pink', items:['Logo & brand identity','Marketing posters & campaigns','Social media creative','Brochures & company profiles','Presentation design','UI visual design'] }
];

const products = [
  {name:'ASSIS Workforce',tag:'AI AGENTS',status:'Concept',icon:Bot,desc:'A coordinated AI workforce designed to assist with multi-step tasks, research, and operational workflows.'},
  {name:'ASSIS Research',tag:'KNOWLEDGE',status:'In development',icon:Microscope,desc:'A research-focused environment for exploring information, organizing knowledge, and accelerating discovery.'},
  {name:'ASSIS MCP',tag:'CONNECTIVITY',status:'Concept',icon:Network,desc:'A connection layer concept for bringing AI systems together with tools, resources, and external services.'},
  {name:'ASSIS Eval',tag:'AI QUALITY',status:'Concept',icon:ShieldCheck,desc:'An evaluation concept for assessing AI responses, agent behavior, and workflow quality.'},
  {name:'ASSIS Model Lab',tag:'EXPERIMENTATION',status:'In development',icon:FlaskConical,desc:'An experimental workspace for model exploration, prototyping, testing, and optimization.'}
];

const techGroups = [
  {title:'AI & MACHINE LEARNING',items:['Python','PyTorch','TensorFlow','Scikit-learn','Hugging Face']},
  {title:'AGENTS & ORCHESTRATION',items:['LangChain','LangGraph','CrewAI','MCP','RAG']},
  {title:'FRONTEND & BACKEND',items:['React','Next.js','TypeScript','Node.js','FastAPI']},
  {title:'DATA & ENGINEERING',items:['PostgreSQL','Supabase','Firebase','Git','LaTeX']}
];

const projects = [
  {title:'Intelligent Study Assistant',type:'AI Applications',desc:'A learning companion concept combining topic exploration, quizzes, and structured study support.',tags:['AI','Education','Web App'],icon:BrainCircuit},
  {title:'Agentic Workflow Studio',type:'AI Agents',desc:'A multi-step automation concept for coordinating specialized agents and connected tools.',tags:['Agents','Automation','MCP'],icon:Workflow},
  {title:'Modern SaaS Dashboard',type:'Web Development',desc:'A responsive product interface with analytics, workspace navigation, and reusable components.',tags:['React','SaaS','UI/UX'],icon:MonitorSmartphone},
  {title:'Academic Publishing System',type:'Academic & Research',desc:'A structured publishing workflow for clean technical documents and educational resources.',tags:['LaTeX','Publishing','Research'],icon:BookOpen},
  {title:'Predictive ML Prototype',type:'Machine Learning',desc:'A demonstration concept for training, evaluating, and presenting machine learning models.',tags:['Python','ML','Analytics'],icon:ChartNoAxesCombined},
  {title:'Brand Identity System',type:'Branding & Design',desc:'A cohesive identity direction spanning logo applications, marketing assets, and digital visuals.',tags:['Branding','Design','Creative'],icon:Palette}
];

const categories = ['All','AI Applications','AI Agents','Web Development','Machine Learning','Academic & Research','Branding & Design'];

function Logo({small=false}) {
  return <a className={`brand ${small?'brand-small':''}`} href="#home" aria-label="ASSIS AI home">
    <span className="brand-mark"><span className="brand-core">A</span><i/><b/></span>
    <span className="brand-name">ASSIS<span>AI</span><small>INTELLIGENT SYSTEMS</small></span>
  </a>;
}

function SectionHeading({eyebrow,title,description,center=false}) {
  return <div className={`section-heading ${center?'center':''}`}>
    <span className="eyebrow"><i/>{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>;
}

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [activeFilter,setActiveFilter] = useState('All');
  const [openService,setOpenService] = useState(null);
  const [form,setForm] = useState({name:'',email:'',phone:'',service:'AI Development & Intelligent Systems',budget:'',message:''});
  const [formError,setFormError] = useState('');
  const [sent,setSent] = useState(false);
  const visibleProjects = activeFilter==='All' ? projects : projects.filter(p=>p.type===activeFilter);

  const nav = [['Home','#home'],['About','#about'],['Services','#services'],['Ecosystem','#ecosystem'],['Research','#research'],['Work','#work']];
  const closeMenu = () => setMenuOpen(false);
  const update = e => setForm({...form,[e.target.name]:e.target.value});
  const submit = e => {
    e.preventDefault();
    if(!form.name.trim() || !form.email.trim() || !form.message.trim()) { setFormError('Please complete your name, email, and project details.'); return; }
    setFormError('');
    const subject = encodeURIComponent(`Project inquiry — ${form.service}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nBudget: ${form.budget || 'Not specified'}\n\nProject details:\n${form.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="navbar">
      <div className="nav-inner wrap">
        <Logo/>
        <nav className="desktop-nav">{nav.map(([n,h])=><a key={n} href={h}>{n}</a>)}</nav>
        <div className="nav-actions">
          <a className="nav-contact" href="#contact">Let's Talk <ArrowUpRight size={15}/></a>
          <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button>
        </div>
      </div>
      <AnimatePresence>{menuOpen && <motion.div className="mobile-menu" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}>
        {nav.map(([n,h])=><a key={n} href={h} onClick={closeMenu}>{n}<ArrowUpRight size={15}/></a>)}
        <a className="mobile-cta" href="#contact" onClick={closeMenu}>Start a project <ArrowRight size={16}/></a>
      </motion.div>}</AnimatePresence>
    </header>

    <main>
      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <motion.div className="hero-kicker" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
            <span className="pulse-dot"/> AI INNOVATION & ENGINEERING COMPANY
          </motion.div>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.08}}>Engineering<br/><span className="gradient-text">Intelligence.</span><br/>Building the Future.</motion.h1>
          <motion.p className="hero-description" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.18}}>We turn ambitious ideas into intelligent digital solutions — from autonomous AI agents and custom applications to modern software, machine learning, and research systems.</motion.p>
          <motion.div className="hero-buttons" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.5,delay:.28}}>
            <a className="btn btn-primary" href="#services">Explore our services <ArrowRight size={17}/></a>
            <a className="btn btn-quiet" href="#about">Discover ASSIS <ArrowUpRight size={16}/></a>
          </motion.div>
          <div className="hero-proof"><div className="proof-avatars"><span>A</span><span>AI</span><span>+</span></div><div><strong>Ideas into intelligent outcomes</strong><small>Engineering • Innovation • Impact</small></div></div>
        </div>
        <motion.div className="hero-visual" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.2}}>
          <div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/>
          <div className="visual-glow"/>
          <div className="neural-core"><div className="core-ring"><BrainCircuit size={54}/></div><span>ASSIS AI</span><small>INTELLIGENCE ENGINE</small></div>
          <div className="node node-one"><span className="node-icon"><Bot size={18}/></span><div><b>AI Agents</b><small>Autonomous workflows</small></div><i className="node-live"/></div>
          <div className="node node-two"><span className="node-icon blue"><Network size={18}/></span><div><b>Connected systems</b><small>Tools & knowledge</small></div></div>
          <div className="node node-three"><span className="node-icon violet"><ChartNoAxesCombined size={18}/></span><div><b>Data intelligence</b><small>Insights & models</small></div></div>
          <div className="visual-chip chip-top"><Sparkles size={14}/> Built for what’s next</div>
          <div className="visual-chip chip-bottom"><span className="pulse-dot"/> Systems thinking, engineered</div>
          <svg className="connector-lines" viewBox="0 0 600 500" aria-hidden="true"><path d="M300 250 L150 125 M300 250 L470 140 M300 250 L455 380" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5 7"/><defs><linearGradient id="lineGrad"><stop stopColor="#19c4d1"/><stop offset="1" stopColor="#8d75ed"/></linearGradient></defs></svg>
        </motion.div>
        <div className="hero-bottom-note"><span>01 / 06</span><span>INTELLIGENCE, DESIGNED TO MAKE A DIFFERENCE</span><span className="note-line"/></div>
      </section>

      <section className="trust-strip">
        <div className="wrap trust-inner"><span>OUR ENGINEERING FOCUS</span><div><BrainCircuit/> Artificial Intelligence</div><div><Workflow/> Intelligent Automation</div><div><Code2/> Software Engineering</div><div><GraduationCap/> Research & Learning</div></div>
      </section>

      <section className="section about-section wrap" id="about">
        <div className="about-grid">
          <div><SectionHeading eyebrow="WHO WE ARE" title={<>More than technology.<br/><span className="gradient-text">We build intelligence.</span></>} description="ASSIS AI brings together artificial intelligence, software engineering, automation, and research to create useful solutions for people, teams, and businesses."/></div>
          <div className="about-side"><p>Technology should do more than look impressive. It should solve meaningful problems, simplify work, and open up new possibilities. That belief shapes how we approach every product, project, and partnership.</p><a className="text-link" href="#process">How we work <ArrowUpRight size={16}/></a></div>
        </div>
        <div className="principle-grid">
          {[{n:'01',t:'Innovation first',d:'Explore better ways to solve challenging problems.',i:Lightbulb},{n:'02',t:'Engineering excellence',d:'Build with thoughtful architecture and attention to detail.',i:Cpu},{n:'03',t:'Practical intelligence',d:'Make advanced technology useful, clear, and accessible.',i:Zap}].map(x=><div className="principle-card" key={x.n}><div className="principle-top"><span>{x.n}</span><x.i size={22}/></div><h3>{x.t}</h3><p>{x.d}</p></div>)}
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="wrap">
          <SectionHeading eyebrow="WHAT WE DO" title={<>Technology services for<br/><span className="gradient-text">what comes next.</span></>} description="From the first idea to a working digital experience, explore the capabilities we bring together under one roof."/>
          <div className="services-grid">{services.map((s,i)=><motion.article className={`service-card ${openService===s.id?'expanded':''}`} key={s.id} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.45,delay:(i%3)*.07}}>
            <div className="service-card-top"><span className="service-number">{s.num}</span><span className={`service-icon ${s.color}`}><s.icon size={23}/></span></div>
            <h3>{s.title}</h3><p>{s.short}</p>
            <div className="service-details">
              <button className="service-expand" onClick={()=>setOpenService(openService===s.id?null:s.id)} aria-expanded={openService===s.id}>{openService===s.id?'Hide capabilities':'Explore capabilities'} <span><ArrowUpRight size={16}/></span></button>
              <AnimatePresence>{openService===s.id && <motion.ul className="capability-list" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}>{s.items.map(item=><li key={item}><Check size={14}/>{item}</li>)}</motion.ul>}</AnimatePresence>
            </div>
          </motion.article>)}</div>
        </div>
      </section>

      <section className="section ecosystem-section wrap" id="ecosystem">
        <div className="ecosystem-heading"><SectionHeading eyebrow="THE ASSIS ECOSYSTEM" title={<>A connected vision for<br/><span className="gradient-text">intelligent work.</span></>} description="Beyond client solutions, we are shaping a family of concepts and tools designed around the next generation of AI-powered work."/><div className="ecosystem-aside"><span className="ecosystem-orbit-icon"><Layers3 size={27}/></span><p>One ecosystem.<br/><strong>Many possibilities.</strong></p></div></div>
        <div className="product-grid">{products.map((p,i)=><motion.article className="product-card glass-card" key={p.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}>
          <div className="product-card-head"><span className="product-icon"><p.icon size={22}/></span><span className="status-pill">{p.status}</span></div>
          <span className="product-tag">{p.tag}</span><h3>{p.name}</h3><p>{p.desc}</p><div className="product-foot"><span>ASSIS PRODUCT CONCEPT</span><ArrowUpRight size={17}/></div>
        </motion.article>)}</div>
        <p className="fine-print">Product names and descriptions represent the ASSIS AI ecosystem vision. Availability and capabilities will be announced as products are developed.</p>
      </section>

      <section className="technology-section" id="research"><div className="wrap technology-layout">
        <div><SectionHeading eyebrow="OUR TECHNOLOGY LANDSCAPE" title={<>Built with the tools<br/>that move ideas <span className="gradient-text">forward.</span></>} description="We work across a modern technology landscape, selecting tools based on the needs of each project — not trends alone."/></div>
        <div className="tech-groups">{techGroups.map((g,i)=><div className="tech-group" key={g.title}><div className="tech-group-title"><span>0{i+1}</span>{g.title}</div><div className="tech-tags">{g.items.map(t=><span key={t}>{t}</span>)}</div></div>)}</div>
      </div></section>

      <section className="section process-section wrap" id="process">
        <SectionHeading eyebrow="HOW WE WORK" title={<>A clear path from idea<br/>to <span className="gradient-text">impact.</span></>} description="A collaborative process that keeps the goals clear and the work moving forward."/>
        <div className="process-grid">{[{n:'01',t:'Discover',d:'Understand your goals, users, challenges, and requirements.',i:Search},{n:'02',t:'Strategize',d:'Define the right approach, scope, architecture, and roadmap.',i:Lightbulb},{n:'03',t:'Design',d:'Shape the experience, system structure, and visual direction.',i:Layers3},{n:'04',t:'Develop',d:'Build, test, refine, and validate the solution.',i:Terminal},{n:'05',t:'Deliver',d:'Prepare the finished work and a clear handover.',i:Rocket}].map((s,i)=><div className="process-step" key={s.n}><div className="step-icon"><s.i size={21}/><span>{s.n}</span></div><h3>{s.t}</h3><p>{s.d}</p>{i!==4&&<div className="step-connector"/>}</div>)}</div>
      </section>

      <section className="section work-section" id="work"><div className="wrap">
        <div className="work-heading"><SectionHeading eyebrow="SELECTED CAPABILITIES" title={<>Ideas made <span className="gradient-text">tangible.</span></>} description="A preview of the kinds of digital experiences and technical work we can create."/><a href="#contact" className="text-link">Discuss a project <ArrowUpRight size={16}/></a></div>
        <div className="filter-row">{categories.map(c=><button className={activeFilter===c?'filter active':'filter'} key={c} onClick={()=>setActiveFilter(c)}>{c}</button>)}</div>
        <div className="portfolio-grid">{visibleProjects.map((p,i)=><motion.article className="portfolio-card" key={p.title} layout initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.3}}>
          <div className={`project-art art-${i%6}`}><div className="art-window"><div className="window-dots"><i/><i/><i/></div><div className="art-content"><span className="art-symbol"><p.icon size={35}/></span><div className="art-bars"><i/><i/><i/></div></div><div className="art-orb"/></div><span className="project-category">{p.type}</span></div>
          <div className="project-info"><h3>{p.title}</h3><p>{p.desc}</p><div className="project-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div>
        </motion.article>)}</div>
        <p className="fine-print">The portfolio cards above are illustrative project concepts, not claims of completed client engagements.</p>
      </div></section>

      <section className="section why-section wrap">
        <div className="why-main"><span className="eyebrow"><i/> THE ASSIS APPROACH</span><h2>Turning complex challenges into <span className="gradient-text">intelligent solutions.</span></h2><p>We bring technical thinking and thoughtful design together to make technology more useful, reliable, and accessible.</p><a className="btn btn-primary" href="#contact">Build with ASSIS <ArrowRight size={17}/></a></div>
        <div className="why-points">{[{t:'AI-first thinking',d:'Intelligence considered from the start.'},{t:'Solutions shaped around you',d:'Technology aligned with your actual needs.'},{t:'Modern engineering',d:'Maintainable, responsive, scalable foundations.'},{t:'Clarity at every step',d:'Transparent communication and collaboration.'}].map((x,i)=><div className="why-point" key={x.t}><span>0{i+1}</span><div><h3>{x.t}</h3><p>{x.d}</p></div><ArrowUpRight size={17}/></div>)}</div>
      </section>

      <section className="cta-band wrap"><div className="cta-decoration"><div/><div/><div/></div><div className="cta-content"><span className="eyebrow light"><i/> LET'S CREATE SOMETHING MEANINGFUL</span><h2>Have an idea?<br/><span>Let's build it intelligently.</span></h2><p>Tell us what you are working on. We would love to explore how ASSIS AI can help.</p><a className="btn btn-white" href="#contact">Start a conversation <ArrowRight size={17}/></a></div><div className="cta-stamp"><Sparkles size={30}/><span>IDEAS<br/>INTO<br/>IMPACT</span></div></section>

      <section className="section contact-section wrap" id="contact">
        <div className="contact-layout">
          <div className="contact-copy"><SectionHeading eyebrow="GET IN TOUCH" title={<>Let's talk about<br/><span className="gradient-text">what's possible.</span></>} description="Have a project in mind, a question about our services, or an idea you'd like to explore? Get in touch with the ASSIS AI team."/>
            <div className="contact-methods">
              <a href={`mailto:${EMAIL}`} className="contact-method"><span><Mail size={19}/></span><div><small>EMAIL US</small><strong>{EMAIL}</strong></div><ArrowUpRight size={16}/></a>
              <a href={`https://wa.me/${PHONE_LINK}`} target="_blank" rel="noreferrer" className="contact-method"><span><MessageCircle size={19}/></span><div><small>CALL / WHATSAPP</small><strong>{PHONE}</strong></div><ArrowUpRight size={16}/></a>
              <div className="contact-method"><span><MapPin size={19}/></span><div><small>OUR LOCATION</small><strong>#4 Software Technology Park, UOK, Kotli AJ&K</strong></div></div>
            </div>
          </div>
          <form className="contact-form glass-card" onSubmit={submit}>
            <div className="form-heading"><span>PROJECT INQUIRY</span><h3>Tell us about your idea.</h3><p>Share a few details and we'll be in touch.</p></div>
            <div className="form-row"><label>Full name<input name="name" value={form.name} onChange={update} placeholder="Your name" required/></label><label>Email address<input type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required/></label></div>
            <div className="form-row"><label>Phone number <span>(optional)</span><input name="phone" value={form.phone} onChange={update} placeholder="+92 ..."/></label><label>Service of interest<select name="service" value={form.service} onChange={update}>{services.map(s=><option key={s.id}>{s.title}</option>)}</select></label></div>
            <label>Project budget <span>(optional)</span><select name="budget" value={form.budget} onChange={update}><option value="">Select a range</option><option>To be discussed</option><option>Under $500</option><option>$500 – $1,500</option><option>$1,500 – $5,000</option><option>$5,000+</option></select></label>
            <label>Project details<textarea name="message" value={form.message} onChange={update} placeholder="Tell us what you want to build, improve, or explore..." rows="4" required/></label>
            {formError && <p className="form-error">{formError}</p>}
            {sent && <p className="form-success"><Check size={15}/> Your email app should open with your inquiry prepared. If it didn't, email us directly at {EMAIL}.</p>}
            <button className="btn btn-primary submit-btn" type="submit">Send project inquiry <ArrowRight size={17}/></button>
            <small className="form-note">This frontend form opens your email application. No information is stored on this website.</small>
          </form>
        </div>
      </section>
    </main>

    <footer className="footer"><div className="wrap">
      <div className="footer-top"><div className="footer-brand"><Logo/><p>Engineering intelligence through AI, software, automation, and research.</p><div className="social-links"><a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={17}/></a><a href={`https://wa.me/${PHONE_LINK}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17}/></a><a href="#home" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="#home" aria-label="Instagram"><Instagram size={17}/></a></div></div>
        <div className="footer-col"><h4>EXPLORE</h4><a href="#about">About ASSIS</a><a href="#services">Our Services</a><a href="#ecosystem">AI Ecosystem</a><a href="#work">Our Work</a></div>
        <div className="footer-col"><h4>SERVICES</h4><a href="#services">AI & Intelligent Systems</a><a href="#services">AI Agents & Automation</a><a href="#services">Software Development</a><a href="#services">Machine Learning</a><a href="#services">Academic & Research</a></div>
        <div className="footer-col"><h4>CONTACT</h4><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href={`https://wa.me/${PHONE_LINK}`} target="_blank" rel="noreferrer">{PHONE}</a><span>Kotli, Azad Jammu & Kashmir</span></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} ASSIS AI. All rights reserved.</span><span>Engineering Intelligence. Building the Future.</span><a href="#home">Back to top ↑</a></div>
    </div></footer>
  </div>;
}

export default App;