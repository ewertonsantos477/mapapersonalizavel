document.addEventListener('DOMContentLoaded', () => {
  // --- Funcionalidade para Alternar Visibilidade da Senha (mantida do seu script) ---
  document.querySelectorAll('.toggle-password').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const inputElement = document.getElementById(toggle.getAttribute('data-target'));
      if (inputElement) { // Adicionada verificação para segurança
        if (inputElement.type === 'password') {
          inputElement.type = 'text';
          toggle.textContent = '👁️'; // Mantido como no seu script
        } else {
          inputElement.type = 'password';
          toggle.textContent = '👁️'; // Mantido como no seu script
        }
      } else {
        console.error(`Elemento input com ID '${toggle.getAttribute('data-target')}' não encontrado.`);
      }
    });
  });

  // --- Formulário de Login (index.html - adaptado do seu script) ---
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita o envio padrão do formulário

      // Coleta os dados do formulário
      const emailInput = document.getElementById("email"); // Assume id="email" no seu HTML de login
      const passwordInput = document.getElementById("password"); // Assume id="password" no seu HTML de login

      if (!emailInput || !passwordInput) {
        alert("Erro no formulário: campos de email ou senha não encontrados.");
        return;
      }

      const email = emailInput.value;
      const senha = passwordInput.value;

      // Validação básica de campos vazios
      if (!email || !senha) {
        alert('Por favor, preencha o email e a senha.');
        return;
      }

      // Sua verificação fictícia
      if (email === "teste@exemplo.com" && senha === "123456") {
        // Redireciona para a página desejada após login bem-sucedido
        window.location.href = "localiza.html"; // Mantido do seu script
      } else {
        alert("Email ou senha incorretos.");
      }
    });
  }

  // --- Formulário de Recuperação de Senha (esqueci-senha.html - adicionado) ---
  const recuperarSenhaForm = document.getElementById('recuperarSenhaForm');
  if (recuperarSenhaForm) {
    recuperarSenhaForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const emailInput = recuperarSenhaForm.querySelector('input[name="email"]'); // Busca pelo atributo name="email" dentro do formulário

      if (!emailInput) {
        alert("Erro no formulário: campo de email para recuperação não encontrado.");
        return;
      }
      const emailRecuperacao = emailInput.value;

      if (!emailRecuperacao) {
        alert('Por favor, insira seu email para recuperação.');
        return;
      }

      console.log('Solicitação de recuperação de senha para:', emailRecuperacao);
      const mensagemDiv = document.getElementById('mensagem'); // Div para exibir a mensagem de confirmação
      if (mensagemDiv) {
        mensagemDiv.textContent = `Um link de recuperação (simulado) foi enviado para ${emailRecuperacao}. Verifique sua caixa de entrada.`;
        mensagemDiv.style.display = 'block'; // Torna a mensagem visível
      } else {
        alert(`Um link de recuperação (simulado) foi enviado para ${emailRecuperacao}. Verifique sua caixa de entrada.`);
      }
      recuperarSenhaForm.reset(); // Limpa o formulário
    });
  }

  // --- Formulário de Cadastro (pagina-de-cadastro.html - adicionado) ---
  const cadastroForm = document.getElementById('cadastroForm');
  if (cadastroForm) {
    cadastroForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const nomeInput = cadastroForm.querySelector('input[name="nome"]');
      const emailInput = cadastroForm.querySelector('input[name="email"]');
      const passwordInput = cadastroForm.querySelector('input[name="password"]');
      const confirmPasswordInput = cadastroForm.querySelector('input[name="confirmPassword"]');

      if (!nomeInput || !emailInput || !passwordInput || !confirmPasswordInput) {
        alert("Erro no formulário: um ou mais campos de cadastro não foram encontrados.");
        return;
      }

      const nome = nomeInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;

      // Validação básica
      if (!nome || !email || !password || !confirmPassword) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      if (password !== confirmPassword) {
        alert('As senhas não coincidem! Por favor, verifique.');
        passwordInput.value = ''; // Limpa o campo senha
        confirmPasswordInput.value = ''; // Limpa o campo confirmar senha
        passwordInput.focus(); // Coloca o foco no campo senha
        return;
      }

      console.log('Tentativa de cadastro:', { nome, email, password });
      alert(`Cadastro realizado com sucesso (simulado) para:\nNome: ${nome}\nEmail: ${email}\n\nVocê será redirecionado para a página de login.`);
      
      // Em uma aplicação real, você enviaria esses dados para um servidor.
      // Após o cadastro bem-sucedido, redireciona para a página de login:
      window.location.href = 'index.html';
    });
  }
});