document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-contato');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio real

    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const contato = document.querySelector('input[name="contato"]:checked');
    const motivo = document.getElementById('motivo').value;
    const novidades = document.getElementById('novidades').checked;

    if (!nome || !sobrenome || !email || !telefone || !mensagem || !contato) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Exemplo de resposta formatada
    const resposta = `
      Nome: ${nome} ${sobrenome}
      Email: ${email}
      Telefone: ${telefone}
      Forma de Contato: ${contato.value}
      Motivo: ${motivo}
      Mensagem: ${mensagem}
      Deseja receber novidades: ${novidades ? 'Sim' : 'Não'}
    `;

    alert('Formulário enviado com sucesso!\n' + resposta);

    form.reset(); // Limpa o formulário após o envio simulado
  });
});
