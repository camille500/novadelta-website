<template>
  <div>
    <!-- Chat Toggle Button - Always visible, right-aligned -->
    <button
      ref="toggleButton"
      @click="toggleChat"
      @mouseenter="onButtonHover"
      @mouseleave="onButtonLeave"
      class="fixed right-4 bottom-4 z-50 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white p-5 rounded-2xl shadow-2xl transition-all duration-300 group ripple premium-button-shadow"
      style="position: fixed !important; right: 1rem !important; bottom: 1rem !important;"
    >
      <svg 
        :class="['w-6 h-6 transition-all duration-300', isOpen ? 'rotate-45' : 'group-hover:rotate-12']" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <!-- Chat Interface - Opens in right corner -->
    <div
      ref="chatInterface"
      v-if="isOpen"
      class="fixed bottom-20 right-4 z-40 bg-white rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-gray-100 w-96 h-[600px] flex flex-col overflow-hidden"
      style="position: fixed !important; right: 1rem !important; bottom: 5rem !important; transform: scale(0); transform-origin: bottom right;"
    >
      <!-- Chat Header -->
      <div class="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-6 flex items-center justify-between relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10"></div>
        <div class="flex items-center space-x-4 relative z-10">
          <div ref="avatarElement" class="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h3 class="font-bold text-lg tracking-tight">NOVA DELTA Assistant</h3>
            <div class="flex items-center space-x-2 mt-1">
              <div ref="statusDot" class="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-lg status-pulse"></div>
              <p class="text-sm text-blue-100 font-medium">Online • Ask me about LLM solutions</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Chat Messages -->
      <div ref="messagesContainer" class="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50">
        <!-- Welcome Message -->
        <div ref="welcomeMessage" v-if="messages.length === 0" class="text-center text-gray-600 py-12 opacity-0">
          <div ref="welcomeIcon" class="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl floating">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
          <div ref="welcomeText" class="space-y-3">
            <p class="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">👋 Welcome to NOVA DELTA!</p>
            <p class="text-sm text-gray-600 font-medium leading-relaxed px-4">I'm here to help you discover how LLM solutions can transform your business operations.</p>
            <p class="text-xs text-gray-500 font-medium">Ask me anything to get started!</p>
          </div>
        </div>

        <!-- Chat Messages -->
        <div
          v-for="(message, index) in messages"
          :key="index"
          :ref="el => setMessageRef(el, index)"
          :class="message.role === 'user' ? 'flex justify-end' : 'flex justify-start'"
          class="message-container"
          style="opacity: 0; transform: translateY(20px);"
        >
          <div
            :class="[
              'max-w-[80%] p-4 rounded-3xl text-sm relative group cursor-pointer transition-all duration-300',
              message.role === 'user'
                ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white shadow-xl hover:shadow-2xl hover:scale-[1.02]'
                : 'bg-white border border-gray-100 text-gray-800 shadow-lg hover:shadow-xl hover:scale-[1.02]'
            ]"
            @mouseenter="onMessageHover"
            @mouseleave="onMessageLeave"
          >
            <!-- Message tail -->
            <div 
              v-if="message.role === 'user'"
              class="absolute -right-2 bottom-4 w-4 h-4 bg-gradient-to-br from-blue-600 to-indigo-700 transform rotate-45"
            ></div>
            <div 
              v-else
              class="absolute -left-2 bottom-4 w-4 h-4 bg-white border-l border-b border-gray-100 transform rotate-45"
            ></div>
            
            <p class="whitespace-pre-wrap leading-relaxed font-medium">{{ message.content }}</p>
            <div :class="[
              'flex items-center mt-3 opacity-70 group-hover:opacity-90 transition-opacity',
              message.role === 'user' ? 'justify-end' : 'justify-start'
            ]">
              <span class="text-xs flex items-center space-x-1 font-medium">
                <span>{{ formatTime(message.timestamp) }}</span>
                <svg v-if="message.role === 'user'" class="w-3 h-3 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </span>
            </div>
          </div>
        </div>

        <!-- Typing Indicator -->
        <div ref="typingIndicator" v-if="isTyping" class="flex justify-start opacity-0" style="transform: translateY(20px);">
          <div class="bg-white border border-gray-100 p-4 rounded-3xl shadow-lg relative">
            <!-- Typing tail -->
            <div class="absolute -left-2 bottom-4 w-4 h-4 bg-white border-l border-b border-gray-100 transform rotate-45"></div>
            
            <div class="flex items-center space-x-3">
              <div class="flex space-x-1">
                <div ref="dot1" class="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                <div ref="dot2" class="w-2.5 h-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
                <div ref="dot3" class="w-2.5 h-2.5 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"></div>
              </div>
              <span class="text-sm text-gray-600 font-semibold">NOVA DELTA is thinking...</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Chat Input -->
      <div class="p-6 border-t border-gray-100 bg-white">
        <div class="flex space-x-4 items-end">
          <div class="flex-1 relative">
            <input
              ref="messageInput"
              v-model="inputMessage"
              @keypress.enter="sendMessage"
              @focus="onInputFocus"
              @blur="onInputBlur"
              :disabled="isLoading"
              type="text"
              placeholder="Type your message..."
              class="w-full p-4 pr-14 border border-gray-200 rounded-2xl focus:outline-none focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50 focus:bg-white transition-all duration-300 text-sm font-medium shadow-sm focus:shadow-md"
            >
            <!-- Emoji button -->
            <button 
              class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-200 hover:scale-110"
              @click="onEmojiClick"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <button
            ref="sendButton"
            @click="sendMessage"
            @mousedown="onSendButtonPress"
            @mouseup="onSendButtonRelease"
            :disabled="isLoading || !inputMessage.trim()"
            class="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white p-4 rounded-2xl shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[56px] hover:shadow-2xl hover:scale-105 disabled:hover:shadow-xl active:scale-95 ripple"
          >
            <svg
              v-if="!isLoading"
              class="w-5 h-5 transform rotate-45 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
            <div v-else class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'

