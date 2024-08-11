import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);

let sectionData = document.querySelector('.footer-links');
let dataArray = ['whatsapp','linkedin','twitter','insta','facebook'];
// console.log(dataArray.length)
let linkArr = [];
for(let i=0;i<dataArray.length;i++){
  let sectionName=sectionData.getAttribute(`data-${dataArray[i]}`);
linkArr.push(sectionName);
}
console.log(linkArr);



let sectionImages = document.querySelectorAll('.footer-links div picture img');
for(let i=0;i<sectionImages.length;i++){
  let newAnchor = document.createElement('a');
  newAnchor.href=linkArr[i];
  let parent = sectionImages[i].parentNode;  
  parent.replaceChild(newAnchor, sectionImages[i]); 
  newAnchor.appendChild(sectionImages[i]); 
}
let sectionPara=sectionData.querySelectorAll('p')[1];
sectionPara.classList.add('anchors-links')
console.log(sectionPara);
let myName = sectionPara.nextElementSibling;
myName.classList.add('my-name');
}