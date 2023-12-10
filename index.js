carrinho = []
function addToCart(produto, button) {
    carrinho.push(produto)
    button.innerHTML = "Adicionado!"
    button.disabled = true;
    document.getElementById("carrinho").setAttribute("class", "carrinhocheio");
    document.getElementById("carrinho").src = "assets/carrinhocheio.png"
    printLista()
}

function checkOut() {
    document.getElementById("popup").style.display = "flex"
    document.getElementById("popup").style.flexDirection = "column"
    printLista()
    console.log("teste")
}

function printLista() {
    document.getElementById("cartao").disabled = false;
    document.getElementById("pix").disabled = false;
    document.getElementById("lista").innerHTML = "<h3>Carrinho de compras</h3>"
    for (let i = 0; i < carrinho.length; i += 1) {
        document.getElementById("lista").innerHTML += '<div id="itemlista"><img src="' + carrinho[i][2] + '" id="imglista" alt=""> <p id = "nomeitem">' + carrinho[i][0] + '<p id="preco">R$' + carrinho[i][1].toFixed(2) + '</p></p></div>'
    }
    somar()
}


function somar() {
    let total = 0
    for (let i = 0; i < carrinho.length; i += 1) {
        total += carrinho[i][1]
    }
    document.getElementById("valortotal").innerText = 'R$' + total.toFixed(2)
    document.querySelectorAll('#parcela option').forEach(option => option.remove())
    if(carrinho.length > 0){
        for (let i = 1; i <= 5; i++) {
            option = document.createElement("option")
            document.getElementById("parcela").options.add(option, i)
            if (i > 2){
                totaljuros = (0.03*(total/i))
                total += totaljuros
                option.innerText = i + "x de " + (total / i).toFixed(2)+ " com juros";
                console.log(total, totaljuros)
            }
            else{
                option.innerText = i + "x de " + (total / i).toFixed(2);
            }
            option.Value = total / i;
        }

    }else{
        document.getElementById("cartao").disabled = true;
        document.getElementById("pix").disabled = true;
    }
}

function hidePopUp() {

    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}