const isOpen = ref(false)
const messages = ref([])
const inputMessage = ref('')
const isLoading = ref(false)
const isTyping = ref(false)
const messagesContainer = ref(null)

// Template refs for animations
const toggleButton = ref(null)
const chatInterface = ref(null)
const welcomeMessage = ref(null)
const welcomeIcon = ref(null)
const welcomeText = ref(null)
const messageInput = ref(null)
const sendButton = ref(null)
const typingIndicator = ref(null)
const avatarElement = ref(null)
const statusDot = ref(null)
const dot1 = ref(null)
const dot2 = ref(null)
const dot3 = ref(null)

// Message refs array for individual message animations
const messageRefs = ref([])
const setMessageRef = (el, index) => {
  if (el) messageRefs.value[index] = el
}

const toggleChat = () => {
  if (isOpen.value) {
    // Close animation
    gsap.to(chatInterface.value, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "back.in(1.7)",
      transformOrigin: "bottom right",
      onComplete: () => {
        isOpen.value = false
      }
    })
    
    gsap.to(toggleButton.value, {
      rotation: 0,
      scale: 1,
      duration: 0.3,
      ease: "back.out(1.7)"
    })
  } else {
    // Open animation
    isOpen.value = true
    
    nextTick(() => {
      // Animate chat interface opening
      gsap.fromTo(chatInterface.value, 
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.4,
          ease: "back.out(1.7)",
          transformOrigin: "bottom right"
        }
      )
      
      // Animate welcome message if no messages
      if (messages.value.length === 0) {
        animateWelcomeMessage()
      }
      
      // Animate existing messages
      animateExistingMessages()
    })
    
    // Button animation
    gsap.to(toggleButton.value, {
      rotation: 45,
      scale: 0.9,
      duration: 0.3,
      ease: "back.out(1.7)"
    })
  }
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      gsap.to(messagesContainer.value, {
        scrollTop: messagesContainer.value.scrollHeight,
        duration: 0.5,
        ease: "power2.out"
      })
    }
  })
}

// Animation functions
const animateWelcomeMessage = () => {
  if (welcomeMessage.value) {
    const tl = gsap.timeline()
    
    tl.to(welcomeMessage.value, {
      opacity: 1,
      duration: 0.3
    })
    .from(welcomeIcon.value, {
      scale: 0,
      rotation: 180,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.1")
    .from(welcomeText.value.children, {
      y: 20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.3")
  }
}

const animateExistingMessages = () => {
  messageRefs.value.forEach((messageEl, index) => {
    if (messageEl) {
      gsap.fromTo(messageEl, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.4,
          delay: index * 0.1,
          ease: "power2.out"
        }
      )
    }
  })
}

const animateNewMessage = (messageIndex) => {
  const messageEl = messageRefs.value[messageIndex]
  if (messageEl) {
    gsap.fromTo(messageEl,
      { opacity: 0, y: 30, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)"
      }
    )
  }
}

const animateTypingIndicator = () => {
  if (typingIndicator.value) {
    gsap.fromTo(typingIndicator.value,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.3,
        ease: "power2.out"
      }
    )
    
    // Animate dots
    const dots = [dot1.value, dot2.value, dot3.value]
    gsap.timeline({ repeat: -1 })
      .to(dots, {
        y: -3,
        duration: 0.4,
        ease: "power2.inOut",
        stagger: 0.1
      })
      .to(dots, {
        y: 0,
        duration: 0.4,
        ease: "power2.inOut",
        stagger: 0.1
      })
  }
}

// Interactive animations
const onButtonHover = () => {
  gsap.to(toggleButton.value, {
    scale: 1.1,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    duration: 0.2,
    ease: "power2.out"
  })
}

const onButtonLeave = () => {
  gsap.to(toggleButton.value, {
    scale: isOpen.value ? 0.9 : 1,
    boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
    duration: 0.2,
    ease: "power2.out"
  })
}

const onMessageHover = (event) => {
  gsap.to(event.currentTarget, {
    y: -2,
    duration: 0.2,
    ease: "power2.out"
  })
}

const onMessageLeave = (event) => {
  gsap.to(event.currentTarget, {
    y: 0,
    duration: 0.2,
    ease: "power2.out"
  })
}

const onInputFocus = () => {
  gsap.to(messageInput.value, {
    borderColor: "rgb(59 130 246)",
    boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
    duration: 0.2
  })
}

const onInputBlur = () => {
  gsap.to(messageInput.value, {
    borderColor: "rgb(209 213 219)",
    boxShadow: "none",
    duration: 0.2
  })
}

const onSendButtonPress = () => {
  gsap.to(sendButton.value, {
    scale: 0.95,
    duration: 0.1
  })
}

const onSendButtonRelease = () => {
  gsap.to(sendButton.value, {
    scale: 1,
    duration: 0.1
  })
}

const onEmojiClick = () => {
  // Simple emoji popup animation
  inputMessage.value += ' 😊'
  nextTick(() => {
    messageInput.value?.focus()
  })
}

const formatTime = (date) => {
  return date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  })
}

