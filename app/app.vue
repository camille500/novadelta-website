<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <!-- Navigation -->
    <nav class="bg-white/80 backdrop-blur-md shadow-lg border-b border-blue-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center space-x-4">
            <img src="/images/b125b038-4c52-4e07-9222-11ea329d6370.png" alt="NOVA DELTA" class="h-12 w-auto">
            <span class="text-2xl font-bold bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent drop-shadow-xl">NOVA DELTA</span>
          </div>
          
          <!-- Navigation Links -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#services" class="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">Solutions</a>
            <a href="#about" class="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">About</a>
            <a href="#contact" class="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">Contact</a>
            <button class="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-950 hover:to-indigo-950 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button @click="toggleMobileMenu" class="text-slate-700 hover:text-blue-600 transition-colors duration-300 relative z-50" ref="mobileMenuButton">
              <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 transform -translate-y-4"
          enter-to-class="opacity-100 transform translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 transform translate-y-0"
          leave-to-class="opacity-0 transform -translate-y-4"
        >
          <div v-if="mobileMenuOpen" class="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-blue-100 md:hidden z-40" ref="mobileMenu">
            <div class="px-4 py-6 space-y-4">
              <a href="#services" @click="closeMobileMenu" class="block text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium py-3 px-4 rounded-lg hover:bg-blue-50">Solutions</a>
              <a href="#about" @click="closeMobileMenu" class="block text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium py-3 px-4 rounded-lg hover:bg-blue-50">About</a>
              <a href="#contact" @click="closeMobileMenu" class="block text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium py-3 px-4 rounded-lg hover:bg-blue-50">Contact</a>
              <button @click="closeMobileMenu" class="w-full bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-950 hover:to-indigo-950 transition-all duration-300 shadow-lg hover:shadow-xl mt-4">
                Get Started
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      <div class="absolute inset-0 opacity-30">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0); background-size: 60px 60px;" ref="heroPattern"></div>
      </div>
      
      <!-- Unique Geometric Shapes -->
      <div class="absolute top-20 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 border-2 border-blue-300 rounded-full opacity-30" ref="rotatingCircle"></div>
      <div class="absolute top-40 right-4 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 border-2 border-indigo-400 transform rotate-45 opacity-30" ref="pulsingSquare"></div>
      <div class="absolute bottom-20 left-1/4 w-16 sm:w-20 h-16 sm:h-20 border-2 border-purple-300 rounded-full opacity-30" ref="bouncingCircle"></div>
      
      <!-- Creative Color Accents -->
      <div class="absolute top-32 left-1/3 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-40 blur-sm" ref="creativeAccent1"></div>
      <div class="absolute top-48 right-1/4 w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-35 blur-sm" ref="creativeAccent2"></div>
      <div class="absolute bottom-32 right-1/3 w-20 h-20 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full opacity-30 blur-sm" ref="creativeAccent3"></div>
      
      <div class="relative max-w-7xl mx-auto text-center">
        <div class="mb-12">
          <!-- Animated Badge with Micro-interactions -->
          <div class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-800 text-sm font-medium mb-8 group cursor-pointer border border-blue-200" ref="animatedBadge">
            <span class="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3" ref="badgeDot"></span>
            <span class="group-hover:text-blue-900 transition-colors duration-300">LLM Consultancy & Implementation</span>
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" ref="badgeArrow">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
          
          <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-slate-900 mb-6 sm:mb-8 leading-tight" ref="heroTitle">
            Unlock Business Potential with
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 relative group cursor-pointer drop-shadow-2xl filter brightness-110">
              LLM Solutions
              <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-indigo-900 transform scale-x-0 origin-left" ref="titleUnderline"></span>
            </span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-2 sm:px-0" ref="heroDescription">
            We help businesses transform their operations through strategic LLM implementation, 
            delivering <span class="font-semibold text-emerald-700 hover:text-emerald-600 transition-colors duration-300 cursor-pointer">automation</span>, 
            <span class="font-semibold text-orange-700 hover:text-orange-600 transition-colors duration-300 cursor-pointer">compliance</span>, and 
            <span class="font-semibold text-violet-700 hover:text-violet-600 transition-colors duration-300 cursor-pointer">secure solutions</span> that drive growth.
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0">
          <button class="group bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold hover:from-blue-950 hover:to-indigo-950 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg relative overflow-hidden w-full sm:w-auto touch-target mobile-hover" ref="primaryButton">
            <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full" ref="buttonShimmer"></span>
            <span class="relative flex items-center">
              Transform Your Business
              <svg class="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" ref="primaryButtonArrow">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </button>
          <button class="group border-2 border-blue-300 text-blue-700 px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold hover:border-indigo-500 hover:text-indigo-600 hover:bg-blue-50 transition-all duration-300 hover:shadow-xl relative overflow-hidden w-full sm:w-auto touch-target mobile-hover" ref="secondaryButton">
            <span class="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-100/50 to-blue-50/0 transform -skew-x-12 -translate-x-full" ref="secondaryButtonShimmer"></span>
            <span class="relative flex items-center">
              <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" ref="secondaryButtonIcon">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Explore Solutions
            </span>
          </button>
        </div>
        
        <!-- Enhanced Stats with Micro-animations -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="text-center group cursor-pointer bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300" ref="stat1">
            <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 mb-2" ref="stat1Number">85%</div>
            <div class="text-slate-600 group-hover:text-emerald-700 transition-colors duration-300">Cost Reduction</div>
            <div class="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mt-3 transform scale-x-0 origin-center" ref="stat1Underline"></div>
          </div>
          <div class="text-center group cursor-pointer bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300" ref="stat2">
            <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 mb-2" ref="stat2Number">100%</div>
            <div class="text-slate-600 group-hover:text-orange-700 transition-colors duration-300">Compliance Rate</div>
            <div class="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-400 mx-auto mt-3 transform scale-x-0 origin-center" ref="stat2Underline"></div>
          </div>
          <div class="text-center group cursor-pointer bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 hover:border-violet-300 hover:shadow-lg transition-all duration-300" ref="stat3">
            <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-violet-500 to-purple-500 mb-2" ref="stat3Number">90%</div>
            <div class="text-slate-600 group-hover:text-violet-700 transition-colors duration-300">Time Savings</div>
            <div class="w-16 h-1 bg-gradient-to-r from-violet-500 to-purple-400 mx-auto mt-3 transform scale-x-0 origin-center" ref="stat3Underline"></div>
          </div>
        </div>
      </div>
      
      <!-- Enhanced Floating Elements with Unique Patterns -->
      <div class="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-30 blur-xl" ref="floatingElement1"></div>
      <div class="absolute top-40 right-20 w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-30 blur-xl" ref="floatingElement2"></div>
      <div class="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full opacity-30 blur-xl" ref="floatingElement3"></div>
      
      <!-- Unique Corner Accents -->
      <div class="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-blue-400 opacity-40" ref="cornerAccent1"></div>
      <div class="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-indigo-500 opacity-40" ref="cornerAccent2"></div>
      <div class="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-purple-400 opacity-40" ref="cornerAccent3"></div>
      <div class="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-blue-500 opacity-40" ref="cornerAccent4"></div>
    </section>

    <!-- LLM Benefits Section - Creative Zigzag Layout -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden" ref="benefitsSection">
      <!-- Animated Background Particles -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-60" style="top: 10%; left: 10%;" ref="particle1"></div>
        <div class="absolute w-3 h-3 bg-orange-400 rounded-full opacity-40" style="top: 30%; right: 20%;" ref="particle2"></div>
        <div class="absolute w-2 h-2 bg-violet-400 rounded-full opacity-50" style="bottom: 40%; left: 30%;" ref="particle3"></div>
        <div class="absolute w-4 h-4 bg-blue-400 rounded-full opacity-30" style="bottom: 20%; right: 15%;" ref="particle4"></div>
        <div class="absolute w-1 h-1 bg-teal-400 rounded-full opacity-70" style="top: 60%; left: 70%;" ref="particle5"></div>
        <div class="absolute w-3 h-3 bg-rose-400 rounded-full opacity-35" style="top: 80%; right: 40%;" ref="particle6"></div>
      </div>
      
      <!-- Flowing Line Background -->
      <svg class="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800" ref="flowingLines">
        <path d="M0,400 Q300,200 600,400 T1200,400" stroke="url(#gradient1)" stroke-width="2" fill="none" ref="flowPath1"/>
        <path d="M0,300 Q400,500 800,300 T1200,300" stroke="url(#gradient2)" stroke-width="2" fill="none" ref="flowPath2"/>
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#3b82f6"/>
            <stop offset="50%" stop-color="#8b5cf6"/>
            <stop offset="100%" stop-color="#06b6d4"/>
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#10b981"/>
            <stop offset="50%" stop-color="#f59e0b"/>
            <stop offset="100%" stop-color="#ef4444"/>
          </linearGradient>
        </defs>
      </svg>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-20" ref="benefitsHeader">
          <div class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100/80 via-purple-100/80 to-teal-100/80 backdrop-blur-sm border border-blue-200/50 text-blue-800 text-sm font-medium mb-8">
            <span class="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse"></span>
            The Power of LLMs
          </div>
          <h2 class="text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
            Transform Your Business
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">Operations</span>
          </h2>
          <p class="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Large Language Models revolutionize how businesses operate, offering unprecedented 
            <span class="font-semibold text-emerald-600">automation capabilities</span> and 
            <span class="font-semibold text-violet-600">intelligent decision-making</span> support.
          </p>
        </div>
        
        <!-- Creative Asymmetrical Layout -->
        <div class="space-y-16">
          <!-- First Row - Left Emphasis -->
          <div class="grid lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-8">
              <div class="bg-gradient-to-br from-white via-emerald-50 to-white p-8 lg:p-12 rounded-3xl shadow-2xl border border-emerald-100 hover:border-emerald-300 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-emerald-200/50" ref="benefit1">
                <div class="flex items-start space-x-6">
                  <div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center flex-shrink-0 transform rotate-3">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-slate-900 mb-4">Intelligent Task Automation</h3>
                    <p class="text-slate-600 text-lg leading-relaxed mb-4">
                      Eliminate repetitive workflows and focus your team on strategic initiatives. Our LLM solutions 
                      can handle complex document processing, data analysis, and decision-making tasks.
                    </p>
                    <div class="flex items-center text-emerald-600 font-semibold">
                      <span>Up to 85% time savings</span>
                      <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:col-span-4 flex justify-center">
              <div class="w-48 h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center" ref="benefit1Visual">
                <div class="w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                  <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Second Row - Right Emphasis -->
          <div class="grid lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-4 flex justify-center lg:order-1">
              <div class="w-48 h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl flex items-center justify-center transform -rotate-6" ref="benefit2Visual">
                <div class="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
                  <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="lg:col-span-8 lg:order-2">
              <div class="bg-gradient-to-bl from-white via-orange-50 to-white p-8 lg:p-12 rounded-3xl shadow-2xl border border-orange-100 hover:border-orange-300 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-orange-200/50" ref="benefit2">
                <div class="flex items-start space-x-6">
                  <div>
                    <h3 class="text-2xl font-bold text-slate-900 mb-4">Operational Excellence</h3>
                    <p class="text-slate-600 text-lg leading-relaxed mb-4">
                      Streamline operations and accelerate decision-making processes with intelligent insights. 
                      Our solutions provide real-time analytics and predictive recommendations.
                    </p>
                    <div class="flex items-center text-orange-600 font-semibold">
                      <span>3x faster decisions</span>
                      <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center flex-shrink-0 transform -rotate-3">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Third & Fourth Row - Side by Side Creative Cards -->
          <div class="grid lg:grid-cols-2 gap-8">
            <!-- Security Card with Hexagon -->
            <div class="relative" ref="benefit3">
              <div class="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-violet-200 to-violet-400 opacity-20 transform rotate-45 rounded-2xl"></div>
              <div class="relative bg-gradient-to-tr from-violet-50 via-white to-violet-50 p-8 rounded-3xl shadow-xl border border-violet-200 hover:border-violet-400 transition-all duration-500 hover:shadow-violet-200/50">
                <div class="flex items-center justify-between mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center" style="clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <div class="text-right">
                    <div class="text-3xl font-bold text-violet-600">100%</div>
                    <div class="text-sm text-violet-500">Secure</div>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-3">Enterprise Security</h3>
                <p class="text-slate-600">
                  Maintain the highest security standards with end-to-end encryption, 
                  compliance monitoring, and zero-trust architecture.
                </p>
              </div>
            </div>
            
            <!-- Growth Card with Dynamic Shape -->
            <div class="relative" ref="benefit4">
              <div class="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-400 opacity-20 rounded-full"></div>
              <div class="relative bg-gradient-to-bl from-blue-50 via-white to-blue-50 p-8 rounded-3xl shadow-xl border border-blue-200 hover:border-blue-400 transition-all duration-500 hover:shadow-blue-200/50">
                <div class="flex items-center justify-between mb-6">
                  <div class="text-left">
                    <div class="text-3xl font-bold text-blue-600">5x</div>
                    <div class="text-sm text-blue-500">Growth</div>
                  </div>
                  <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center transform rotate-12">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-3">Scalable Growth</h3>
                <p class="text-slate-600">
                  Expand your capabilities exponentially without proportional resource increases. 
                  AI-powered solutions that grow with your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <!-- Animated playful background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Floating geometric shapes -->
        <div class="absolute top-20 left-10 w-8 h-8 border-2 border-blue-300 rounded-full opacity-40 animate-bounce" style="animation-duration: 3s; animation-delay: 0s;"></div>
        <div class="absolute top-40 right-20 w-6 h-6 border-2 border-indigo-400 transform rotate-45 opacity-30 animate-pulse" style="animation-duration: 4s; animation-delay: 1s;"></div>
        <div class="absolute bottom-32 left-1/4 w-4 h-4 bg-emerald-300 rounded-full opacity-40 animate-ping" style="animation-duration: 2s; animation-delay: 0.5s;"></div>
        <div class="absolute top-32 right-1/3 w-10 h-10 border-2 border-purple-300 rounded-lg opacity-30 animate-spin" style="animation-duration: 8s;"></div>
        <div class="absolute bottom-40 right-10 w-5 h-5 bg-orange-300 opacity-35 animate-bounce" style="animation-duration: 2.5s; animation-delay: 1.5s; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;"></div>
        
        <!-- Animated lines and paths -->
        <svg class="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0" />
            </linearGradient>
          </defs>
          <path class="animate-draw" d="M100,200 Q300,100 500,200 T900,200" stroke="url(#lineGradient)" stroke-width="2" fill="none" 
                pathLength="1" style="stroke-dasharray: 1; stroke-dashoffset: 1; animation: drawPath 10s infinite linear;" />
          <path class="animate-draw" d="M50,600 Q400,500 700,600 T950,600" stroke="url(#lineGradient)" stroke-width="2" fill="none" 
                pathLength="1" style="stroke-dasharray: 1; stroke-dashoffset: 1; animation: drawPath 12s infinite linear; animation-delay: 2s;" />
        </svg>
        
        <!-- Floating particles -->
        <div class="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-400 rounded-full opacity-50 animate-float"></div>
        <div class="absolute top-1/3 right-1/5 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-40 animate-float" style="animation-delay: 1s; animation-duration: 4s;"></div>
        <div class="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-30 animate-float" style="animation-delay: 2s; animation-duration: 5s;"></div>
        <div class="absolute bottom-1/3 right-1/6 w-2 h-2 bg-emerald-400 rounded-full opacity-45 animate-float" style="animation-delay: 3s; animation-duration: 3.5s;"></div>
      </div>
      
      <!-- Unique Background Elements -->
      <div class="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-200 rounded-full opacity-20 blur-3xl" ref="servicesBg1"></div>
      <div class="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-emerald-200 via-teal-100 to-blue-200 rounded-full opacity-20 blur-3xl" ref="servicesBg2"></div>
      
      <!-- Creative Floating Accents -->
      <div class="absolute top-40 left-1/4 w-16 h-16 bg-gradient-to-r from-emerald-300 to-teal-400 rounded-full opacity-25 blur-lg" ref="servicesAccent1"></div>
      <div class="absolute bottom-40 right-1/4 w-12 h-12 bg-gradient-to-r from-orange-300 to-red-400 rounded-full opacity-20 blur-lg" ref="servicesAccent2"></div>
      
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <div class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 text-blue-800 text-sm font-medium mb-8 group cursor-pointer border border-blue-200" ref="servicesBadge">
            <span class="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3" ref="servicesBadgeDot"></span>
            What We Offer
            <svg class="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" ref="servicesBadgeArrow">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </div>
          <h2 class="text-5xl font-black text-slate-900 mb-6" ref="servicesTitle">
            Our             <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 relative group cursor-pointer drop-shadow-xl filter brightness-110">
              Services
              <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-indigo-900 transform scale-x-0 origin-left" ref="servicesTitleUnderline"></span>
            </span>
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed" ref="servicesDescription">
            Expert LLM consultancy and implementation services that automate workflows, ensure compliance, and drive business transformation.
          </p>
        </div>
        
        <!-- Creative Asymmetrical Services Layout -->
        <div class="relative">
          <!-- Large Feature Service Card -->
          <div class="grid lg:grid-cols-12 gap-8 mb-12">
            <div class="lg:col-span-8">
              <div class="group bg-gradient-to-br from-white via-emerald-50 to-emerald-100 p-12 rounded-[3rem] border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden shadow-xl" ref="consultancyCard">
                <!-- Decorative Elements -->
                <div class="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full opacity-20 blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                <div class="absolute -bottom-5 -left-5 w-32 h-32 bg-gradient-to-tr from-emerald-200 to-emerald-400 opacity-30 transform rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                
                <div class="relative z-10">
                  <div class="flex items-start space-x-8">
                    <!-- Creative Icon Design -->
                    <div class="relative">
                      <div class="w-24 h-24 bg-gradient-to-br from-emerald-600 to-teal-700 hexagon flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl" ref="consultancyIcon">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                      </div>
                      <!-- Orbit Ring -->
                      <div class="absolute inset-0 w-32 h-32 border-2 border-emerald-300 rounded-full opacity-30 animate-spin" style="animation-duration: 20s;"></div>
                    </div>
                    
                    <div class="flex-1">
                      <div class="flex items-center space-x-4 mb-4">
                        <h3 class="text-3xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">Strategic Consulting</h3>
                        <span class="px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-bold rounded-full">POPULAR</span>
                      </div>
                      <p class="text-slate-600 text-lg leading-relaxed mb-6">
                        Expert guidance on LLM strategy, compliance frameworks, and automation opportunities. 
                        We assess your needs and create tailored roadmaps for successful implementation with 
                        comprehensive risk analysis and ROI projections.
                      </p>
                      <div class="grid grid-cols-2 gap-4 mb-6">
                        <div class="flex items-center space-x-2">
                          <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span class="text-slate-600">Strategy Development</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span class="text-slate-600">Risk Assessment</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span class="text-slate-600">ROI Analysis</span>
                        </div>
                        <div class="flex items-center space-x-2">
                          <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span class="text-slate-600">Compliance Review</span>
                        </div>
                      </div>
                      <button class="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-200" ref="consultancyArrow">
                        Start Consultation
                        <svg class="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Side Stats Card -->
            <div class="lg:col-span-4">
              <div class="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-full flex flex-col justify-center">
                <h4 class="text-xl font-bold text-slate-900 mb-6">Consulting Impact</h4>
                <div class="space-y-6">
                  <div class="text-center">
                    <div class="text-4xl font-black text-emerald-600 mb-2">85%</div>
                    <div class="text-slate-600">Cost Reduction</div>
                    <div class="w-full bg-emerald-100 rounded-full h-2 mt-2">
                      <div class="bg-emerald-600 h-2 rounded-full" style="width: 85%"></div>
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-black text-orange-600 mb-2">6M</div>
                    <div class="text-slate-600">Implementation Time</div>
                    <div class="w-full bg-orange-100 rounded-full h-2 mt-2">
                      <div class="bg-orange-600 h-2 rounded-full" style="width: 60%"></div>
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="text-4xl font-black text-violet-600 mb-2">100%</div>
                    <div class="text-slate-600">Success Rate</div>
                    <div class="w-full bg-violet-100 rounded-full h-2 mt-2">
                      <div class="bg-violet-600 h-2 rounded-full" style="width: 100%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Two Column Asymmetric Cards -->
          <div class="grid lg:grid-cols-2 gap-8">
            <!-- Security & Compliance Card -->
            <div class="group bg-gradient-to-tr from-orange-50 via-white to-red-50 p-8 rounded-3xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden shadow-lg" ref="trainingCard">
              <!-- Geometric Background -->
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200 to-orange-400 opacity-20 diamond group-hover:rotate-45 transition-transform duration-700"></div>
              
              <div class="relative z-10">
                <div class="flex items-center space-x-4 mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-lg" ref="trainingIcon">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300">Security & Compliance</h3>
                    <span class="text-orange-600 text-sm font-semibold">Enterprise Ready</span>
                  </div>
                </div>
                <p class="text-slate-600 leading-relaxed mb-6">
                  Comprehensive security assessments, compliance auditing, and governance frameworks to ensure your LLM solutions meet regulatory requirements and industry standards.
                </p>
                <div class="grid grid-cols-2 gap-3 mb-6 text-sm">
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span class="text-slate-600">GDPR Compliance</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span class="text-slate-600">SOC 2 Auditing</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span class="text-slate-600">Data Encryption</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span class="text-slate-600">Risk Assessment</span>
                  </div>
                </div>
                <div class="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform duration-300" ref="trainingArrow">
                  Learn More
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Implementation Card -->
            <div class="group bg-gradient-to-bl from-violet-50 via-white to-purple-50 p-8 rounded-3xl border-2 border-violet-200 hover:border-violet-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden shadow-lg" ref="implementationCard">
              <!-- Blob Background -->
              <div class="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-violet-200 to-purple-400 opacity-20 blob group-hover:scale-110 transition-transform duration-700"></div>
              
              <div class="relative z-10">
                <div class="flex items-center space-x-4 mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg" ref="implementationIcon">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-slate-900 group-hover:text-violet-600 transition-colors duration-300">Custom Implementation</h3>
                    <span class="text-violet-600 text-sm font-semibold">Full-Stack Solution</span>
                  </div>
                </div>
                <p class="text-slate-600 leading-relaxed mb-6">
                  Full-scale LLM solution development and deployment. From workflow automation to custom integrations, we deliver production-ready solutions tailored to your business.
                </p>
                <div class="space-y-3 mb-6">
                  <div class="flex items-center justify-between">
                    <span class="text-slate-600 text-sm">Custom Development</span>
                    <div class="flex space-x-1">
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <div class="w-2 h-2 bg-violet-300 rounded-full"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-slate-600 text-sm">System Integration</span>
                    <div class="flex space-x-1">
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-slate-600 text-sm">Deployment Support</span>
                    <div class="flex space-x-1">
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <div class="w-2 h-2 bg-violet-500 rounded-full"></div>
                      <div class="w-2 h-2 bg-violet-300 rounded-full"></div>
                      <div class="w-2 h-2 bg-violet-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div class="flex items-center text-violet-600 font-semibold group-hover:translate-x-2 transition-transform duration-300" ref="implementationArrow">
                  Get Started
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LLM Solutions Showcase - Raycast Inspired -->
    <section data-section="solutions" class="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30 blur-3xl animate-pulse" style="top: 10%; left: 10%;"></div>
        <div class="absolute w-64 h-64 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-20 blur-3xl animate-pulse" style="top: 60%; right: 20%;"></div>
        <div class="absolute w-48 h-48 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-25 blur-3xl animate-pulse" style="bottom: 20%; left: 30%;"></div>
      </div>
      
      <!-- Glassmorphic Pattern -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-20">
          <div class="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-blue-100 text-sm font-medium mb-8">
            <span class="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mr-3 animate-pulse"></span>
            Comprehensive LLM Solutions
          </div>
          <h2 data-animate="title" class="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
            There is a 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">solution</span>
            <br>for that
          </h2>
          <p class="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Whatever your business challenge, we have the perfect LLM solution. From automation to analysis, 
            compliance to creativity – we make it possible.
          </p>
        </div>

        <!-- Solutions Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <!-- Document Intelligence -->
          <div data-animate="card" class="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-emerald-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20">
            <div class="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Document Intelligence</h3>
            <p class="text-blue-100 text-sm leading-relaxed">Intelligent document processing, extraction, and analysis for contracts, reports, and compliance materials.</p>
          </div>

          <!-- Process Automation -->
          <div data-animate="card" class="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Process Automation</h3>
            <p class="text-blue-100 text-sm leading-relaxed">Streamline workflows and eliminate repetitive tasks with intelligent automation solutions.</p>
          </div>

          <!-- Smart Analytics -->
          <div data-animate="card" class="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-purple-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Smart Analytics</h3>
            <p class="text-blue-100 text-sm leading-relaxed">Transform data into insights with natural language querying and automated reporting.</p>
          </div>

          <!-- Compliance Guardian -->
          <div data-animate="card" class="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-orange-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">Compliance Guardian</h3>
            <p class="text-blue-100 text-sm leading-relaxed">Ensure regulatory compliance with automated monitoring and reporting solutions.</p>
          </div>

          <!-- Customer Intelligence -->
          <div data-animate="card" class="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-teal-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20">
            <div class="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">Customer Intelligence</h3>
            <p class="text-blue-100 text-sm leading-relaxed">Advanced chatbots and support automation that understand context and maintain compliance.</p>
          </div>

          <!-- Security Sentinel -->
          <div data-animate="card" class="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-red-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20">
            <div class="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-red-300 transition-colors">Security Sentinel</h3>
            <p class="text-blue-100 text-sm leading-relaxed">Advanced threat detection and security analysis powered by intelligent LLM systems.</p>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center">
          <div class="inline-flex items-center space-x-4">
            <button class="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-bold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50">
              <span class="flex items-center">
                Explore All Solutions
                <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </button>
            <div class="text-blue-200 text-sm">
              <span class="font-semibold">150+</span> business problems solved
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-indigo-50 relative overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-6">LLM Applications Across Industries</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            Our solutions drive transformation across diverse business functions and industry sectors.
          </p>
        </div>
        
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-3xl border border-emerald-100 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 7.89a1 1 0 001.41 0L21 7M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-4">Document Processing</h3>
            <p class="text-slate-600">Automated contract analysis, report generation, and regulatory document processing with intelligent extraction and classification.</p>
          </div>
          
          <div class="bg-white p-8 rounded-3xl border border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-4">Customer Support</h3>
            <p class="text-slate-600">Intelligent chatbots and support automation that handle complex queries while maintaining compliance standards.</p>
          </div>
          
          <div class="bg-white p-8 rounded-3xl border border-violet-100 hover:border-violet-300 hover:shadow-2xl transition-all duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-700 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-4">Data Analysis</h3>
            <p class="text-slate-600">Transform raw business data into actionable insights with natural language querying and automated reporting.</p>
          </div>
          
          <div class="bg-white p-8 rounded-3xl border border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-4">Content Creation</h3>
            <p class="text-slate-600">Generate technical documentation, marketing materials, and compliance reports with consistent brand voice.</p>
          </div>
          
          <div class="bg-white p-8 rounded-3xl border border-teal-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-4">Process Optimization</h3>
            <p class="text-slate-600">Identify bottlenecks and optimize workflows through intelligent process analysis and recommendations.</p>
          </div>
          
          <div class="bg-white p-8 rounded-3xl border border-rose-100 hover:border-rose-300 hover:shadow-2xl transition-all duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-700 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-4">Compliance Monitoring</h3>
            <p class="text-slate-600">Real-time compliance tracking and automated regulatory reporting across multiple frameworks and jurisdictions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <!-- Creative Background Accents -->
      <div class="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-emerald-200 to-teal-300 rounded-full opacity-25 blur-2xl" ref="aboutAccent1"></div>
      <div class="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-orange-200 to-red-300 rounded-full opacity-20 blur-2xl" ref="aboutAccent2"></div>
      
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">About NOVA DELTA</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            We are specialists in Large Language Model implementation, helping businesses automate workflows, 
            ensure regulatory compliance, and unlock the transformative potential of AI technology.
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-bold text-slate-900 mb-6">Why Choose Us?</h3>
            <ul class="space-y-4 text-slate-600">
              <li class="flex items-start">
                <svg class="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Expert LLM implementation with focus on workflow automation</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Comprehensive compliance and security framework expertise</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-violet-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Full-cycle support from strategy through implementation</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Tailored solutions for specific business use cases</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden border border-blue-100">
            <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full opacity-30 blur-xl"></div>
            <h4 class="text-xl font-bold text-slate-900 mb-4">Our Approach</h4>
            <p class="text-slate-600 mb-6">
              We focus on practical LLM implementations that deliver measurable business value while 
              maintaining the highest standards of security, compliance, and operational excellence.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <div class="text-2xl font-bold text-emerald-600">50+</div>
                <div class="text-sm text-slate-600">LLM Deployments</div>
              </div>
              <div class="text-center p-4 bg-orange-50 rounded-lg border border-orange-100">
                <div class="text-2xl font-bold text-orange-600">100%</div>
                <div class="text-sm text-slate-600">Compliance Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compliance & Security Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-blue-900 relative overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-6">Enterprise-Grade Security & Compliance</h2>
          <p class="text-xl text-slate-300 max-w-3xl mx-auto">
            Our LLM solutions are built with security-first principles and comprehensive compliance frameworks.
          </p>
        </div>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">GDPR Compliant</h3>
            <p class="text-slate-300 text-sm">Full European data protection compliance</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">SOC 2 Certified</h3>
            <p class="text-slate-300 text-sm">Rigorous security controls and auditing</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">End-to-End Encryption</h3>
            <p class="text-slate-300 text-sm">Data protection at rest and in transit</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">Zero Trust Architecture</h3>
            <p class="text-slate-300 text-sm">Comprehensive security verification</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <!-- Creative Background Accents -->
      <div class="absolute top-20 left-1/4 w-24 h-24 bg-gradient-to-r from-violet-200 to-purple-300 rounded-full opacity-25 blur-2xl" ref="contactAccent1"></div>
      <div class="absolute bottom-20 right-1/4 w-20 h-20 bg-gradient-to-r from-emerald-200 to-teal-300 rounded-full opacity-20 blur-2xl" ref="contactAccent2"></div>
      
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-slate-900 mb-4">Ready to Transform Your Business?</h2>
        <p class="text-xl text-slate-600 mb-8">
          Let's explore how NOVA DELTA can automate your workflows and accelerate your growth with secure, compliant LLM solutions.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-950 hover:to-indigo-950 transition-all duration-300 shadow-lg hover:shadow-xl">
            Book Strategy Session
          </button>
          <button class="border-2 border-blue-300 text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-indigo-500 hover:text-indigo-600 hover:bg-blue-50 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-4 mb-6">
              <img src="/images/b125b038-4c52-4e07-9222-11ea329d6370.png" alt="NOVA DELTA" class="h-10 w-auto">
              <span class="text-xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">NOVA DELTA</span>
            </div>
            <p class="text-slate-300">
              Empowering businesses through secure, compliant LLM solutions that automate workflows and drive growth.
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4 text-blue-200">Services</h3>
            <ul class="space-y-2 text-slate-300">
              <li><a href="#" class="hover:text-blue-300 transition-colors duration-300">Strategic Consulting</a></li>
              <li><a href="#" class="hover:text-blue-300 transition-colors duration-300">Security & Compliance</a></li>
              <li><a href="#" class="hover:text-blue-300 transition-colors duration-300">Custom Implementation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4 text-blue-200">Industries</h3>
            <ul class="space-y-2 text-slate-300">
              <li><a href="#" class="hover:text-blue-300 transition-colors duration-300">Financial Services</a></li>
              <li><a href="#" class="hover:text-blue-300 transition-colors duration-300">Healthcare</a></li>
              <li><a href="#" class="hover:text-blue-300 transition-colors duration-300">Technology</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4 text-blue-200">Resources</h3>
            <ul class="space-y-2 text-slate-300">
              <li><a href="#" class="hover:text-blue-300 transition-colors duration-300">Case Studies</a></li>
              <li><a href="#" class="hover:text-blue-300 transition-colors duration-300">Compliance Guide</a></li>
              <li><a href="#" class="hover:text-blue-300 transition-colors duration-300">ROI Calculator</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 NOVA DELTA. All rights reserved.</p>
        </div>
      </div>
    </footer>

    <!-- Interactive Chat Interface -->
    <ChatInterface />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ChatInterface from '../components/ChatInterface.vue'

