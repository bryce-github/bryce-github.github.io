// handle navigation

let navElement, activeNavElement, activeMainElement, activeElementName;
const allNavElements = document.querySelectorAll('nav p');

function setActiveNav( navElement ) {
  if ( activeNavElement ) {
    activeNavElement.classList.remove('active');
    activeMainElement.classList.remove('active');
  }
  activeNavElement = navElement;
  activeElementName = activeNavElement.innerText.toLowerCase();
  activeMainElement = document.querySelector('#'+activeElementName)
  activeNavElement.classList.add('active');
  activeMainElement.classList.add('active');
}

for ( i = 0; i < allNavElements.length; i++ ) {
  navElement = allNavElements[i];
  if ( navElement.classList.contains( 'active' ) ) {
    setActiveNav( navElement );
  }
  navElement.addEventListener( 'click', (e) => {
    setActiveNav( e.target );
  })
}