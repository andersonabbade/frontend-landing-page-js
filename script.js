
/*

const cards = document.querySelectorAll ('.btn');

cards.forEach(card => {
  card.addEventListener('click', () => {

    // remove destaque de todos
    cards.forEach(c => c.classList.remove('ativo'));

    // adiciona destaque no clicado
    card.classList.add('ativo');

    const desc = card.querySelector('.descricao');
    const tech = card.dataset.tech;

    if (tech === 'html') {
      desc.textContent =
        'HTML5 é a estrutura do site. Ele define títulos, textos e elementos.';
    }

    if (tech === 'css') {
      desc.textContent =
        'CSS controla o visual do site, cores, layout e responsividade.';
    }

    if (tech === 'js') {
      desc.textContent =
        'JavaScript adiciona interatividade e comportamento dinâmico.';
    }
  });
}); */

const cards = document.querySelectorAll(".btn"); //procure todos os elementos que tem a clasee .btn

cards.forEach(card => {  //para cada card da lista faça algo, o card é cada botão individual = html css js 
    card.addEventListener('click',() => { //quando esse card for clicado, execute esse codigo. 


      cards.forEach(c => c.classList.remove("ativo")); //limpando o estado visual, tire a classe ativo de todos os cards, isso evita que 2 fuquem ativos ao mesmooo tempo.

      card.classList.add('ativo'); //coloque a classe ativo somente no que foi clicado.

      const desc = card.querySelector(".descricao"); //entra dentro do card clcicado e pega o paragrafo que vai mostrar o texte. 
      const tech = card.dataset.tech; //isso le o atributo do html ex: <div class ="bnt" data-tech="html"> então tech = "html"

      //A LOGICA  :
      
      if (tech === 'html') {
        desc.textContent = "HTML5 é a estrutura do site. Ele define títulos, textos e elementos."; // SE O BOTÃO CLICADO TIVER data-tech ="html" O TEXTO DO PARAGRAFO MUDA PARA ESSA FRASE 
      }

      if (tech === 'css') {
      desc.textContent =
        'CSS controla o visual do site, cores, layout e responsividade.'; //SE FOR CSS, MUDE O TEXTO PARA O DE CSS 
    }

     if (tech === 'js') {
      desc.textContent =
        'JavaScript adiciona interatividade e comportamento dinâmico.'; //SE FOR JS , MUDE O TEXTO PARA O DE JS
    }
    });
  }); 
