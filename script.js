const chavePix = "(19)989928641";

const presentes = [
  {
    id: "p1",
    nome: "Panela Elétrica",
    valor: "R$ 200,00",
    imagem: "img/presente1.jpg"
  },
  {
    id: "p2",
    nome: "Jogo de Toalhas",
    valor: "R$ 150,00",
    imagem: "img/presente2.jpg"
  }
];

presentes.forEach(presente => {
  const comprado = localStorage.getItem(presente.id);
  if (comprado === "true") return;

  const div = document.createElement("div");
  div.className = "presente";
  div.innerHTML = `
    <img src="${presente.imagem}" alt="${presente.nome}">
    <h2>${presente.nome}</h2>
    <p>${presente.valor}</p>
    <button onclick="copiarPix('${presente.id}')">Presentear</button>
  `;
  document.getElementById("listaPresentes").appendChild(div);
});

function copiarPix(id) {
  navigator.clipboard.writeText(chavePix).then(() => {
    alert("Chave Pix copiada! Após o pagamento, o item será marcado como comprado.");
    localStorage.setItem(id, "true");
    location.reload();
  });
}
