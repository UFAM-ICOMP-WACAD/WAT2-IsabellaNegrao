const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['cosmic-nami.jpg', `lati-avi.jpg`, `petu-filhote-1.jpg`, `petu-filhote-2.jpg`, `yuya-chibi.png`];
const alts = {
  'cosmic-nami.jpg' : 'Cosmic Destiny Nami fanart',
  'lati-avi.jpg' : 'First custom avatar of Ilyriss',
  'petu-filhote-1.jpg' : 'Cute photo of Pretinha',
  'petu-filhote-2.jpg' : 'Cute photo of Pretinha, but even cuter',
  'yuya-chibi.png' : 'Sakaki Yuya fanart'
}

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});