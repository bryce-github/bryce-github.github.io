////////////////
// NAVIGATION //
////////////////

const background = document.querySelector('.background');
const backgroundCover = document.querySelector('.background-cover');

let previousDirection, activeNavIndex = 3;
let activeNavElement = document.querySelector('nav > div > a.active');
const navElements = document.querySelectorAll('nav > div > a');
const navUnderline = document.querySelector('nav > div > hr');

let previousMainElement;
let activeMainElement = document.querySelector('main > div.home');
const mainElements = document.querySelectorAll('main > div');

for ( let i = 0; i < navElements.length; i++ ) {
  let navEl = navElements[i];
  navEl.addEventListener('click', function(e) {
    
    if (e.target === activeNavElement) {
      return;
    }

    // TRANSITION THE NAV BAR
    activeNavElement.classList.remove('active');
    activeNavElement = e.target;
    activeNavElement.classList.add('active');
    navUnderline.style.width = activeNavElement.clientWidth + 'px';
    navUnderline.style.left = activeNavElement.offsetLeft + 'px';

    // TRANSITION THE BODY
    let direction = i < activeNavIndex ? 'left' : 'right';
    let text = activeNavElement.innerText.toLowerCase();

    // TRANSITION THE OLD ACTIVE MAIN ELEMENT
    activeMainElement.classList.add('slideout-from-' + direction);
    activeMainElement.classList.add('hidden');
    activeMainElement.classList.remove('slidein-from-right');
    activeMainElement.classList.remove('slidein-from-left');
    if (previousMainElement) {
      previousMainElement.classList.remove('slideout-from-right');
      previousMainElement.classList.remove('slideout-from-left');
    }
    previousMainElement = activeMainElement;

    if (text !== 'home') {
      backgroundCover.classList.add('show')
    } else {
      backgroundCover.classList.remove('show')
    }

    // TRANSITION THE NEW ACTIVE MAIN ELEMENT
    activeMainElement = document.querySelector('main > div.' + text);
    activeMainElement.classList.add('slidein-from-' + direction);
    activeMainElement.classList.remove('hidden');
    previousDirection = direction;
    activeNavIndex = i;

  });
}
