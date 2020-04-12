console.log("connected"); 

$(".fa-sticky-note").click(function(){
	$("input[type='text']").fadeToggle();
})

//Check et unCheck
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//supprimer une ligne
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation(); 
});

$("input[type='text']").keypress(function(event){
	//le 13 est le code de la touche entrée
	if(event.which === 13){
		//récupérer le texte de l'input
		var addToDo = $(this).val();
		$(this).val(""); 
		//Créer une nouvelle ligne
		$("ul").append("<li><span><i id='delete' class='fas fa-eraser'></i></span>"+ addToDo + "</li>");
	};
});

	/* C'est une loop en IF ELSE à la place de completed
	//si c'est gris 
	if($(this).css("color") === "rgb(128, 128, 128)"){
		//remet en noir et enlève la barre
		$(this).css({
			color: "black", 
			textDecoration: "none",
		});
	} else {
		//sinon mets en gris wesh
		$(this).css({
			color: "rgb(128, 128, 128)", 
			textDecoration: "line-through",
		});
	};*/
