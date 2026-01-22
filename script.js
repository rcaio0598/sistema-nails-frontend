const valores = {
  Gel: "R$ 120,00",
  Fibra: "R$ 150,00",
  Spa: "R$ 80,00",
  Blindagem: "R$ 100,00"
};

function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// Atualiza o valor quando o serviço muda
document.getElementById("servico").addEventListener("change", function () {
  document.getElementById("valor").value = valores[this.value] || "";
});

function salvarAgendamento() {
  const nome = document.getElementById("nome").value.trim();
  const servico = document.getElementById("servico").value;
  const valor = document.getElementById("valor").value;

  if (nome === "") {
    alert("Por favor, digite seu nome.");
    return;
  }

  // Mensagem premium corporativa
  const mensagem =
`Olá, ${nome}! ✨

Seu agendamento foi realizado com sucesso na *Mariana Lima | Nails Designer*.

📌 Serviço: ${servico}
💅 Valor: ${valor}

Ficaremos felizes em atendê-la 💖`;

  const mensagemCodificada = encodeURIComponent(mensagem);
  const telefone = "558196849992";

  const baseUrl = isMobile()
    ? "https://api.whatsapp.com/send"
    : "https://web.whatsapp.com/send";

  const linkWhatsApp = `${baseUrl}?phone=${telefone}&text=${mensagemCodificada}`;

  // =========================
  // LOCALSTORAGE
  // =========================
  const agendamento = {
    nome: nome,
    servico: servico,
    valor: valor,
    data: new Date().toISOString()
  };

  const agendamentosSalvos =
    JSON.parse(localStorage.getItem("agendamentos")) || [];

  agendamentosSalvos.push(agendamento);

  localStorage.setItem(
    "agendamentos",
    JSON.stringify(agendamentosSalvos)
  );
  // =========================

  // Feedback visual
  document.getElementById("mensagem").innerText =
    "Agendamento concluído com sucesso! Redirecionando para o WhatsApp...";

  // Limpa campos
  document.getElementById("nome").value = "";
  document.getElementById("servico").value = "";
  document.getElementById("valor").value = "";

  // Abre WhatsApp
  window.open(linkWhatsApp, "_blank");
}