const sendMessage = async () => {
  if (!inputMessage.value.trim() || isLoading.value) return

  const userMessage = {
    role: 'user',
    content: inputMessage.value.trim(),
    timestamp: new Date()
  }

  messages.value.push(userMessage)
  const messageToSend = inputMessage.value.trim()
  inputMessage.value = ''
  
  // Animate new user message
  nextTick(() => {
    animateNewMessage(messages.value.length - 1)
    scrollToBottom()
  })
  
  isLoading.value = true
  isTyping.value = true
  
  // Animate typing indicator
  nextTick(() => {
    animateTypingIndicator()
    scrollToBottom()
  })

  try {
    const response = await $fetch('/api/chat', {
      method: 'POST',
      body: {
        message: messageToSend
      }
    })

    isTyping.value = false

    const assistantMessage = {
      role: 'assistant',
      content: response.response,
      timestamp: new Date()
    }

    messages.value.push(assistantMessage)
    
    // Animate assistant message
    nextTick(() => {
      animateNewMessage(messages.value.length - 1)
      scrollToBottom()
    })

  } catch (error) {
    console.error('Chat error:', error)
    isTyping.value = false
    
    const errorMessage = {
      role: 'assistant',
      content: 'Sorry, I encountered an error. Please make sure the OpenAI API key is properly configured and try again.',
      timestamp: new Date()
    }

    messages.value.push(errorMessage)
    
    // Animate error message
    nextTick(() => {
      animateNewMessage(messages.value.length - 1)
      scrollToBottom()
    })
  } finally {
    isLoading.value = false
  }
}

// Lifecycle hooks
onMounted(() => {
  // Initialize status dot animation
  if (statusDot.value) {
    gsap.to(statusDot.value, {
      scale: 1.2,
      opacity: 0.7,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    })
  }
  
  // Avatar breathing animation
  if (avatarElement.value) {
    gsap.to(avatarElement.value, {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    })
  }
})

// Watch for typing state changes
watch(isTyping, (newVal) => {
  if (newVal) {
    nextTick(() => {
      animateTypingIndicator()
    })
  }
})
</script>

<style scoped>
/* Custom scrollbar for chat messages */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f8fafc;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #3b82f6, #6366f1);
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #2563eb, #4f46e5);
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.4);
}

/* Premium message animations */
.message-container {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.message-container:hover {
  transform: translateY(-2px);
}

/* Enhanced button hover effects */
.premium-button-shadow:hover {
  box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1);
}

/* Enhanced pulse animation for status indicator */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 8px rgba(52, 211, 153, 0.6), 0 0 16px rgba(52, 211, 153, 0.3);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 12px rgba(52, 211, 153, 0.8), 0 0 24px rgba(52, 211, 153, 0.4);
    transform: scale(1.1);
  }
}

.status-pulse {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Custom typing dots animation */
@keyframes typing-dot {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-10px);
    opacity: 1;
  }
}

/* WhatsApp-like message bubble styles */
.message-bubble-user {
  background: linear-gradient(135deg, #dcf8c6 0%, #b8e6b8 100%);
  position: relative;
}

.message-bubble-assistant {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  position: relative;
}

/* Backdrop blur effect */
.backdrop-blur-enhanced {
  backdrop-filter: blur(20px) saturate(180%);
  background: rgba(255, 255, 255, 0.85);
}

/* Smooth transitions */
* {
  transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

/* Focus ring animations */
.focus-ring {
  position: relative;
}

.focus-ring::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: inherit;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
}

.focus-ring:focus::after {
  opacity: 0.3;
  animation: focus-pulse 2s infinite;
}

@keyframes focus-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.1;
  }
}

/* Button ripple effect */
.ripple {
  position: relative;
  overflow: hidden;
}

.ripple::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease;
}

.ripple:active::before {
  width: 300px;
  height: 300px;
}

/* Glassmorphism effects */
.glass-effect {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

/* Smooth gradient animations */
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.gradient-animated {
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite;
}

/* Floating animation for welcome icon */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
}

.floating {
  animation: float 3s ease-in-out infinite;
}
</style>