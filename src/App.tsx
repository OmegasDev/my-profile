import React from 'react';
import { Download, Mail, MessageCircle, Linkedin, ExternalLink, Sparkles, Code, Zap, Target, Users, Instagram } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-lavender-100 to-purple-100 relative overflow-hidden" style={{backgroundColor: '#EEE7F6'}}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="relative text-center max-w-5xl mx-auto z-10">
          {/* Premium Profile Avatar */}
          <div className="relative mb-12 inline-block">
            <div className="relative">
              <div className="w-40 h-40 mx-auto bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-600 rounded-full shadow-2xl relative overflow-hidden border-4 border-purple-300/50">
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                <div className="absolute inset-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-5xl font-bold tracking-wider">E</span>
                </div>
              </div>
              {/* Multiple Glow Layers */}
              <div className="absolute inset-0 bg-purple-400 rounded-full blur-2xl opacity-30 scale-110 animate-pulse"></div>
              <div className="absolute inset-0 bg-purple-300 rounded-full blur-3xl opacity-15 scale-125"></div>
            </div>
          </div>
          
          {/* Premium Name with Glow */}
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-purple-700 to-purple-800 mb-2 leading-tight tracking-tight">
              Am <br />  Emmanuel 
            </h1>
            <div className="absolute inset-0 text-6xl md:text-8xl font-black text-purple-400/20 blur-lg">
              Emmanuel Izuchukwu Sunday
            </div>
          </div>
          
          {/* Premium Subtitle */}
          <div className="relative mb-16">
            <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed tracking-wide">
              <span className="text-gray-900 font-medium">Founder.</span> 
              <span className="text-purple-700 mx-2">Builder.</span> 
              <span className="text-purple-800">Developer</span> solving real problems with tech.
            </p>
            <div className="absolute inset-0 text-2xl md:text-3xl text-purple-400/10 blur-sm">
              Founder. Builder. Developer solving real problems with tech.
            </div>
          </div>
          
          {/* Refined CTA Button */}
          <div className="relative">
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-500 hover:scale-105 hover:shadow-xl border border-purple-400/30 backdrop-blur-sm">
              {/* Button Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <Download className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10 tracking-wide">Download CV</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Section Title with Glow */}
          <div className="relative mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-purple-700 mb-4">
              About Me
            </h2>
            <div className="absolute inset-0 text-5xl md:text-6xl font-black text-purple-400/15 blur-lg">
              About Me
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-lg shadow-purple-400/50"></div>
          </div>
          
          {/* Premium Content Cards */}
          <div className="space-y-8 text-left max-w-4xl mx-auto">
            {/* First Card - Introduction */}
            <div className="relative group">
              <div className="bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-purple-400/20 backdrop-blur-xl rounded-3xl p-12 border border-purple-300/40 shadow-2xl">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <p className="text-xl text-gray-700 leading-relaxed relative z-10">
                  Hi, I'm <span className="text-gray-900 font-semibold text-2xl">Emmanuel Izuchukwu Sunday</span>.
                </p>
              </div>
            </div>
            
            {/* Second Card - Main About Content */}
            <div className="relative group">
              <div className="bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-purple-400/20 backdrop-blur-xl rounded-3xl p-12 border border-purple-300/40 shadow-2xl">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="space-y-6 text-xl text-gray-700 leading-relaxed relative z-10">
                  <p>
                    I'm a <span className="text-purple-700 font-semibold"> software developer</span>, <span className="text-indigo-700 font-semibold">startup founder</span>, and <span className="text-gray-900 font-semibold">product builder</span> from Nigeria — crafting solutions where most people see problems.
                  </p>
                  
                  <p>
                    I started as a frontend developer, but I've since evolved into building complete products — from websites and mobile apps to automations and AI-powered systems.
                  </p>
                  
                  <p>
                    Right now, I'm bootstrapping <span className="text-purple-700 font-bold text-2xl">Dayloop</span>, a lean tech company focused on building fast, affordable tools for small businesses and creators across Africa. I'm also building passion projects like <span className="text-indigo-700 font-semibold">Moonway</span> (an AI-powered social profile optimizer) and a university-based innovation platform to help African students build startups before they graduate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Best Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Title */}
          <div className="relative mb-20 text-center">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-purple-700 mb-4">
              What I Do Best
            </h2>
            <div className="absolute inset-0 text-5xl md:text-6xl font-black text-purple-400/15 blur-lg">
              What I Do Best
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-lg shadow-purple-400/50"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: "Web & App Development", desc: "React, React Native, Next.js, Node.js", gradient: "from-purple-500 to-indigo-500" },
              { icon: Sparkles, title: "Automation & AI Agents", desc: "n8n, OpenRouter, Langchain, GPT APIs", gradient: "from-indigo-500 to-purple-500" },
              { icon: Zap, title: "Low-code MVP Building", desc: "Fast prototyping and validation", gradient: "from-purple-600 to-pink-500" },
              { icon: Target, title: "Technical Strategy", desc: "Lean Startup Execution", gradient: "from-indigo-600 to-purple-600" }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-purple-400/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-300/40 shadow-2xl text-center">
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  {/* Icon with Glow */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border border-white/30`}>
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className={`absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">{item.title}</h3>
                  <p className="text-gray-600 text-lg relative z-10">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Section Title */}
          <div className="relative mb-20 text-center">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-purple-700 mb-4">
              What I'm Building
            </h2>
            <div className="absolute inset-0 text-5xl md:text-6xl font-black text-purple-400/15 blur-lg">
              What I'm Building
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-lg shadow-purple-400/50"></div>
          </div>
          
          <div className="space-y-8">
            {[
              { title: "Dayloop", desc: "Lean tech agency helping startups launch fast", url: "https://dayloop.netlify.app" },
              { title: "My Full Portfolio", desc: "Explore my full body of work", url: "https://emmanuel-i-portfolio.netlify.app" }
            ].map((project, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-purple-400/20 backdrop-blur-xl rounded-3xl p-10 border border-purple-300/40 shadow-2xl">
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                      <p className="text-xl text-gray-600">{project.desc}</p>
                    </div>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-500 transition-colors p-4 rounded-full bg-white/50 hover:bg-white/70 backdrop-blur-sm border border-purple-200/50"
                    >
                      <ExternalLink className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Superpowers Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Section Title */}
          <div className="relative mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-purple-700 mb-4">
              My Superpowers
            </h2>
            <div className="absolute inset-0 text-5xl md:text-6xl font-black text-purple-400/15 blur-lg">
              My Superpowers
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-lg shadow-purple-400/50"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Turning ideas into MVPs with speed",
              "Solving real problems with limited resources", 
              "Learning on the go and teaching others",
              "Creating things that help people survive and grow"
            ].map((power, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-purple-400/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-300/40 shadow-2xl">
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 relative z-10 leading-relaxed">{power}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Mission Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Section Title */}
          <div className="relative mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-purple-700 mb-4">
              Current Mission
            </h2>
            <div className="absolute inset-0 text-5xl md:text-6xl font-black text-purple-400/15 blur-lg">
              Current Mission
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-lg shadow-purple-400/50"></div>
          </div>
          
          <div className="relative group">
            <div className="bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-purple-400/20 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-purple-300/40 shadow-2xl">
              {/* Mission Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              <p className="text-2xl md:text-3xl text-gray-800 font-light leading-relaxed relative z-10">
                Build tools and platforms that empower young Africans — starting with myself as the first product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Section Title */}
          <div className="relative mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-purple-700 mb-4">
              Let's Work Together
            </h2>
            <div className="absolute inset-0 text-5xl md:text-6xl font-black text-purple-400/15 blur-lg">
              Let's Work Together
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full shadow-lg shadow-purple-400/50"></div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-700 mb-12">Let's Connect If You...</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                "Want a dev who thinks like a founder",
                "Need help building or launching your MVP",
                "Are interested in African tech and youth empowerment", 
                "Want to partner, invest, or collaborate"
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-purple-400/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-300/40 shadow-xl">
                    {/* Card Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    
                    <p className="text-gray-800 text-lg font-medium relative z-10">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Buttons - Mobile: 2 per row, Desktop: All in one row */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-4 md:gap-6">
            {[
              { icon: MessageCircle, label: "WhatsApp", color: "from-green-500 to-green-600", href: "https://wa.me/2347039312869" },
              { icon: Mail, label: "Email", color: "from-gray-600 to-gray-700", href: "mailto:omegasantiago444@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", color: "from-blue-600 to-blue-700", href: "#" },
              { icon: Instagram, label: "Instagram", color: "from-pink-500 to-purple-600", href: "https://www.instagram.com/emmanuel_izuchukwu_sunday" }
            ].map((contact, index) => (
              <a 
                key={index}
                href={contact.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-purple-400/20 backdrop-blur-xl text-gray-800 px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-500 hover:scale-105 border border-purple-300/40 shadow-xl"
              >
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-indigo-400/30 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <contact.icon className="w-5 h-5 relative z-10" />
                <span className="relative z-10 text-center">{contact.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <div className="relative text-center py-16 border-t border-purple-300/30">
        <p className="text-gray-600 text-lg">© 2025 Emmanuel Izuchukwu Sunday</p>
      </div>
    </div>
  );
}

export default App;