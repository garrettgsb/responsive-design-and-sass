document.onload = () => {

};

const field = document.getElementsByTagName('input')[0];
field.oninput = event => Array.from(document.getElementsByTagName('p')).forEach(p => { p.textContent = event.target.value; });
