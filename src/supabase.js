import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePkKey = import.meta.env.VITE_SUPABASE_PK_KEY

if (!supabaseUrl || !supabasePkKey) {
  throw new Error(
    'Configure VITE_SUPABASE_URL e VITE_SUPABASE_PK_KEY no arquivo .env',
  )
}

export const supabase = createClient(supabaseUrl, supabasePkKey)
