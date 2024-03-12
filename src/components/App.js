//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//
 import letras from '../data/letras/letras.js';
// const App = () => {
//   const el = document.createElement('div');

//   el.className = 'App';
//   el.textContent = 'Hola mundo!';
//   el.innerHTML = exibeCards(letras);
//   return el;
// };

// const exibeCards = (elementos) => {
//   let cards = ""
//   elementos.items.forEach((letra) => {
//    cards += `<div style="background-color: ${letra.bgColor}">
//    <img src='${letra.image}'>
//    </div>`
// })
//   return cards;
// }

const root = document.querySelector('.root');

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;

}
//FUNÇÃO PARA EXIBIR OS CARDS
const exibeCards = (vogais) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');
  front.style.backgroundImage = `url('${vogais}')`; //PARA CONSEGUIR PASSAR VARIÁVEIS DENTRO DE STRINGS

  card.appendChild(front);
  card.appendChild(back);

  return card;
}
//FUNÇÃO PARA CARREGAR O JOGO .. ESSA FUNÇÃO VAI PECORRER O ARRAY NA PASTA letras.js 
const loadGame = () => {
  
  const dupliCard = [...letras.items , ...letras.items]

  dupliCard.forEach((vogais) => {

    const card  = exibeCards(vogais.image);
    root.appendChild(card);
    
  });


    
};

loadGame();

export default App; 