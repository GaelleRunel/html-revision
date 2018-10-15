"use strict";

$(function(){

    $(".nav-item").on("click", function(){  // au click sur l'item de la navbar
        $(".nav-item").removeClass("active");  // on enleve la classe "active" à tous les li (items)
        $(this).addClass("active"); // on l'ajoute à l'item cliqué   
    });


    /////////////////////////////////////////////////////////////////////////////////////////////

    // effet d'apparaition du texte Gaelle RUNEL lettre par lettre
    var name = $("#texte").text().trim();  // trim enlève les espaces au début et à la fin de la chaine
    console.log (name);

    // on vide la div qui contient le mot (pour éviter qu'il apparaisse 2 fois)
    $("#texte").empty();

    // parcourir les lettres du mot
    for(let i=0; i<name.length; i++){

        setTimeout (function(){
            console.log(name[i]);
            $("#texte").append(name[i]);
        },300 * i);                     // 300 = durée de déclenchement --- multipliée par i pour avoir 1*300, 2*300, 3*300,...
}                                       // ce qui permet d'échelonner l'affichage du texte.

});




 

