
let valorTotal = 0; //Variável fora da função para não ficar repetindo dentro da função.

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor;
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]
    let valorUnitarioProduto = produto.split('R$')[1]
    let quantidade = document.getElementById('quantidade').value;

    //calcular o preço (subtotal);
    let preco = quantidade * valorUnitarioProduto

    //adicionar produto no carrinho;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"> 
    <span class="texto-azul"> ${quantidade}x </span> ${nomeProduto} 
    <span class="texto-azul">R$${preco} </span> </section>`

    //atualizar o valor total da compra.
    valorTotal = valorTotal + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${valorTotal}`;
    document.getElementById('quantidade').value = 0;
};

function limpar() {
    // Limpar o carrinho (se necessário)
    let limpaListaProdutos = document.getElementById('lista-produtos');
    limpaListaProdutos.innerHTML = '';

    // Limpar o valor total (se necessário)
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = 'R$ 0,00';
}

// Adicionar o event listener ao botão
const botaoLimpar = document.querySelector('.botao-form botao-limpar');
botaoLimpar.addEventListener('click', limpar);
