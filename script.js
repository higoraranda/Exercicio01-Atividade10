const supabaseUrl = 'https://iljyhjzvtrqttkszfnbs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsanloanp2dHJxdHRrc3pmbmJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMzI2OTgsImV4cCI6MjA2NDkwODY5OH0.rdOKmgnQ5L-3m76GbykcBeAyK5DtAhtjGqNyQyBBKTE';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

const signupBtn = document.getElementById('signup-btn');
const loginBtn = document.getElementById('login-btn');
const authForm = document.getElementById('auth-form');
const submitBtn = document.getElementById('submit-btn');
const message = document.getElementById('message');

signupBtn.addEventListener('click', () => {
  authForm.style.display = 'block';
  submitBtn.textContent = 'Cadastrar';
});

loginBtn.addEventListener('click', () => {
  authForm.style.display = 'block';
  submitBtn.textContent = 'Entrar';
});

authForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (submitBtn.textContent === 'Cadastrar') {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) message.textContent = `Erro: ${error.message}`;
    else message.textContent = 'Cadastro feito! Verifique seu e-mail.';
  } else {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) message.textContent = `Erro: ${error.message}`;
    else message.textContent = 'Login feito! Redirecionando...';
  }
});

console.log("Script carregado!"); 

signupBtn.addEventListener('click', () => {
  console.log("Cadastrar clicado!"); 
  authForm.style.display = 'block';
  submitBtn.textContent = 'Cadastrar';
});