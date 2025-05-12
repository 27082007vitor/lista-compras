// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://pbfmwplilmitvcatshhc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiZm13cGxpbG1pdHZjYXRzaGhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU0NjYsImV4cCI6MjA2MjExMTQ2Nn0.86d8etT6JnHp5A_9IlZbzbTWp4BTAVg4SYW3pRRlRw4'
)