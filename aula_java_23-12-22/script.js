const quantidadeSubtotal = document.getElementById("quantidade-subtotal")
const valorSubtotal = document.getElementById("valor-subtotal")
const addProduto = document.getElementById("btn-adicionar-produto-01")
const subProduto = document.getElementById("btn-subtrair-produto-01")
const quantidadeProduto = document.getElementById("quantidade-produto-01")
const excluir_pedido = document.getElementsByClassName("item-carrinho")
const excluir_valor = document.getElementsByClassName("itens-valor")
const carrinho_vazio = document.getElementsByClassName("mensagem-carrinho-vazio")
const valor_zerado = document.getElementsByClassName("itens-valor-zerado")



//quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
//valorSubtotal.innerText = subtotalInfo.valor;


//quantidadeSubtotal.innerText = quantidadeProduto.value + " itens";
//valorSubtotal.innerText = subtotalInfo.valor;


let subtotalInfo = {
    valor: 11.66
  };


addProduto.addEventListener('click', adicionarProduto)
subProduto.addEventListener('click', subtrairProduto)
updateSubtotalText ()


function calculoValorTotal(quantidadeProduto) {
    valorSubtotal.innerText = (subtotalInfo.valor * quantidadeProduto).toFixed(2);
}


function updateSubtotalText () {
    quantidadeSubtotal.innerText = quantidadeProduto.value ==1? `${quantidadeProduto.value} item` : `${quantidadeProduto.value} itens`;
    calculoValorTotal(quantidadeProduto.value)
}


function adicionarProduto() {
    if(quantidadeProduto.value < 10) {
        quantidadeProduto.value = Number(quantidadeProduto.value) + 1
    }
    updateSubtotalText()
}


function subtrairProduto() {
    if (quantidadeProduto.value > 0) {
        quantidadeProduto.value = Number(quantidadeProduto.value) - 1
    }
    updateSubtotalText()
}


function excluirPedido() {
    excluir_pedido[0].classList.add ('excluir-pedido')
    excluir_valor[0].classList.add ('excluir-pedido')
    carrinho_vazio[0].classList.add ('visible')
    valor_zerado[0].classList.add ('visible')
}