gsap.registerPlugin(ScrollTrigger)

// Mobile menu state
const mobileMenuOpen = ref(false)
const mobileMenuButton = ref(null)
const mobileMenu = ref(null)

// Template refs for hero section
const rotatingCircle = ref(null)
const pulsingSquare = ref(null)
const bouncingCircle = ref(null)
const animatedBadge = ref(null)
const badgeDot = ref(null)
const badgeArrow = ref(null)
const heroTitle = ref(null)
const titleUnderline = ref(null)
const heroDescription = ref(null)
const primaryButton = ref(null)
const buttonShimmer = ref(null)
const primaryButtonArrow = ref(null)
const secondaryButton = ref(null)
const secondaryButtonShimmer = ref(null)
const secondaryButtonIcon = ref(null)
const stat1 = ref(null)
const stat1Number = ref(null)
const stat1Underline = ref(null)
const stat2 = ref(null)
const stat2Number = ref(null)
const stat2Underline = ref(null)
const stat3 = ref(null)
const stat3Number = ref(null)
const stat3Underline = ref(null)
const floatingElement1 = ref(null)
const floatingElement2 = ref(null)
const floatingElement3 = ref(null)
const cornerAccent1 = ref(null)
const cornerAccent2 = ref(null)
const cornerAccent3 = ref(null)
const cornerAccent4 = ref(null)
const servicesBg1 = ref(null)
const servicesBg2 = ref(null)
const servicesBadge = ref(null)
const servicesBadgeDot = ref(null)
const servicesBadgeArrow = ref(null)
const servicesTitle = ref(null)
const servicesTitleUnderline = ref(null)
const servicesDescription = ref(null)
const consultancyCard = ref(null)
const consultancyIcon = ref(null)
const consultancyArrow = ref(null)
const trainingCard = ref(null)
const trainingIcon = ref(null)
const trainingArrow = ref(null)
const implementationCard = ref(null)
const implementationIcon = ref(null)
const implementationArrow = ref(null)
const aboutAccent1 = ref(null)
const aboutAccent2 = ref(null)
const contactAccent1 = ref(null)
const contactAccent2 = ref(null)

