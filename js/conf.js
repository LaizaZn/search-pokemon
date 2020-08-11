$(document).ready(function(){
    $("#button").click(function(){
        var nomePokemon = $("#pokemon").val();
        $.get("https://pokeapi.co/api/v2/pokemon/"+nomePokemon, function(response, status){
            console.log(status);
            if(status == 404){
                $("#infosPokemon").html("Não há um pokémon com este nome : ");
            }
            else {
                $("#name").html("<b>Nome: </b>"+response.name);
                $("#idPokedex").html("<b>Número na Pokédex: </b>"+response.id);
                $("#height").html("<b>Altura: </b>"+response.height+"m"); 
                $("#weight").html("<b>Peso: </b>"+response.weight+"kg");
                $("#moves").html("<b>Movimentos: </b>");
                for(var i=0; i < response.moves.length; i++){
                    console.log();
                    $("#moves").append(response.moves[i].move.name+"<br>");
                }
            }
        });
    });
});
