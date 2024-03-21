function login()
{
     var logado = 0;
     var usuario = document.getElementsByName('user')[0].value;
	 usuario = usuario.toLowerCase();
	 var senha = document.getElementById('pass').value;
	 senha = senha.toLowerCase();

	 if(usuario == "admin" && senha == "123456"){
          window.location = "index.html";
	      logado = 1;     
     }

     if(logado == 0){
	    alert("Acesso Negado. Dados incorretos");
      }
}

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
	if(event.type === 'touchstart') event.preventDefault();	
	const nav = document.getElementById('nav');
	nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const btn_login = document.getElementById("btn-login");
const btn_cadastrar = document.getElementById("btn-cadastrar");
const container = document.getElementById("container");


btn_cadastrar.addEventListener('click',()=>{
	container.classList.add("modo-de-inscricao");
});

btn_login.addEventListener('click',()=>{
	container.classList.remove("modo-de-inscricao");
});
