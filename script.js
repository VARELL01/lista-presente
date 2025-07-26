const presentes = [
  { id: "p1", nome: "Ajudar para mobiliar a casa", valor: 1500, imagem: "img/presente1.jpg" },
  { id: "p2", nome: "Cooktop última geração", valor: 450, imagem: "img/presente2.jpg" },
  { id: "p3", nome: "Curso de culinária para o noivo", valor: 1000, imagem: "img/presente3.jpg" },
  { id: "p4", nome: "Para a noiva não se atrasar", valor: 300, imagem: "img/presente4.jpg" },
  { id: "p5", nome: "Lua de mel dos noivos", valor: 1000, imagem: "img/presente5.jpg" },
  { id: "p6", nome: "Tampões de ouvido para o noivo, não escutar a noiva roncando", valor: 100, imagem: "img/presente6.jpg" },
  { id: "p7", nome: "Corte de cabelo para o dia do casamento do noivo", valor: 39.99, imagem: "img/presente7.jpg" },
  { id: "p8", nome: "Prioridade na fila do buffet", valor: 150, imagem: "img/presente8.jpg" },
  { id: "p9", nome: "Primeiro pedaço do bolo", valor: 50, imagem: "img/presente9.jpg" },
  { id: "p10", nome: "Taça personalizada dos noivos", valor: 49.99, imagem: "img/presente10.jpg" },
  { id: "p11", nome: "Taco caso o noivo não se comporte", valor: 10.99, imagem: "img/presente11.jpg" },
  { id: "p12", nome: "Capacete para o noivo se defender do taco", valor: 300, imagem: "img/presente12.jpg" },
  { id: "p13", nome: "Aposentadoria dos noivos", valor: 1500, imagem: "img/presente13.jpg" },
  { id: "p14", nome: "Dia de princesa para a noiva", valor: 1000, imagem: "img/presente14.jpg" },
  { id: "p15", nome: "SE EU NÃO COMPRAR NADA, O DESCONTO É MAIOR", valor: 100, imagem: "img/presente15.jpg" }
];

presentes.forEach(p => {
  const div = document.createElement("div");
  div.className = "presente";
  div.innerHTML = `
    <img src="${p.imagem}" alt="${p.nome}" />
    <h2>${p.nome}</h2>
    <p>Valor total: R$ ${p.valor.toFixed(2)}</p>
    <a href="presente.html?id=${p.id}"><button>Ver detalhes</button></a>
  `;
  document.getElementById("listaPresentes").appendChild(div);
});
