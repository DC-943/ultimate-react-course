import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.SUPERVASE_URL,
  process.env.SUPABASE_KEY
)
