/* 1. a <p> with red text that says “Hey I’m red!” */
const paragraphred = document.createElement('p');
paragraphred.textContent = 'Hey Im red!';
paragraphred.style.cssText = 'color: red';
document.querySelector('.content').appendChild(paragraphred);

/* an <h3> with blue text that says “I’m a blue h3!” */
const header3 = document.createElement ('h3');
header3.textContent = 'Im a blue h3!';
header3.style.cssText = 'color: blue';
document.querySelector('.content').appendChild(header3);

/* a <div> with a black border and pink background color with the following elements inside of it: */
const divEx = document.createElement ('div');
divEx.setAttribute = ('style', 'border: 1px black; background: pink');

  /* another <h1> that says “I’m in a div” */
  const header1 = document.createElement ('h1');
  header1.textContent = 'Im in a div';
  

  /* a <p> that says “ME TOO!” */
  const paragraph2 = document.createElement('p');
  paragraph2.textContent = 'ME TOO!';

/* Hint: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container. */
divEx.appendChild(header1);
divEx.appendChild(paragraph2);
document.querySelector('.content').appendChild(divEx);
