import OpenAI from 'openai'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { message } = body

    if (!message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Message is required'
      })
    }

    // Get OpenAI API key from environment variables
    const apiKey = useRuntimeConfig().openaiApiKey
    
    if (!apiKey) {
      throw createError({
        statusCode: 500,
        statusMessage: 'OpenAI API key not configured'
      })
    }

    const openai = new OpenAI({
      apiKey: apiKey
    })

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for NOVA DELTA, an LLM consultancy company. Be professional, knowledgeable about AI/ML, and helpful in explaining how LLM solutions can benefit businesses. Keep responses concise but informative."
        },
        {
          role: "user",
          content: message
        }
      ],
      max_tokens: 500,
      temperature: 0.7
    })

    return {
      response: completion.choices[0].message.content
    }
  } catch (error: any) {
    console.error('Chat API error:', error)
    
    if (error?.status === 401) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid OpenAI API key'
      })
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to process chat message'
    })
  }
})