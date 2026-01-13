import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ThreeBackground from './components/ThreeBackground';
import StickerCard from './components/TiltCard';
import { 
  ArrowRight, 
  Layout, BarChart, PenTool, TrendingUp,
  CheckCircle, Instagram, Facebook, Linkedin, Youtube, MessageCircle
} from 'lucide-react';

const ScribbleArrow = () => (
  <svg className="w-32 h-32 text-pop-yellow absolute -right-12 -bottom-12 z-20 hidden md:block drop-shadow-lg" viewBox="0 0 100 100">
    <path d="M10,10 Q50,50 80,80 M80,80 L60,80 M80,80 L80,60" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const YellowStar = ({ className }: { className?: string }) => (
  <div className={`text-pop-yellow ${className}`}>
    <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-md">
      <path d="M50 0 L61 35 L98 35 L68 57 L79 91 L50 70 L21 91 L32 57 L2 35 L39 35 Z" />
    </svg>
  </div>
);

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle subtle parallax effect for the hero image
  const handleMouseMove = (e: React.MouseEvent) => {
    // Only calculate on desktop to save performance
    if (window.innerWidth >= 768) {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate offset. 
      // Dividing by 25 makes the movement feeling responsive but weighty.
      setMousePos({ 
        x: (clientX - centerX) / 25, 
        y: (clientY - centerY) / 25 
      });
    }
  };

  return (
    <div 
      className="relative min-h-screen font-sans selection:bg-pop-pink selection:text-white pb-20"
      onMouseMove={handleMouseMove}
    >
      <ThreeBackground />
      <Navbar />

      <main className="relative z-10 pt-24 overflow-hidden">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[90vh] flex flex-col justify-center relative px-6 py-12">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="relative z-20 order-2 lg:order-1">
              <div className="inline-block bg-white text-black px-4 py-1 font-bold transform -rotate-2 mb-6 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
                🚀 GROWTH STRATEGIST
              </div>
              
              <h1 className="text-white font-display text-[5rem] sm:text-[6rem] leading-[0.85] drop-shadow-[4px_4px_0px_#000]">
                PORT<br/>
                <span className="text-pop-yellow relative">
                  FOLIO
                  <YellowStar className="absolute -top-12 -right-12 w-16 h-16 animate-pulse" />
                </span>
              </h1>
              
              <div className="mt-8 relative">
                <p className="font-hand text-white text-2xl sm:text-3xl rotate-[-2deg] mb-2 text-pop-pink">
                  Hi, I'm Sairaj Islam
                </p>
                <p className="text-gray-200 text-lg max-w-md bg-black/50 p-4 rounded-lg backdrop-blur-sm border-l-4 border-pop-yellow">
                  I help businesses grow from the initial stage using data-driven digital marketing, performance advertising, and creative branding.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="https://wa.me/917865907001" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-pop-yellow hover:bg-white text-black font-display text-xl px-8 py-4 border-4 border-white shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wide cursor-pointer relative z-30"
                >
                  Crack the Best Deal
                </a>
                <a 
                  href="#services" 
                  className="bg-transparent text-white font-bold px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-all uppercase tracking-wide flex items-center gap-2 cursor-pointer relative z-30"
                >
                  View Work <ArrowRight size={20} />
                </a>
              </div>
            </div>

            {/* Hero Image / Graphic */}
            <div className="relative order-1 lg:order-2 flex justify-center items-center h-full min-h-[500px]">
              {/* Abstract decorative glow */}
              <div className="absolute inset-0 bg-pop-pink rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
              
              {/* Parallax Container for the Image Frame (Outer Movement) */}
              <div 
                className="relative z-10 will-change-transform"
                style={{ 
                  transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px) rotate(2deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                 {/* 
                    Polaroid Frame Structure
                    - Clean white border with padding (creates the white frame)
                    - Content stacked vertically: Image then Yellow Bar
                 */}
                 <div className="bg-white p-3 pb-0 shadow-[32px_32px_0px_rgba(0,0,0,0.3)] w-[320px] sm:w-[380px] relative transition-transform duration-500 hover:scale-[1.01] hover:shadow-[24px_24px_0px_rgba(0,0,0,0.2)] border-4 border-white ring-1 ring-gray-100/20">
                    
                    {/* Inner Content Column */}
                    <div className="flex flex-col">
                        {/* Image Area with Inner Parallax (Depth Effect) */}
                        <div className="aspect-[4/5] bg-gray-900 overflow-hidden relative border-b-4 border-black group">
                           {/* Subtle Gradient Overlay for 'High-End' feel */}
                           <div className="absolute inset-0 z-10 bg-gradient-to-tr from-pop-pink/10 to-transparent mix-blend-overlay pointer-events-none" />
                           <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent pointer-events-none opacity-60" />

                           {/* The Image itself moves slightly opposite to container to create depth */}
                           <img 
                             src="sairaj   islam .png" 
                             alt="Sairaj Islam" 
                             className="w-[115%] h-[115%] max-w-none object-cover filter brightness-105 contrast-110 transition-transform duration-100 ease-out -ml-[7.5%] -mt-[7.5%]"
                             style={{
                               transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`
                             }}
                           />
                        </div>
                        
                        {/* Yellow Name Bar - Stacked below image, inside white frame */}
                        <div className="bg-pop-yellow h-20 flex items-center justify-center w-full mt-0 relative z-20">
                           <span className="font-display text-4xl font-black uppercase text-black tracking-widest drop-shadow-sm">
                             SAIRAJ ISLAM
                           </span>
                        </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <ScribbleArrow />
                    
                    {/* 'Available' sticker */}
                    <div className="absolute -top-6 -left-6 bg-green-500 text-white font-bold p-3 px-5 rounded-full border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] z-30 animate-bounce">
                       OPEN TO WORK
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION - TORN PAPER */}
        <section id="about" className="relative py-20">
          <div className="absolute top-0 left-0 w-full h-12 bg-paper torn-paper-top -mt-10"></div>
          <div className="bg-paper py-12 px-6 relative">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              
              <div className="order-2 md:order-1 relative">
                 <div className="absolute -top-10 -left-10 text-6xl opacity-20 transform -rotate-12">💡</div>
                 <h2 className="font-display text-5xl md:text-6xl text-blue-texture mb-6">
                   ABOUT ME
                 </h2>
                 <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                   I’m <span className="bg-pop-yellow px-1 border border-black">Sairaj Islam</span>, an experienced digital marketer focused on helping startups, small businesses, and growing brands achieve measurable growth.
                 </p>
                 <p className="text-gray-600 mb-8">
                   My approach combines creativity, analytics, and strategic planning to ensure every campaign is optimized for maximum return on investment. I believe in building long-term partnerships, not just short-term campaigns.
                 </p>
                 
                 <div className="flex gap-4 flex-wrap">
                    <div className="bg-white p-3 border-2 border-black shadow-[4px_4px_0px_#000] rotate-2 hover:scale-110 transition-transform">
                       <span className="font-bold text-sm">📈 Data Driven</span>
                    </div>
                    <div className="bg-white p-3 border-2 border-black shadow-[4px_4px_0px_#000] -rotate-1 hover:scale-110 transition-transform">
                       <span className="font-bold text-sm">🎨 Creative</span>
                    </div>
                    <div className="bg-white p-3 border-2 border-black shadow-[4px_4px_0px_#000] rotate-1 hover:scale-110 transition-transform">
                       <span className="font-bold text-sm">🤝 Partner</span>
                    </div>
                 </div>
              </div>

              <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
                 <StickerCard rotation={2} bg="bg-blue-100">
                    <h3 className="font-display text-4xl mb-2 text-blue-800">50+</h3>
                    <p className="font-hand text-sm">Projects Delivered</p>
                 </StickerCard>
                 <StickerCard rotation={-3} bg="bg-pink-100" className="mt-8">
                    <h3 className="font-display text-4xl mb-2 text-pink-800">3x</h3>
                    <p className="font-hand text-sm">ROI Average</p>
                 </StickerCard>
                 <StickerCard rotation={-2} bg="bg-yellow-100">
                    <h3 className="font-display text-4xl mb-2 text-yellow-800">24/7</h3>
                    <p className="font-hand text-sm">Support</p>
                 </StickerCard>
                 <StickerCard rotation={3} bg="bg-green-100" className="mt-8">
                    <h3 className="font-display text-4xl mb-2 text-green-800">100%</h3>
                    <p className="font-hand text-sm">Transparency</p>
                 </StickerCard>
              </div>

            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-paper torn-paper-bottom -mb-10 z-10"></div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-20 relative">
               <h2 className="font-display text-6xl text-white drop-shadow-[0_4px_0_#000]">
                 HOW CAN I HELP?
               </h2>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                  <YellowStar className="absolute top-0 right-[20%] w-12 h-12 animate-bounce" />
                  <YellowStar className="absolute bottom-0 left-[20%] w-8 h-8 animate-pulse" />
               </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Service 1 */}
                <StickerCard rotation={-1}>
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4 border-2 border-black">
                    <TrendingUp />
                  </div>
                  <h3 className="font-display text-2xl mb-3">Paid Advertising</h3>
                  <ul className="space-y-2 text-sm text-gray-700 font-medium">
                    <li>• Google Ads (Search & Display)</li>
                    <li>• Meta Ads (FB & Insta)</li>
                    <li>• YouTube Ads</li>
                    <li>• WhatsApp Business Ads</li>
                  </ul>
                </StickerCard>

                {/* Service 2 */}
                <StickerCard rotation={1} bg="bg-yellow-50">
                  <div className="w-12 h-12 bg-pop-yellow rounded-full flex items-center justify-center text-black mb-4 border-2 border-black">
                    <BarChart />
                  </div>
                  <h3 className="font-display text-2xl mb-3">Marketing & Growth</h3>
                  <ul className="space-y-2 text-sm text-gray-700 font-medium">
                    <li>• SEO Optimization</li>
                    <li>• Email Marketing</li>
                    <li>• Performance Strategies</li>
                    <li>• ROI-Focused Scaling</li>
                  </ul>
                </StickerCard>

                {/* Service 3 */}
                <StickerCard rotation={-1}>
                   <div className="w-12 h-12 bg-pop-pink rounded-full flex items-center justify-center text-white mb-4 border-2 border-black">
                    <PenTool />
                  </div>
                  <h3 className="font-display text-2xl mb-3">Creative Design</h3>
                  <ul className="space-y-2 text-sm text-gray-700 font-medium">
                    <li>• Brand Identity & Logos</li>
                    <li>• UI & Interface Design</li>
                    <li>• High-CTR Thumbnails</li>
                    <li>• Social Media Graphics</li>
                  </ul>
                </StickerCard>

                {/* Service 4 */}
                <StickerCard rotation={2} bg="bg-green-50" className="lg:col-span-3 lg:w-1/2 lg:mx-auto">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white border-2 border-black">
                        <Layout />
                      </div>
                      <h3 className="font-display text-2xl">Management & Audit</h3>
                   </div>
                   <p className="mb-4 font-medium text-gray-700">Keeping your business organized and on track.</p>
                   <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white border border-black text-xs font-bold rounded-full">Content Writing</span>
                      <span className="px-3 py-1 bg-white border border-black text-xs font-bold rounded-full">Financial Records</span>
                      <span className="px-3 py-1 bg-white border border-black text-xs font-bold rounded-full">Business Audit</span>
                   </div>
                </StickerCard>

             </div>
          </div>
        </section>

        {/* WHY CHOOSE ME - DARK SECTION */}
        <section id="why-me" className="py-20 px-6 relative">
          <div className="max-w-4xl mx-auto bg-[#111] border-4 border-white p-8 md:p-12 relative shadow-[16px_16px_0px_#222]">
             {/* Decor */}
             <div className="absolute -top-6 -right-6 bg-pop-pink text-white font-display text-xl px-6 py-2 rotate-3 border-2 border-white shadow-[4px_4px_0px_#FFF]">
               WHY ME?
             </div>

             <h2 className="font-display text-4xl text-white mb-8">Performance Marketing Approach</h2>
             <p className="text-gray-400 mb-8 text-lg">
               I don't just run ads; I execute a strategy. My goal is simple: <span className="text-white font-bold underline decoration-pop-yellow decoration-4">Spend Smarter, Grow Faster.</span>
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Result-oriented strategies",
                  "Creative + Analytical Mindset",
                  "Transparent Reporting",
                  "Business-focused Execution"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white">
                    <div className="text-pop-yellow"><CheckCircle /></div>
                    <span className="font-bold text-lg">{item}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 px-6 text-center">
           <div className="relative inline-block group">
             <div className="absolute inset-0 bg-pop-pink transform rotate-3 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
             <div className="relative bg-white border-4 border-black p-12 md:p-20 shadow-[12px_12px_0px_rgba(255,215,0,1)]">
                <h2 className="font-display text-5xl md:text-7xl mb-6 leading-tight">
                  UNLOCK NEW<br/>BUSINESS IDEAS
                </h2>
                <p className="font-hand text-xl md:text-2xl text-gray-600 mb-10 transform -rotate-1">
                  Ready to scale your brand?
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:contact@sairajislam.com?subject=Join%20The%20Team" 
                    className="bg-black text-white font-display text-xl px-10 py-4 hover:bg-pop-yellow hover:text-black hover:scale-105 transition-all shadow-[4px_4px_0px_#888]"
                  >
                    JOIN OUR TEAM
                  </a>
                  <a 
                    href="https://wa.me/917865907001?text=I%20would%20like%20to%20create%20an%20account" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border-4 border-black font-bold text-xl px-10 py-4 hover:bg-gray-100 transition-all"
                  >
                     CREATE ACCOUNT
                  </a>
                </div>
             </div>
           </div>
        </section>

        {/* FOOTER / CONTACT */}
        <footer id="contact" className="bg-black text-white pt-20 pb-10 border-t-8 border-pop-pink">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
               <div>
                  <h3 className="font-display text-4xl mb-8">Get In Touch</h3>
                  <a 
                    href="https://wa.me/917865907001" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-2xl md:text-3xl font-bold hover:text-green-400 transition-colors mb-4"
                  >
                    <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
                    +91 7865907001
                  </a>
                  <p className="text-gray-400">Available 24/7 for support and consultation.</p>
               </div>
               
               <div className="flex flex-col items-start md:items-end">
                  <h3 className="font-display text-2xl mb-6">Connect</h3>
                  <div className="flex gap-6">
                     <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-3 rounded-full hover:bg-pop-pink hover:text-white transition-colors"><Instagram /></a>
                     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Facebook /></a>
                     <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-3 rounded-full hover:bg-blue-700 hover:text-white transition-colors"><Linkedin /></a>
                     <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-3 rounded-full hover:bg-red-600 hover:text-white transition-colors"><Youtube /></a>
                  </div>
               </div>
            </div>

            <div className="text-center border-t border-gray-800 pt-10 font-mono text-xs text-gray-500">
               <p>© 2025 SAIRAJ ISLAM. ALL RIGHTS RESERVED.</p>
               <p className="mt-2">Backend Features: Export Data (Leads, Financials) Available for Admin.</p>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;