carrinho = []
function addToCart(produto, button){
    carrinho.push(produto)
    console.log(carrinho)
    button.innerHTML = "Adicionado!"
    button.disabled = true;
    document.getElementById("carrinho").setAttribute("class", "carrinhocheio");
    document.getElementById("carrinho").src = "/assets/carrinhocheio.png"
    console.log(carrinho)
}

function checkOut(){
    // location.replace("/checkout.html");
    // location.reload()
    document.getElementById("popup").style.display = "flex"
    printLista()
    // for(let i = 0; i<=carrinho.length; i+=1){
    //     document.getElementById("lista").innerHTML = "asdads"
    // }
    console.log("teste")
}

function printLista() {
    document.getElementById("lista").innerHTML = "<h3>Carrinho de compras</h3>"
    console.log(document.getElementById("lista"))
        for(let i = 0; i<=carrinho.length; i+=1){
        document.getElementById("lista").innerHTML += '<div id="itemlista"> <p id = "nomeitem">'+ carrinho[i][0] + '<p>R$'+carrinho[i][1]+'</p></p></div>'
    }
  }


  window.addEventListener('mouseup',function(event){
    var popup = document.getElementById('popup');
    if(event.target != popup && event.target.parentNode != popup){
        popup.style.display = 'none';
    }
});  