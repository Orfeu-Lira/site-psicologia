// ===============================
// DADOS EDITÁVEIS DO PSICÓLOGO
// ===============================

const dadosPsicologo = {
  nome: "Dr(a). Augusto Araujo Renenr",
  abordagem: "Psicologia Clínica • Terapia por Contingências de Reforçamento (TCR)",
  crp: "06/186067",
  modalidade: "Online",
  horarios: "Segunda e Sexta, das 08h às 18h; Terça, Quarta e Quinta, das 19h às 22h",
  descricao: "Atendimento psicológico voltado para o cuidado da saúde mental, promovendo autoconhecimento e qualidade de vida.",
  whatsapp: "11930821455",
};

// ===============================
// APLICAÇÃO DOS DADOS NO HTML
// ===============================

document.getElementById("nomePsicologo").textContent = dadosPsicologo.nome;
document.getElementById("abordagem").textContent = dadosPsicologo.abordagem;
document.getElementById("crp").textContent = dadosPsicologo.crp;
document.getElementById("modalidade").textContent = dadosPsicologo.modalidade;
document.getElementById("horarios").textContent = dadosPsicologo.horarios;
document.getElementById("descricao").textContent = dadosPsicologo.descricao;
document.getElementById("whatsapp").textContent = "+" + dadosPsicologo.whatsapp;
document.getElementById("email").textContent = dadosPsicologo.email;

document.getElementById("linkWhatsapp").href =
  `https://wa.me/${dadosPsicologo.whatsapp}`;
