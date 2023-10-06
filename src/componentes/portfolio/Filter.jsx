 const linkPortfolio = document.querySelectorAll('.portfolio__button-filter')

 export function activePortfolio(){
  linkPortfolio.forEach(l=> l.classList.remove('active-portfolio'))
  this.classList.add('active-portfolio')
}
linkPortfolio.forEach(l=> l.addEventListener('click', activePortfolio))