<template>
  <div>
    <!-- Chat Toggle Button - Always visible, left-aligned -->
    <button
      @click="toggleChat"
      class="fixed left-8 bottom-8 z-50 bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:from-blue-950 hover:to-indigo-950 group"
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
      v-if="isOpen"
      class="fixed bottom-8 right-8 z-40 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-blue-200/50 w-80 h-[500px] flex flex-col overflow-hidden transition-all duration-300"
    >
      <!-- Chat Header -->
      <div class="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-4 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold">NOVA DELTA Assistant</h3>
            <p class="text-xs text-blue-100">Ask me about LLM solutions</p>
          </div>
        </div>
      </div>

      <!-- Chat Messages -->
      <div ref="messagesContainer" class="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
        <!-- Welcome Message -->
        <div v-if="messages.length === 0" class="text-center text-gray-500 py-8">
          <div class="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
          <p class="text-sm">👋 Hi! I'm here to help you learn about LLM solutions for your business.</p>
          <p class="text-xs text-gray-400 mt-2">Ask me anything!</p>
        </div>

        <!-- Chat Messages -->
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="message.role === 'user' ? 'flex justify-end' : 'flex justify-start'"
        >
          <div
            :class="[
              'max-w-[80%] p-3 rounded-2xl text-sm',
              message.role === 'user'
                ? 'bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-br-md'
                : 'bg-white border border-gray-200 text-gray-800 rounded-bl-md shadow-sm'
            ]"
          >
            <p class="whitespace-pre-wrap">{{ message.content }}</p>
            <div class="flex items-center justify-end mt-2 opacity-70">
              <span class="text-xs">{{ formatTime(message.timestamp) }}</span>
            </div>
          </div>
        </div>

        <!-- Typing Indicator -->
        <div v-if="isTyping" class="flex justify-start">
          <div class="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-md shadow-sm">
            <div class="flex space-x-1">
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s;"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Chat Input -->
      <div class="p-4 border-t border-gray-200 bg-white">
        <div class="flex space-x-2">
          <input
            v-model="inputMessage"
            @keypress.enter="sendMessage"
            :disabled="isLoading"
            type="text"
            placeholder="Type your message..."
            class="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          >
          <button
            @click="sendMessage"
            :disabled="isLoading || !inputMessage.trim()"
            class="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[48px] hover:from-blue-950 hover:to-indigo-950"
          >
            <svg
              v-if="!isLoading"
              class="w-5 h-5 transform rotate-45"
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
const isOpen = ref(false)
const messages = ref([])
const inputMessage = ref('')
const isLoading = ref(false)
const isTyping = ref(false)
const messagesContainer = ref(null)

const toggleChat = () => {
  isOpen.value = !isOpen.value
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
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
  
  scrollToBottom()
  
  isLoading.value = true
  isTyping.value = true

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
    scrollToBottom()

  } catch (error) {
    console.error('Chat error:', error)
    isTyping.value = false
    
    const errorMessage = {
      role: 'assistant',
      content: 'Sorry, I encountered an error. Please make sure the OpenAI API key is properly configured and try again.',
      timestamp: new Date()
    }

    messages.value.push(errorMessage)
    scrollToBottom()
  } finally {
    isLoading.value = false
  }
}

// Auto-scroll when new messages are added
watch(messages, () => {
  scrollToBottom()
}, { deep: true })
</script>

<style scoped>
/* Custom scrollbar for chat messages */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>