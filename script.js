
var altura=0;
var largura=0;
var vidas=3;
var tempo=30;
var tempo_nivel=1500;
var nivel=window.location.search.replace("?","");

switch(nivel){
	case "normal":
		tempo_nivel=3000;
		break;
	case "medio":
		tempo_nivel=2000;
		break;
	case "dificil":
		tempo_nivel=1000;
		break;
}

function capturar_dimensoes() {
	largura=Math.floor(window.innerWidth)-100;
	altura=Math.floor(window.innerHeight)-100;
	altura=altura<0 ? altura=0:altura=altura;
	largura=largura<0 ? largura=0:largura=largura;

}


function criar_mosquito(){

	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove();

		if(vidas==0){
			clearInterval(cria_mosquito)
			clearInterval(tempo_cronometro)
			window.location.href="over_game.html"

		}else{
			
			document.getElementById('img'+vidas).src="imagens/coracao_vazio.png"
			vidas--;
		}
	}

	var mosquito=document.createElement('img');
	mosquito.src='imagens/mosca.png';
	mosquito.className=tamanho_aleatorio()+' '+ lado_mosquito();
	mosquito.id='mosquito'
	mosquito.style.position='absolute'
	mosquito.style.top=Math.floor (Math.random()*altura)+'px';;
	mosquito.style.left=Math.floor (Math.random()*largura)+'px';;
	mosquito.onclick=function(){
		this.remove();
	}

	document.body.appendChild(mosquito);
}

function tamanho_aleatorio(){
	switch(Math.floor(Math.random()*3)){
		case 0:
			return 'mosquito1';
		case 1:
			return 'mosquito2';
		case 2:
			return 'mosquito3';
	}

}



function lado_mosquito(){
	switch(Math.floor(Math.random()*2)){
		case 0:
			return 'mosquito_ladoA';
		case 1:
			return 'mosquito_ladoB';
		}
}


	var tempo_cronometro=setInterval(function(){
		
		if(tempo==0){
			clearInterval(tempo_cronometro)
			clearInterval(cria_mosquito)
			window.location.href="winner.html"
			
		}else{
		 tempo--;
		 document.getElementById('relogio').innerHTML=tempo;
		 
		}
		

	},1000)



capturar_dimensoes()

