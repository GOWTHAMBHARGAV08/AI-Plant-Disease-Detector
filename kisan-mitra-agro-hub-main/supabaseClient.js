import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://rebygtvmggmzensjhxqx.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlYnlndHZtZ2dtemVuc2poeHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3ODIxNDYsImV4cCI6MjA3MzM1ODE0Nn0.Qg9oOBft3a9LfKThMDxjZtIESxRU5Rqk4M_TE1owQbU"
export const supabase = createClient(supabaseUrl, supabaseKey)
