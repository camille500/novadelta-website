<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    <!-- Navigation -->
    <nav class="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center space-x-4">
            <img src="/images/b125b038-4c52-4e07-9222-11ea329d6370.png" alt="NOVA DELTA" class="h-12 w-auto transition-transform hover:scale-105">
            <span class="text-2xl font-bold bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent">NOVA DELTA</span>
          </div>
          
          <!-- Navigation Links -->
          <div class="hidden md:flex space-x-8">
            <a href="#services" class="text-slate-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" class="text-slate-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" class="text-slate-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          
          <!-- CTA Button -->
          <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"></div>
      <div class="absolute inset-0 opacity-40">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(156, 146, 172, 0.1) 1px, transparent 0); background-size: 60px 60px;"></div>
      </div>
      
      <!-- Unique Geometric Shapes -->
      <div class="absolute top-20 left-10 w-32 h-32 border-2 border-blue-200 rounded-full opacity-20 animate-spin-slow"></div>
      <div class="absolute top-40 right-20 w-24 h-24 border-2 border-purple-200 transform rotate-45 opacity-20 animate-pulse"></div>
      <div class="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-green-200 rounded-full opacity-20 animate-bounce-slow"></div>
      
      <div class="relative max-w-7xl mx-auto text-center">
        <div class="mb-12">
          <!-- Animated Badge with Micro-interactions -->
          <div class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-8 animate-fade-in-up group cursor-pointer hover:scale-105 transition-all duration-500 ease-out hover:shadow-lg">
            <span class="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 animate-pulse group-hover:animate-spin transition-all duration-700 ease-out"></span>
            <span class="group-hover:text-purple-700 transition-colors duration-500 ease-out">AI Innovation Experts</span>
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
          
          <h1 class="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-tight">
            Transform Your Business with
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient-x relative group cursor-pointer">
              AI Innovation
              <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out origin-left"></span>
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
            We help forward-thinking companies harness the power of Large Language Models 
            to drive <span class="font-semibold text-slate-800 hover:text-blue-600 transition-colors duration-500 ease-out cursor-pointer">innovation</span>, 
            <span class="font-semibold text-slate-800 hover:text-purple-600 transition-colors duration-500 ease-out cursor-pointer">efficiency</span>, and 
            <span class="font-semibold text-slate-800 hover:text-indigo-600 transition-colors duration-500 ease-out cursor-pointer">competitive advantage</span>.
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button class="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-2xl text-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl shadow-lg relative overflow-hidden">
            <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out"></span>
            <span class="relative flex items-center">
              Start Your AI Journey
              <svg class="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-600 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </button>
          <button class="group border-2 border-slate-300 text-slate-700 px-12 py-5 rounded-2xl text-lg font-bold hover:border-blue-600 hover:text-blue-600 transition-all duration-700 ease-out hover:shadow-xl relative overflow-hidden">
            <span class="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out"></span>
            <span class="relative flex items-center">
              <svg class="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-600 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Watch Demo
            </span>
          </button>
        </div>
        
        <!-- Enhanced Stats with Micro-animations -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="text-center group cursor-pointer hover:scale-105 transition-transform duration-600 ease-out">
            <div class="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-600 ease-out">500+</div>
            <div class="text-slate-600 group-hover:text-blue-700 transition-colors duration-500 ease-out">Projects Delivered</div>
            <div class="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center"></div>
          </div>
          <div class="text-center group cursor-pointer hover:scale-105 transition-transform duration-600 ease-out">
            <div class="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-600 ease-out">98%</div>
            <div class="text-slate-600 group-hover:text-purple-700 transition-colors duration-500 ease-out">Client Satisfaction</div>
            <div class="w-16 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center"></div>
          </div>
          <div class="text-center group cursor-pointer hover:scale-105 transition-transform duration-600 ease-out">
            <div class="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-600 ease-out">24/7</div>
            <div class="text-slate-600 group-hover:text-green-700 transition-colors duration-500 ease-out">Support Available</div>
            <div class="w-16 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center"></div>
          </div>
        </div>
      </div>
      
      <!-- Enhanced Floating Elements with Unique Patterns -->
      <div class="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float blur-xl"></div>
      <div class="absolute top-40 right-20 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float-delayed blur-xl"></div>
      <div class="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-float-slow blur-xl"></div>
      
      <!-- Unique Corner Accents -->
      <div class="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-blue-300 opacity-30"></div>
      <div class="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-purple-300 opacity-30"></div>
      <div class="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-green-300 opacity-30"></div>
      <div class="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-indigo-300 opacity-30"></div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: linear-gradient(45deg, #3b82f6 25%, transparent 25%), linear-gradient(-45deg, #3b82f6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #3b82f6 75%), linear-gradient(-45deg, transparent 75%, #3b82f6 75%); background-size: 20px 20px; background-position: 0 0, 0 10px, 10px -10px, -10px 0px;"></div>
      </div>
      
      <!-- Unique Background Elements -->
      <div class="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <div class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-8 group cursor-pointer hover:scale-105 transition-all duration-500 ease-out">
            <span class="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 animate-pulse group-hover:animate-spin transition-all duration-700 ease-out"></span>
            What We Offer
            <svg class="w-4 h-4 ml-3 group-hover:rotate-12 transition-transform duration-600 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
          <h2 class="text-5xl font-black text-slate-900 mb-6">
            Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 relative group cursor-pointer">
              Services
              <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out origin-left"></span>
            </span>
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive LLM solutions tailored to your business needs, delivered with expertise and precision.
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Consultancy -->
          <div class="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-2 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
            <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-1000 ease-out blur-xl"></div>
            <div class="relative">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-600 ease-out shadow-lg group-hover:shadow-blue-200 group-hover:shadow-2xl">
                <svg class="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-600 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-500 ease-out">Consultancy</h3>
              <p class="text-slate-600 leading-relaxed mb-6">
                Strategic guidance and expert advice to help you identify AI opportunities, assess feasibility, and develop implementation roadmaps.
              </p>
              <div class="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-600 ease-out">
                Learn More
                <svg class="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-600 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Training -->
          <div class="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-2 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
            <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-1000 ease-out blur-xl"></div>
            <div class="relative">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-600 ease-out shadow-lg group-hover:shadow-purple-200 group-hover:shadow-2xl">
                <svg class="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-600 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5c1.746 0 3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-500 ease-out">Training</h3>
              <p class="text-slate-600 leading-relaxed mb-6">
                Comprehensive training programs to upskill your team in LLM technologies, best practices, and implementation strategies.
              </p>
              <div class="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform duration-600 ease-out">
                Learn More
                <svg class="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-600 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Implementation -->
          <div class="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-green-300 hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-2 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"></div>
            <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-1000 ease-out blur-xl"></div>
            <div class="relative">
              <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-600 ease-out shadow-lg group-hover:shadow-green-200 group-hover:shadow-2xl">
                <svg class="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-600 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors duration-500 ease-out">Implementation</h3>
              <p class="text-slate-600 leading-relaxed mb-6">
                End-to-end implementation services including custom development, integration, deployment, and ongoing support.
              </p>
              <div class="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-600 ease-out">
                Learn More
                <svg class="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-600 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-bold text-slate-900 mb-6">
              Why Choose NOVA DELTA?
            </h2>
            <p class="text-lg text-slate-600 mb-8 leading-relaxed">
              We're not just another AI consultancy. We're a team of passionate technologists, 
              strategists, and business experts who understand that successful AI implementation 
              requires more than just technical expertise.
            </p>
            
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-slate-700">Proven track record with Fortune 500 companies</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-slate-700">End-to-end support from concept to deployment</span>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-slate-700">Ongoing optimization and support</span>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
              <h3 class="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p class="mb-6 text-blue-100">
                Let's discuss how AI can transform your business operations and drive growth.
              </p>
              <button class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-slate-900 mb-4">
          Let's Build Something Amazing Together
        </h2>
        <p class="text-xl text-slate-600 mb-12">
          Ready to unlock the potential of AI in your business? Get in touch with our team.
        </p>
        
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Email</h3>
            <p class="text-slate-600">hello@novadelta.ai</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
            <p class="text-slate-600">+1 (555) 123-4567</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Location</h3>
            <p class="text-slate-600">San Francisco, CA</p>
          </div>
        </div>
        
        <button class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
          Start Your Project
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-4 mb-6">
              <img src="/images/b125b038-4c52-4e07-9222-11ea329d6370.png" alt="NOVA DELTA" class="h-10 w-auto">
              <span class="text-xl font-bold text-white">NOVA DELTA</span>
            </div>
            <p class="text-slate-400">
              Transforming businesses through AI innovation and strategic implementation.
            </p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Services</h4>
            <ul class="space-y-2 text-slate-400">
              <li><a href="#" class="hover:text-white transition-colors">Strategy & Consulting</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Custom Development</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Integration & Deployment</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-slate-400">
              <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Team</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Connect</h4>
            <ul class="space-y-2 text-slate-400">
              <li><a href="#" class="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 NOVA DELTA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Component logic can be added here
</script>

<style>
@import "tailwindcss";

/* Custom Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out;
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #7c3aed);
}

/* Enhanced hover effects with smoother easing */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.group:hover .group-hover\:rotate-12 {
  transform: rotate(12deg);
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.group:hover .group-hover\:translate-x-2 {
  transform: translateX(0.5rem);
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.group:hover .group-hover\:scale-x-100 {
  transform: scaleX(1);
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Smooth transitions for all elements */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-duration: 200ms;
}

/* Enhanced focus states */
button:focus, a:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Custom selection color */
::selection {
  background-color: #3b82f6;
  color: white;
}

::-moz-selection {
  background-color: #3b82f6;
  color: white;
}
</style>