// Template refs for new creative sections
const benefitsSection = ref(null)
const benefitsHeader = ref(null)
const benefit1 = ref(null)
const benefit1Visual = ref(null)
const benefit2 = ref(null)
const benefit2Visual = ref(null)
const benefit3 = ref(null)
const benefit4 = ref(null)
const particle1 = ref(null)
const particle2 = ref(null)
const particle3 = ref(null)
const particle4 = ref(null)
const particle5 = ref(null)
const particle6 = ref(null)
const flowingLines = ref(null)
const flowPath1 = ref(null)
const flowPath2 = ref(null)

onMounted(() => {
  // Initialize GSAP animations
  initAnimations()
  setupHoverAnimations()
  setupScrollAnimations()
  setupParticleAnimations()
  
  // Mobile menu click outside handler
  const handleClickOutside = (event) => {
    if (mobileMenuOpen.value && 
        mobileMenu.value && 
        !mobileMenu.value.contains(event.target) &&
        !mobileMenuButton.value.contains(event.target)) {
      closeMobileMenu()
    }
  }
  
  document.addEventListener('click', handleClickOutside)
  
  // Add mobile touch event listeners
  if (window.innerWidth < 768) {
    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })
  }
  
  // Cleanup
  return () => {
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('touchstart', handleTouchStart)
    document.removeEventListener('touchend', handleTouchEnd)
  }
})

