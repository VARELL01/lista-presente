const chavePix = "(19) 989928641";
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const presentes = JSON.parse(localStorage.getItem("presentesValores")) || {};

const lista = {
  "p1": { nome: "Ajuda para mobiliar a casa", valor: 3000, imagem: "lista-presente/img/presente1.jpg" },
  "p2": { nome: "Cooktop última geração", valor: 450, imagem: "\lista-presenteimg/presente2.jpg" },
  "p3": { nome: "Curso de culinária para o noivo", valor: 1000, imagem: "\lista-presenteimg/presente3.jpg" },
  "p4": { nome: "Para a noiva não se atrasar", valor: 300, imagem: "\lista-presenteimg/presente4.jpg" },
  "p5": { nome: "Lua de mel dos noivos", valor: 2000, imagem: "\lista-presenteimg/presente5.jpg" },
  "p6": { nome: "Tampão de ouvido para o noivo", valor: 250, imagem: "\lista-presenteimg/presente6.jpg" },
  "p7": { nome: "Corte de cabelo do noivo", valor: 450, imagem: "\lista-presenteimg/presente7.jpg" },
  "p8": { nome: "Prioridade no buffet", valor: 150, imagem: "\lista-presenteimg/presente8.jpg" },
  "p9": { nome: "Primeiro pedaço do bolo", valor: 50, imagem: "\lista-presenteimg/presente9.jpg" },
  "p10": { nome: "Taça dos noivos", valor: 49.99, imagem: "\lista-presenteimg/presente10.jpg" },
  "p11": { nome: "Taco para o noivo", valor: 10.99, imagem: "\lista-presenteimg/presente11.jpg" },
  "p12": { nome: "Capacete para o noivo", valor: 300, imagem: "\lista-presenteimg/presente12.jpg" },
  "p13": { nome: "Aposentadoria dos noivos", valor: 1500, imagem: "\lista-presenteimg/presente13.jpg" },
  "p14": { nome: "Dia de princesa", valor: 1000, imagem: "\lista-presenteimg/presente14.jpg" },
  "p15": { nome: "Desconto se não comprar nada", valor: 100, imagem: "\lista-presenteimg/presente15.jpg" },
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
