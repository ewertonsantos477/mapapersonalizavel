// Mostrar/ocultar senha
document.querySelectorAll('.toggle-password').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const input = document.getElementById(toggle.getAttribute('data-target'));
    if (input.type === 'password') {
      input.type = 'text';
      toggle.textContent = '👁️';
    } else {
      input.type = 'password';
      toggle.textContent = '👁️';
    }
  });
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita o envio padrão do formulário

  // Coleta os dados do formulário
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  // Aqui você pode fazer uma verificação fictícia ou real
  if (email === "teste@exemplo.com" && senha === "123456") {
    // Redireciona para a página desejada após login bem-sucedido
    window.location.href = "localiza.html"; // Altere para a página que quiser
  } else {
    alert("Email ou senha incorretos.");
  }
});
