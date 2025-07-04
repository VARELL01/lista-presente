const chavePix = "(19) 98992-8641";
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const presentes = JSON.parse(localStorage.getItem("presentesValores")) || {};

const lista = {
  "p1": { nome: "Ajudar para mobiliar a casa", valor: 3000, imagem: "img/presente1.jpg" },
  "p2": { nome: "Cooktop última geração", valor: 450, imagem: "img/presente2.jpg" },
  "p3": { nome: "Curso de culinária para o noivo", valor: 1000, imagem: "img/presente3.jpg" },
  "p4": { nome: "Para a noiva não se atrasar", valor: 300, imagem: "img/presente4.jpg" },
  "p5": { nome: "Lua de mel dos noivos", valor: 2000, imagem: "img/presente5.jpg" },
  "p6": { nome: "Tampões de ouvido para o noivo, não escutar a noiva roncando", valor: 250, imagem: "img/presente6.jpg" },
  "p7": { nome: "Corte de cabelo para o dia do casamento do noivo", valor: 450, imagem: "img/presente7.jpg" },
  "p8": { nome: "Prioridade no buffet", valor: 150, imagem: "img/presente8.jpg" },
  "p9": { nome: "Primeiro pedaço do bolo", valor: 50, imagem: "img/presente9.jpg" },
  "p10": { nome: "Taça dos noivos", valor: 49.99, imagem: "img/presente10.jpg" },
  "p11": { nome: "Taco para o noivo", valor: 10.99, imagem: "img/presente11.jpg" },
  "p12": { nome: "Capacete para o noivo se defender do taco", valor: 300, imagem: "img/presente12.jpg" },
  "p13": { nome: "Aposentadoria dos noivos", valor: 1500, imagem: "img/presente13.jpg" },
  "p14": { nome: "Dia de princesa", valor: 1000, imagem: "img/presente14.jpg" },
  "p15": { nome: "Desconto se não comprar nada", valor: 100, imagem: "img/presente15.jpg" },
};

const item = lista[id];
const valorPago = presentes[id] || 0;

document.getElementById("detalhe").innerHTML = `
  <img src="${item.imagem}" alt="${item.nome}" />
  <h2>${item.nome}</h2>
  <p>Valor total: R$ ${item.valor.toFixed(2)}</p>
  <p>Valor já enviado: R$ ${valorPago.toFixed(2)}</p>
  <img src="pix.png" style="width:200px;" />
  <p>Chave Pix: ${chavePix}</p>
  <input id="valor" type="number" placeholder="Quanto você enviou?" />
  <button onclick="confirmar()">Confirmar envio</button>
`;

function confirmar() {
  const valor = parseFloat(document.getElementById("valor").value);
  if (!valor || valor <= 0) return alert("Informe um valor válido.");
  const atual = presentes[id] || 0;
  presentes[id] = atual + valor;
  localStorage.setItem("presentesValores", JSON.stringify(presentes));
  alert("Obrigado! Seu presente foi registrado.");
  window.location.href = "index.html";
}
