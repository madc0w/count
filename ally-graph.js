const nodes = [];
initGraph();

function initGraph() {
	newNode('Israel');
	newNode('Palestine');
	newNode('Muslims');
	newNode('Jews');
	newNode('Christian Right');
	newNode('Nazis');
	newNode('US Right');
	newNode('US Left');
	newNode('Hamas');
	newNode('LGBT');

	ally('Israel', 'Jews');
	ally('Israel', 'US Right');
	enemy('Israel', 'Palestine');
	enemy('Israel', 'Hamas');
	enemy('Israel', 'Muslims');

	ally('Palestine', 'Muslims');
	ally('Palestine', 'Hamas');
	ally('Palestine', 'LGBT');
	enemy('Palestine', 'Jews');
	enemy('Palestine', 'US Right');

	ally('Muslims', 'Palestine');
	ally('Muslims', 'Nazis');
	ally('Muslims', 'US Left');
	enemy('Muslims', 'Jews');
	enemy('Muslims', 'Christian Right');
	enemy('Muslims', 'US Right');

	ally('Jews', 'Christian Right');
	ally('Jews', 'US Right');
	ally('Jews', 'Israel');
	enemy('Jews', 'Palestine');
	enemy('Jews', 'Muslims');
	enemy('Jews', 'Nazis');

	ally('Christian Right', 'US Right');
	ally('Christian Right', 'Israel');
	enemy('Christian Right', 'Palestine');
	enemy('Christian Right', 'US Left');
	enemy('Christian Right', 'LGBT');

	ally('Nazis', 'Muslims');
	enemy('Nazis', 'US Left');
	enemy('Nazis', 'LGBT');
	enemy('Nazis', 'Jews');
	enemy('Nazis', 'Israel');

	ally('US Right', 'Christian Right');
	ally('US Right', 'Israel');
	enemy('US Right', 'Palestine');
}

function ally(name1, name2, degree = 0) {
	return link(name1, name2, 'ally', degree);
}

function enemy(name1, name2, degree = 0) {
	return link(name1, name2, 'enemy', degree);
}

function link(name1, name2, type, degree = 0) {
	const existing1 = node(name1).allies.find((n) => n.node.name == name2);
	if (existing1 && existing1.type != type) {
		return existing1;
	}
	const existing2 = node(name2).allies.find((n) => n.node.name == name1);
	if (existing2 && existing2.type != type) {
		return existing2;
	}
	node(name1).links.push({
		degree,
		node: node(name2),
		type,
	});
	node(name2).links.push({
		degree,
		node: node(name1),
		type,
	});
}

function newNode(name) {
	nodes.push({
		name,
		links: [],
	});
}

function node(name) {
	return nodes.find((n) => n.name == name);
}
