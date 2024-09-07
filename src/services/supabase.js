import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xgunutydjfdqgnbsvegs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhndW51dHlkamZkcWduYnN2ZWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MDg4MDYsImV4cCI6MjAzNDk4NDgwNn0.uYJj3EzS0fG9Q5vxfc9i8vqIpx9Oepq6OOkWjKjI2js";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
