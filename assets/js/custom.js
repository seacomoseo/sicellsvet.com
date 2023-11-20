
// FOOTER
const footerLastItem = document.querySelector('.footer__item:last-child')
if (footerLastItem) {
  footerLastItem.innerHTML = footerLastItem.innerHTML.replace('Diseño', 'Desarrollo')
  footerLastItem.insertAdjacentHTML('beforebegin', '<div class="footer__item">Diseño Web J. Campos</div>' )
}
