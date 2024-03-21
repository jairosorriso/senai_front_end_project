$(document).ready(function(){

    $("#botao-cadastrar").click(function()
    {
        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide();
    });
});

function cadastro() {
    alert("Cadastrado realizado com sucesso!");
    window.location.href = "index.html";
}

function topo(){
	window.scrollTo({
	  top: 0,
	  left: 0,
	  behavior: 'smooth'
	});
}