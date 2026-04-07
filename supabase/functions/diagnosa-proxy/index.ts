import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { base64Image } = await req.json()
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY')

    if (!OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: 'API key tidak ditemukan' }), {
        status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        max_tokens: 1000,
        messages: [
          {
            role: 'system',
            content: 'Kamu adalah ahli pertanian dan diagnosa penyakit tanaman. Analisis foto tanaman yang diberikan dan berikan diagnosa dalam format JSON. Jika bukan foto tanaman, kembalikan {"bukan_tanaman": true}. Jika tanaman, kembalikan: {"nama_tanaman": "...", "nama_ilmiah": "...", "deskripsi": "...", "penyakit": "nama penyakit atau Tanaman Sehat", "penyebab": "...", "solusi": "...", "tingkat_keparahan": 0-100}. Jawab dalam Bahasa Indonesia.'
          },
          {
            role: 'user',
            content: [
              { type: 'text', text: 'Analisis foto tanaman ini dan berikan diagnosa penyakit jika ada.' },
              { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${base64Image}`, detail: 'high' } }
            ]
          }
        ]
      })
    })

    const data = await response.json()
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
