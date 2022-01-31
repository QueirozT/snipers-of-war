
const target = document.querySelectorAll('[data-anim]'); // Constante armazenando um objeto com todos os elementos que serão animados.

const animationClass = 'animar'; // Constante armazenando o nome da classe que vai animar os objetos.


// Função animeScroll(), responsável pela lógica de pegar os dados da distância do objeto ao rolar e o topo da página e adicionar uma funcionalidade.
function animeScroll(){

    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4); // Constante armazenando a distância do topo da página e da barra de scroll... somado com 3/4 da tela para o topo da página relativo ser numa altura boa para ativar os próximos comandos.
    
    target.forEach((e)=>{ // forEach() função responsável por varrer um objeto e executar uma função, no caso arrowfunction.

        if (windowTop > e.offsetTop){ // Verificando a distância do item dentro do objeto do topo da página através do .offsetTop e comparando com a distância relativa do scroll da página no momento.

            e.classList.add(animationClass); // Adicionando uma classe no item dentro do objeto para executar a animação.
        } else {

            e.classList.remove(animationClass); // Removendo a classe do item para desfazer a animação.
        };
    });
};


// chamado de função para a animeScroll(), para agarantir que a função seja chamada pelo menos uma vez ao carregar a página.
animeScroll();


// Event Listener responsável por verificar e executar a função debounce e chamar a função animeScroll() sempre que o scroll for acionado e verificado pelo debounce no tempo limite de 200ms.
if(target.length){
    window.addEventListener('scroll', debounce(() => {
        animeScroll();
    }, 100));
}

// Função debounce responsável por otimizar o scroll do mouse no site para não ser ativado várias vezes sem que realmente esteja em uso.
function debounce(func, wait, immediate) {
	let timeout;
	return function(...args) {
		const context = this;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
