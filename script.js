const supabaseUrl = 'https://iljyhjzvtrqttkszfnbs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsanloanp2dHJxdHRrc3pmbmJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMzI2OTgsImV4cCI6MjA2NDkwODY5OH0.rdOKmgnQ5L-3m76GbykcBeAyK5DtAhtjGqNyQyBBKTE';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('auth-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    document.getElementById('message').textContent = `Erro: ${error.message}`;
  } else {
    document.getElementById('message').textContent = 'Sucesso! Verifique seu e-mail.';
  }
});