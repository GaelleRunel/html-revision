"use strict";

$(function(){

    $(".nav-item").on("click", function(){  // au click sur l'item de la navbar
        $(".nav-item").removeClass("active");  // on enleve la classe "active" à tous les li (items)
        $(this).addClass("active"); // on l'ajoute à l'item cliqué   
    });

});