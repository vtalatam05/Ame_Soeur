// Supabase integration for data submission
const supabaseUrl = 'https://zxkkwlnhermhahuvdejv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4a2t3bG5oZXJtaGFodXZkZWp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MjY0OTgsImV4cCI6MjA1NzIwMjQ5OH0.FgOuoLOf-MhmL55VWrTa3WCfEuQyyperG0rbiV_0tEk';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey, {headers: { 'Accept': 'application/json' }});