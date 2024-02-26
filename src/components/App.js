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
const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = 'Hola mundo!';
  el.innerHTML = exibeCards(letras);
  return el;
};

const exibeCards = (elementos) => {
  let cards = ""
  elementos.items.forEach((letra) => {
   cards += `<div style="background-color: ${letra.bgColor}">${letra.id}</div>`
})
  return cards;
}
export default App;
