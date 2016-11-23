let products = require('./products');

let h = require('virtual-dom/h');
let diff = require('virtual-dom/diff');
let patch = require('virtual-dom/patch');
let createElement = require('virtual-dom/create-element');

function render(product) {
	return h('div', product.price);
}

let tree = render(products[1]);
let rootNode = createElement(tree);
document.querySelector('.main-content').appendChild(rootNode);

function update(id) {
	let newTree = render(products[id]);
	let patches = diff(tree, newTree);
	rootNode = patch(rootNode, patches);
	tree = newTree;
}

let lis = document.querySelector('.products').querySelectorAll('li');
console.log(lis.length);
for (let i = 0; i < lis.length; i++) {
    console.log('i',i);
    console.log(lis[i]);
    lis[i].addEventListener('click', (e) => update(i+1));
}
