class Produto {
  constructor(nome, data_cadastro, descricao, preco) {
    this.nome = nome;
    this.data_cadastro = data_cadastro;
    this.descricao = descricao;
    this.preco = preco;
  }
  mostrar_produto() {
    return this.nome + this.data_cadastro + this.descricao + this.preco;
  }
}

class ProdutoDestaque extends Produto {
  constructor(nome, data_cadastro, descricao, preco, produto_destaque) {
    super(nome, data_cadastro, descricao, preco);
    this.produto_destaque = produto_destaque;
  }
  mostrar_produto_destaque() {
    return `
      <div class="vermelho">${this.nome}</div>
      <div>${this.data_cadastro}</div>
      <div class="produto-imagem">
        <img src="${this.produto_destaque}" alt="${this.nome}">
      </div>
      <p>Descrição: ${this.descricao}</p>
      <p>Ano: ${this.data_cadastro.slice(-4)}</p>
      <p>Requisitos: ${this.requisitos}</p>
      <p>Preço: R$ ${this.preco.toFixed(2)}</p>
    `;
  }
}

const produto = new ProdutoDestaque(
  "PC Gamer Concórdia",
  "23-05-2023",
  "PC Gamer Concórdia Intel Core i7-10700F, Memória 16GB, SSD 500 NVME, Placa de Vídeo RTX 3060 12GB Ghost",
  5000.00,
  "https://m.media-amazon.com/images/I/61bd1BjNISL._AC_SX679_.jpg",
  "Processador: Intel Core i7-10700F, Memória: 16GB, Armazenamento: SSD 500 NVME, Placa de Vídeo: RTX 3060 12GB Ghost"
);

const divProdutoDestaque = document.getElementById("produto-destaque");
divProdutoDestaque.insertAdjacentHTML("afterbegin", produto.mostrar_produto_destaque());

const listaImagens = [
  "https://a-static.mlcdn.com.br/800x560/notebook-gamer-lenovo-ideapad-l340-81tr0003br-intel-core-i5-8gb-1tb-156-ips-nvidia-gtx1050-3gb/magazineluiza/228805200/37c7f893567519fd0fc5849fbb856272.jpg",
  "https://a-static.mlcdn.com.br/800x560/notebook-gamer-lenovo-ideapad-l340-81tr0003br-intel-core-i5-8gb-1tb-156-ips-nvidia-gtx1050-3gb/magazineluiza/228805200/a27ac3fb9f6cfca756ae8a41eed5d0b3.jpg",
  "https://a-static.mlcdn.com.br/1500x1500/notebook-gamer-lenovo-ideapad-l340-81tr0003br-intel-core-i5-8gb-1tb-156-ips-nvidia-gtx1050-3gb/magazineluiza/228805200/c541f6d6e6c65214aeb6a4843a6a2015.jpg",
  "https://a-static.mlcdn.com.br/1500x1500/notebook-gamer-lenovo-ideapad-l340-81tr0003br-intel-core-i5-8gb-1tb-156-ips-nvidia-gtx1050-3gb/magazineluiza/228805200/53c0a62cfaaaef5dfafb4bb84db7c8e0.jpg",
  "https://a-static.mlcdn.com.br/1500x1500/notebook-gamer-lenovo-ideapad-l340-81tr0003br-intel-core-i5-8gb-1tb-156-ips-nvidia-gtx1050-3gb/magazineluiza/228805200/6bedc6ebd4565cfb19a90d7151668d34.jpg"
];

const divListaProdutos = document.getElementById("lista-produtos");

const botaoCarinho = document.querySelector('#botao-carinho');

botaoCarinho.addEventListener('click', function() {
  try {
    // Adicionar comportamento ao clicar no botão "carinho"
  } catch (e) {
    console.error('Ocorreu um erro ao clicar no botão "carinho":', e);
    alert('Desculpe, ocorreu um erro ao clicar no botão "carinho". Por favor, tente novamente mais tarde.');
  }
});

for (let i = 0; i < 5; i++) {
  const imagem = listaImagens[i];
  const produtoAleatorio = new ProdutoDestaque(
    `Produto ${i + 1}`,
    "23-05-2023",
    "Descrição aleatória",
    Math.random() * 100,
    imagem
  );
  const produtoCard = `
    <div class="produto-card">
      <img src="${produtoAleatorio.produto_destaque}" alt="${produtoAleatorio.nome}">
      <h3>${produtoAleatorio.nome}</h3>
      <p>${produtoAleatorio.descricao}</p>
      <p>Preço: R$ ${produtoAleatorio.preco.toFixed(2)}</p>
    </div>
  `;
  divListaProdutos.insertAdjacentHTML("beforeend", produtoCard);
}