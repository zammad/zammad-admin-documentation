/* Custom overrides */
/* No oversized <pre>, please - Thanks to @TJemxx */
function shortPre(i) {
   var attr = 'pre-' + i
   var pre = document.getElementById(attr);
   var button = document.getElementById('button-' + attr);

   if ( pre.classList.contains('shorten-pre')) {
      pre.classList.remove('shorten-pre');
      pre.classList.add('release-shorten-pre');

      $(button).html('Reduce to smaller size ...')
   } else {
      pre.classList.remove('release-shorten-pre');
      pre.classList.add('shorten-pre');

      $(button).html('Expand to full size ...')
   }
}

function WorkPres(item, index) {
   if( item.clientHeight > 250 ){
      var button = document.createElement('button');
      button.setAttribute('onclick', 'shortPre(' + index + ')');
      button.setAttribute('id', 'button-pre-' + index);
      $(button).html('Expand to full size ...').addClass('shorten-pre-button');

      item.setAttribute('id', 'pre-' + index);
      item.appendChild(button);
      item.classList.add('shorten-pre');
   }
};

// onLoad run through all pres and add shorten classes to those that are quite long
window.addEventListener('load', (event) => {
   pres = document.getElementsByTagName('pre');
   for(let i = 0; i < pres.length; i++){ 
      WorkPres(pres[i], i);
   };
});