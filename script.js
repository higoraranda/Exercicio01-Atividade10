const supabaseUrl = 'https://iljyhjzvtrqttkszfnbs.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsanloanp2dHJxdHRrc3pmbmJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMzI2OTgsImV4cCI6MjA2NDkwODY5OH0.rdOKmgnQ5L-3m76GbykcBeAyK5DtAhtjGqNyQyBBKTE';

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

const signupBtn = document.getElementById('signup-btn');
const loginBtn = document.getElementById('login-btn');
const authForm = document.getElementById('auth-form');
const submitBtn = document.getElementById('submit-btn');
const messageEl = document.getElementById('message');

signupBtn.addEventListener('click', () => {
  authForm.style.display = 'block';
  submitBtn.textContent = 'Cadastrar';
  submitBtn.style.backgroundColor = '#4285f4';
});

loginBtn.addEventListener('click', () => {
  authForm.style.display = 'block';
  submitBtn.textContent = 'Entrar';
  submitBtn.style.backgroundColor = '#34a853';
});

authForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    if (submitBtn.textContent === 'Cadastrar') {
      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password
      });

      if (error) throw error;
      messageEl.textContent = 'Cadastro realizado! Verifique seu e-mail.';
      messageEl.style.color = 'green';
    } else {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
      messageEl.textContent = 'Login realizado com sucesso!';
      messageEl.style.color = 'green';
    }
  } catch (error) {
    messageEl.textContent = `Erro: ${error.message}`;
    messageEl.style.color = 'red';
    console.error(error);
  }
});