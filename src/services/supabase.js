import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sikeqytrikvylfygzdsz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpa2VxeXRyaWt2eWxmeWd6ZHN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNTY0MzcsImV4cCI6MjAyODkzMjQzN30.Gm8AD9U-m3aa4MR7jW2NczbmB21NMEp0Ycjp5EOQRJc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
