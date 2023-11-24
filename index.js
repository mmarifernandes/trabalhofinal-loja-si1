carrinho = []
function addToCart(produto, button){
    carrinho.push(produto)
    console.log(carrinho)
    button.innerHTML = "Adicionado!"
    button.disabled = true;
    document.getElementById("carrinho").setAttribute("class", "carrinhocheio");
    document.getElementById("carrinho").src = "assets/carrinhocheio.png"
    console.log(carrinho)
}

function checkOut(){
    // location.replace("/checkout.html");
    // location.reload()
    document.getElementById("popup").style.display = "flex"
    // document.getElementById("bg").style.
    printLista()
    // for(let i = 0; i<=carrinho.length; i+=1){
    //     document.getElementById("lista").innerHTML = "asdads"
    // }
    somar()
    console.log("teste")
}

function printLista() {
    document.getElementById("lista").innerHTML = "<h3>Carrinho de compras</h3>"
    console.log(document.getElementById("lista"))
        for(let i = 0; i<carrinho.length; i+=1){
        document.getElementById("lista").innerHTML += '<div id="itemlista"><img src="'+carrinho[i][2]+'" id="imglista" alt=""> <p id = "nomeitem">'+ carrinho[i][0] + '<p>R$'+carrinho[i][1]+'</p></p></div>'
    }

  }


function somar(){
    let total = 0
    for(let i = 0; i<carrinho.length; i+=1){
        total+= carrinho[i][1]
    }
    console.log(total)
    document.getElementById("valortotal").innerText = 'R$'+ total.toFixed(2)
    document.querySelectorAll('#parcela option').forEach(option => option.remove())
    for(let i = 1; i<=5; i++){
        option = document.createElement("option") 
        document.getElementById("parcela").options.add(option, i) 
        option.innerText = i+"x de "+(total/i).toFixed(2); 
        option.Value = total/i;
    }
}

function hidePopUp(){

    var popup = document.getElementById('popup');
    var bg = this.document.getElementById('bg');
    popup.style.display = 'none';
    bg.classList.remove("unblurred");
}
// window.addEventListener('mouseup',function(event){
//     if(event.target != popup && event.target.parentNode != popup){
//     }

// });  