const initAnimations = () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isMobile = window.innerWidth < 768
  
  // Adjust animation settings for mobile and accessibility
  const animationSettings = {
    duration: prefersReducedMotion ? 0.3 : (isMobile ? 0.6 : 1.2),
    ease: prefersReducedMotion ? "none" : "power3.out",
    stagger: prefersReducedMotion ? 0 : (isMobile ? 0.1 : 0.2)
  }
  
  // Set initial states
  gsap.set([heroTitle, heroDescription, animatedBadge, primaryButton, secondaryButton], { 
    opacity: 0, 
    y: prefersReducedMotion ? 0 : (isMobile ? 20 : 50)
  })
  
  gsap.set([stat1, stat2, stat3], { 
    opacity: 0, 
    scale: 0.8 
  })
  
  gsap.set([servicesTitle, servicesDescription, servicesBadge], { 
    opacity: 0, 
    y: 30 
  })
  
  gsap.set([consultancyCard, trainingCard, implementationCard], { 
    opacity: 0, 
    y: 50 
  })
  
  gsap.set([titleUnderline, servicesTitleUnderline], { 
    scaleX: 0 
  })
  
  gsap.set([stat1Underline, stat2Underline, stat3Underline], { 
    scaleX: 0 
  })

  // Hero section entrance animation
  const heroTl = gsap.timeline({ delay: prefersReducedMotion ? 0 : 0.3 })
  
  heroTl
    .to(heroTitle, { 
      opacity: 1, 
      y: 0, 
      duration: animationSettings.duration, 
      ease: animationSettings.ease 
    })
    .to(heroDescription, { 
      opacity: 1, 
      y: 0, 
      duration: animationSettings.duration * 0.8, 
      ease: animationSettings.ease 
    }, prefersReducedMotion ? 0 : "-=0.8")
    .to(animatedBadge, { 
      opacity: 1, 
      y: 0, 
      duration: animationSettings.duration * 0.6, 
      ease: prefersReducedMotion ? animationSettings.ease : "back.out(1.7)" 
    }, prefersReducedMotion ? 0 : "-=0.6")
    .to([primaryButton, secondaryButton], { 
      opacity: 1, 
      y: 0, 
      duration: animationSettings.duration * 0.6, 
      ease: prefersReducedMotion ? animationSettings.ease : "back.out(1.7)",
      stagger: animationSettings.stagger 
    }, prefersReducedMotion ? 0 : "-=0.4")

  // Stats entrance animation
  gsap.to([stat1, stat2, stat3], {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.2,
    delay: 1.5
  })

  // Services section entrance animation
  const servicesTl = gsap.timeline({ 
    scrollTrigger: { 
      trigger: "#services", 
      start: "top 80%" 
    } 
  })
  
  servicesTl
    .to(servicesBadge, { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      ease: "back.out(1.7)" 
    })
    .to(servicesTitle, { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      ease: "power3.out" 
    }, "-=0.4")
    .to(servicesDescription, { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      ease: "power3.out" 
    }, "-=0.6")
    .to([consultancyCard, trainingCard, implementationCard], { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      ease: "back.out(1.7)" 
    }, "-=0.4")

  // LLM Solutions section entrance animation (Raycast-inspired)
  // Initialize solutions animation when the section appears
  gsap.timeline({
    scrollTrigger: {
      trigger: '[data-section="solutions"]',
      start: "top 80%",
      toggleActions: "play none none none",
      onRefresh: () => {
        // Ensure elements are properly set when ScrollTrigger refreshes
        const title = document.querySelector('[data-animate="title"]')
        const cards = document.querySelectorAll('[data-animate="card"]')
        if (title && cards.length) {
          gsap.set(title, { opacity: 0, y: 50 })
          gsap.set(cards, { opacity: 0, y: 40, scale: 0.9 })
        }
      }
    }
  })
  .set('[data-animate="title"]', { opacity: 0, y: 50 })
  .set('[data-animate="card"]', { opacity: 0, y: 40, scale: 0.9 })
  .to('[data-animate="title"]', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
  })
  .to('[data-animate="card"]', {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.1
  }, "-=0.5")

  // Background element animations
  gsap.to(rotatingCircle, {
    rotation: 360,
    duration: 20,
    ease: "none",
    repeat: -1
  })

  gsap.to(pulsingSquare, {
    scale: 1.2,
    duration: 2,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  })

  gsap.to(bouncingCircle, {
    y: -20,
    duration: 3,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  })

  // Floating elements
  gsap.to(floatingElement1, {
    y: -30,
    duration: 6,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  })

  gsap.to(floatingElement2, {
    y: -25,
    duration: 8,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true,
    delay: 1
  })

  gsap.to(floatingElement3, {
    y: -15,
    duration: 10,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true,
    delay: 2
  })

  // Background pulsing
  gsap.to([servicesBg1, servicesBg2], {
    scale: 1.1,
    duration: 4,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true,
    stagger: 2
  })

  // Badge dot pulsing
  gsap.to(badgeDot, {
    scale: 1.3,
    duration: 1.5,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  })

  gsap.to(servicesBadgeDot, {
    scale: 1.3,
    duration: 1.5,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  })
}

