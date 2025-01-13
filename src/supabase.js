// src/supabase.js
import { createClient } from "@supabase/supabase-js";

// Replace these with your actual values
const supabaseUrl = "https://yozymcetyfifjrlkkqrm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvenltY2V0eWZpZmpybGtrcXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1MDYyNzgsImV4cCI6MjA1MjA4MjI3OH0.LeLtbYFfmPwbHPITsgYuaSvpIruFzYYA0cR5UXkNMww";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
