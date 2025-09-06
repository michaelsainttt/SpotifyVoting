import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fqolelvoluvnbewdwzoo.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxb2xlbHZvbHV2bmJld2R3em9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwNTUxMjUsImV4cCI6MjA3MjYzMTEyNX0.Mc1YfwcUwgE8k4UzQITvBo9kEKfw5rq9taVjFukGLLo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);