const setupHoverAnimations = () => {
  // Badge hover animations
  animatedBadge.value.addEventListener('mouseenter', () => {
    gsap.to(badgeDot.value, {
      rotation: 360,
      duration: 0.8,
      ease: "power2.out"
    })
    
    gsap.to(badgeArrow.value, {
      x: 8,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  animatedBadge.value.addEventListener('mouseleave', () => {
    gsap.to(badgeArrow.value, {
      x: 0,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  // Services badge hover animations
  servicesBadge.value.addEventListener('mouseenter', () => {
    gsap.to(servicesBadgeDot.value, {
      rotation: 360,
      duration: 0.8,
      ease: "power2.out"
    })
    
    gsap.to(servicesBadgeArrow.value, {
      rotation: 12,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  servicesBadge.value.addEventListener('mouseleave', () => {
    gsap.to(servicesBadgeArrow.value, {
      rotation: 0,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  // Button hover animations
  primaryButton.value.addEventListener('mouseenter', () => {
    gsap.to(buttonShimmer.value, {
      x: "100%",
      duration: 1.2,
      ease: "power2.out"
    })
    
    gsap.to(primaryButtonArrow.value, {
      x: 8,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  primaryButton.value.addEventListener('mouseleave', () => {
    gsap.to(buttonShimmer.value, {
      x: "-100%",
      duration: 0.8,
      ease: "power2.out"
    })
    
    gsap.to(primaryButtonArrow.value, {
      x: 0,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  secondaryButton.value.addEventListener('mouseenter', () => {
    gsap.to(secondaryButtonShimmer.value, {
      x: "100%",
      duration: 1.2,
      ease: "power2.out"
    })
    
    gsap.to(secondaryButtonIcon.value, {
      scale: 1.1,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  secondaryButton.value.addEventListener('mouseleave', () => {
    gsap.to(secondaryButtonShimmer.value, {
      x: "-100%",
      duration: 0.8,
      ease: "power2.out"
    })
    
    gsap.to(secondaryButtonIcon.value, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  // Stats hover animations
  stat1.value.addEventListener('mouseenter', () => {
    gsap.to(stat1Number.value, {
      scale: 1.1,
      duration: 0.4,
      ease: "power2.out"
    })
    
    gsap.to(stat1Underline.value, {
      scaleX: 1,
      duration: 0.6,
      ease: "power2.out"
    })
  })

  stat1.value.addEventListener('mouseleave', () => {
    gsap.to(stat1Number.value, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    })
    
    gsap.to(stat1Underline.value, {
      scaleX: 0,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  stat2.value.addEventListener('mouseenter', () => {
    gsap.to(stat2Number.value, {
      scale: 1.1,
      duration: 0.4,
      ease: "power2.out"
    })
    
    gsap.to(stat2Underline.value, {
      scaleX: 1,
      duration: 0.6,
      ease: "power2.out"
    })
  })

  stat2.value.addEventListener('mouseleave', () => {
    gsap.to(stat2Number.value, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    })
    
    gsap.to(stat2Underline.value, {
      scaleX: 0,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  stat3.value.addEventListener('mouseenter', () => {
    gsap.to(stat3Number.value, {
      scale: 1.1,
      duration: 0.4,
      ease: "power2.out"
    })
    
    gsap.to(stat3Underline.value, {
      scaleX: 1,
      duration: 0.6,
      ease: "power2.out"
    })
  })

  stat3.value.addEventListener('mouseleave', () => {
    gsap.to(stat3Number.value, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    })
    
    gsap.to(stat3Underline.value, {
      scaleX: 0,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  // Service card hover animations
  consultancyCard.value.addEventListener('mouseenter', () => {
    gsap.to(consultancyIcon.value, {
      rotation: 12,
      scale: 1.1,
      duration: 0.4,
      ease: "power2.out"
    })
    
    gsap.to(consultancyArrow.value, {
      x: 8,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  consultancyCard.value.addEventListener('mouseleave', () => {
    gsap.to(consultancyIcon.value, {
      rotation: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    })
    
    gsap.to(consultancyArrow.value, {
      x: 0,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  trainingCard.value.addEventListener('mouseenter', () => {
    gsap.to(trainingIcon.value, {
      rotation: 12,
      scale: 1.1,
      duration: 0.4,
      ease: "power2.out"
    })
    
    gsap.to(trainingArrow.value, {
      x: 8,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  trainingCard.value.addEventListener('mouseleave', () => {
    gsap.to(trainingIcon.value, {
      rotation: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    })
    
    gsap.to(trainingArrow.value, {
      x: 0,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  implementationCard.value.addEventListener('mouseenter', () => {
    gsap.to(implementationIcon.value, {
      rotation: 12,
      scale: 1.1,
      duration: 0.4,
      ease: "power2.out"
    })
    
    gsap.to(implementationArrow.value, {
      x: 8,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  implementationCard.value.addEventListener('mouseleave', () => {
    gsap.to(implementationIcon.value, {
      rotation: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    })
    
    gsap.to(implementationArrow.value, {
      x: 0,
      duration: 0.4,
      ease: "power2.out"
    })
  })

  // Title underline hover animations
  heroTitle.value.addEventListener('mouseenter', () => {
    gsap.to(titleUnderline.value, {
      scaleX: 1,
      duration: 1,
      ease: "power2.out"
    })
  })

  heroTitle.value.addEventListener('mouseleave', () => {
    gsap.to(titleUnderline.value, {
      scaleX: 0,
      duration: 0.6,
      ease: "power2.out"
    })
  })

  servicesTitle.value.addEventListener('mouseenter', () => {
    gsap.to(servicesTitleUnderline.value, {
      scaleX: 1,
      duration: 1,
      ease: "power2.out"
    })
  })

  servicesTitle.value.addEventListener('mouseleave', () => {
    gsap.to(servicesTitleUnderline.value, {
      scaleX: 0,
      duration: 0.6,
      ease: "power2.out"
    })
  })
}

// New scroll-triggered animations
const setupScrollAnimations = () => {
  // Benefits section entrance
  gsap.fromTo(benefitsHeader.value, 
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: benefitsSection.value,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse"
      }
    }
  )

  // Benefit cards staggered animation
  gsap.fromTo([benefit1.value, benefit2.value], 
    { opacity: 0, x: -100, rotationY: -15 },
    {
      opacity: 1,
      x: 0,
      rotationY: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: benefit1.value,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  )

  // Visual elements from opposite side
  gsap.fromTo([benefit1Visual.value, benefit2Visual.value], 
    { opacity: 0, x: 100, scale: 0.8 },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1.2,
      ease: "back.out(1.7)",
      stagger: 0.3,
      scrollTrigger: {
        trigger: benefit1Visual.value,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  )

  // Bottom cards with unique animations
  gsap.fromTo(benefit3.value, 
    { opacity: 0, y: 50, rotationX: 15 },
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: benefit3.value,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  )

  gsap.fromTo(benefit4.value, 
    { opacity: 0, y: 50, rotationX: -15 },
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: benefit4.value,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  )

  // Flowing lines animation
  if (flowPath1.value && flowPath2.value) {
    gsap.set([flowPath1.value, flowPath2.value], { strokeDasharray: "1000 1000", strokeDashoffset: 1000 })
    
    gsap.to(flowPath1.value, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: benefitsSection.value,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    })
    
    gsap.to(flowPath2.value, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power2.inOut",
      delay: 0.5,
      scrollTrigger: {
        trigger: benefitsSection.value,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    })
  }
  
  // Note: Use case animations can be added when use case section is implemented
}

// Particle animations
const setupParticleAnimations = () => {
  const particles = [particle1.value, particle2.value, particle3.value, particle4.value, particle5.value, particle6.value]
  
  particles.forEach((particle, index) => {
    if (particle) {
      // Float animation
      gsap.to(particle, {
        y: "-=20",
        duration: 2 + (index * 0.3),
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.5
      })
      
      // Subtle rotation
      gsap.to(particle, {
        rotation: 360,
        duration: 10 + (index * 2),
        ease: "none",
        repeat: -1
      })
      
      // Scale pulse
      gsap.to(particle, {
        scale: 1.5,
        duration: 1.5 + (index * 0.2),
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: (index * 0.3) + 1
      })
    }
  })
}

// Mobile menu functions
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  
  // Prevent body scroll when menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
    // Add mobile menu animations
    if (mobileMenu.value) {
      gsap.from(mobileMenu.value.children, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.out"
      })
    }
  } else {
    document.body.style.overflow = 'auto'
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

// Handle mobile swipe gestures for menu
let touchStartY = 0
let touchEndY = 0

const handleTouchStart = (e) => {
  touchStartY = e.changedTouches[0].screenY
}

const handleTouchEnd = (e) => {
  touchEndY = e.changedTouches[0].screenY
  handleSwipe()
}

const handleSwipe = () => {
  if (touchStartY - touchEndY > 50) {
    // Swipe up - close menu if open
    if (mobileMenuOpen.value) {
      closeMobileMenu()
    }
  }
}

</script>

<style>
@import "tailwindcss";

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Mobile-friendly touch targets */
@media (max-width: 768px) {
  button, a {
    min-height: 44px;
    min-width: 44px;
  }
  
  /* Improve touch responsiveness */
  .touch-target {
    -webkit-tap-highlight-color: rgba(59, 130, 246, 0.2);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  /* Mobile hover states */
  .mobile-hover:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
  
  /* Prevent horizontal scrolling */
  body {
    overflow-x: hidden;
  }
  
  /* Optimize font sizes for mobile */
  html {
    font-size: 16px;
  }
  
  /* Improve button accessibility on mobile */
  button:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
  
  /* Mobile navigation improvements */
  nav {
    position: sticky;
    top: 0;
    z-index: 1000;
  }
}

/* Performance optimizations */
* {
  box-sizing: border-box;
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Creative layout utilities */
.hexagon {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.diamond {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.blob {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

/* Enhanced glow effects */
.glow-emerald {
  box-shadow: 0 0 30px rgba(16, 185, 129, 0.3);
}

.glow-orange {
  box-shadow: 0 0 30px rgba(251, 146, 60, 0.3);
}

.glow-violet {
  box-shadow: 0 0 30px rgba(139, 92, 246, 0.3);
}

.glow-blue {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
}

/* Floating animation for patterns */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(5deg); }
  50% { transform: translateY(-15px) rotate(0deg); }
  75% { transform: translateY(-5px) rotate(-5deg); }
}

/* Pulse glow animation */
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); }
  50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.8), 0 0 60px rgba(16, 185, 129, 0.4); }
}

/* Morphing shape animation */
@keyframes morphBlob {
  0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
  50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
  75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
  100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
}

.animate-morph {
  animation: morphBlob 8s ease-in-out infinite;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #475569, #64748b);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #334155, #475569);
}

/* Enhanced focus states */
button:focus, a:focus {
  outline: 2px solid #475569;
  outline-offset: 2px;
}

/* Mobile optimization */
@media (max-width: 640px) {
  .hero-title {
    font-size: 2.5rem;
    line-height: 1.1;
  }
  
  .section-padding {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  
  .card-grid {
    gap: 1.5rem;
  }
}

/* Tablet optimization */
@media (min-width: 641px) and (max-width: 1024px) {
  .hero-title {
    font-size: 4rem;
  }
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

/* Performance optimizations */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Animated path drawing */
@keyframes drawPath {
  0% { 
    stroke-dashoffset: 1; 
  }
  50% { 
    stroke-dashoffset: 0; 
  }
  100% { 
    stroke-dashoffset: -1; 
  }
}

/* Enhanced floating animation for new elements */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Custom geometric shape animations */
.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
