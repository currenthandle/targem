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
document.body.appendChild(rootNode);

function update(id) {
	let newTree = render(products[i]);
	let patches = diff(tree, newTree);
	rootNode = patch(rootNode, patches);
	tree = newTree;
}
