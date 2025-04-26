function bouton()
{
     alert("A la découverte de satellites naturels du système solaire !");
    // création d'une fenêtre pop-up sur l'écran côté client
}

document.getElementById("para ").onmouseover = function() {survol()};
document.getElementById("para ").onmouseout = function() {quitte()};

function survol()
{
    document.getElementById("para ").style. color = "orange";
}

function quitte()
{
    document.getElementById("para ").style.color = "green" ;
}
