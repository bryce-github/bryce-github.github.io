let navElement, activeNavElement = null;
const allNavElements = document.querySelectorAll('nav p');
for ( i = 0; i < allNavElements.length; i++ ) {
  navElement = allNavElements[i];
  navElement.addEventListener('click', (e) => {
    if ( activeNavElement ) {
      activeNavElement.classList.remove('active');
    }
    activeNavElement = e.target;
    activeNavElement.classList.add('active');
  });
}