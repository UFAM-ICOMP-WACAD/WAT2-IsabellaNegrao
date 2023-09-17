const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'Era uma bela manhã na cidade de :insertx:, onde estava fazendo 102 graus Fahrenheit e Bob foi a um festival folclórico de :inserty:. Tudo estava bem quando :insertz:. Inicialmente, houve a parada do festival em :insertx:, mas depois todo mundo fingiu que nada aconteceu e postaram fotos no :insertc:.';
const insertX = ['Manaus', 'Brasília', 'Gramado'];
const insertY = ['rodeio de ornintorrinco', 'comida gigante de borracha', 'arremessar amido de milho nas pessoas da cidade', 'música infantil para surdos'];
const insertZ = ['caiu um meteoro', 'a tubulação do esgoto partiu', 'o servidor da UFAM caiu', 'a mega-sena acumulou'];
const insertC = ['Instagram', 'Twitter', 'Tinder', 'Facebook', 'WhatsApp']

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  const cItem = randomValueFromArray(insertC);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);
  newStory = newStory.replaceAll(':insertc:',cItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const temperature =  `${Math.round((102-32) * 5 / 9)} graus Celcius`;
    newStory = newStory.replaceAll('102 graus Fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}