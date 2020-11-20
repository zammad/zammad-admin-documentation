/* Custom overrides */
/* No oversized <pre>, please - Thanks to @TJemxx */

function onLoadRunner(){
  calculatePres();
  addOnClick();
}

// Function to fire (re)-calculation for <pre> elements
function calculatePres(){
  const pres = document.getElementsByTagName('pre');
  for(let i = 0; i < pres.length; i++){ 
    workPres(pres[i], i);
  };
}

// Update <pre> elements
function workPres(item, index) {
  const size = 250;

  if ( !document.getElementById(item) ){
    item.setAttribute('id', 'pre-' + index);
  }

  if( item.clientHeight > size ){
    
    if ( !document.getElementById('button-' + item) ){
      const button = document.createElement('button');
      button.setAttribute('onclick', 'shortPre(' + index + ')');
      button.setAttribute('id', 'button-pre-' + index);
      $(button).html('Expand to full size ...').addClass('shorten-pre-button');    
      item.appendChild(button);
    }
    
    item.classList.add('shorten-pre');
  }
};

function shortPre(i) {
  const attr = 'pre-' + i;
  const pre = document.getElementById(attr);
  const button = document.getElementById('button-' + attr);

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

function addOnClick(){
  // Find all possible tabs to add onClick actions
  const tabs = document.getElementsByTagName('a');
  for(let i = 0; i < tabs.length; i++){ 
    if ( tabs[i].hasAttribute('data-tab') ){
      workTabs(tabs[i]);
    }
  };
}

// Provide all tabs with onClick action
function workTabs(item) {
  item.setAttribute('onclick', 'calculatePres()');
}

// onLoad run through all pres and add shorten classes to those that are quite long
window.addEventListener('load', onLoadRunner, false);
