const nodes = [];
initGraph();

for (let degree = 1; degree < 4; degree++) {
	console.log(`degree ${degree} contradictions:`);
	for (const node1 of nodes) {
		for (const link1 of node1.links) {
			const node2 = link1.node;
			for (const link2 of node2.links) {
				const node3 = link2.node;
				const node1node3Link = findLink(node1, node3);
				if (node1node3Link) {
					if (
						(link1.type == link2.type && node1node3Link.type == 'enemy') ||
						(link1.type != link2.type && node1node3Link.type == 'ally')
					) {
						console.log(
							`${node1.name} is ${link1.type} of ${node2.name}, who is ${link2.type} of ${node3.name}, but ${node1.name} is ${node1node3Link.degree}-degree ${node1node3Link.type} of ${node3.name}`
						);
					}
				}
			}
		}
	}

	for (const node1 of nodes) {
		for (const link1 of node1.links) {
			const node2 = link1.node;
			for (const link2 of node2.links) {
				const node3 = link2.node;
				const node1node3Link = findLink(node1, node3);
				if (!node1node3Link) {
					const type = link1.type == link2.type ? 'ally' : 'enemy';
					const existingLink = link(node1.name, node3.name, type, degree, [
						link1,
						link2,
					]);
					if (existingLink && existingLink.type != type) {
						console.log(
							`*** failed to create ${type} link between ${node1.name} and ${node3.name} because of existing ${existingLink.type} link`
						);
					}
				}
			}
		}
	}
	console.log('====================');
}

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
	newNode('Marxists');

	ally('Israel', 'Jews');
	ally('Israel', 'US Right');
	enemy('Israel', 'Palestine');
	enemy('Israel', 'Hamas');
	enemy('Israel', 'Muslims');

	ally('Palestine', 'Muslims');
	ally('Palestine', 'Hamas');
	ally('Palestine', 'LGBT');
	ally('Palestine', 'Marxists');
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
	enemy('Christian Right', 'Marxists');

	ally('Nazis', 'Muslims');
	enemy('Nazis', 'US Left');
	enemy('Nazis', 'LGBT');
	enemy('Nazis', 'Jews');
	enemy('Nazis', 'Israel');
	enemy('Nazis', 'Marxists');

	ally('US Right', 'Christian Right');
	ally('US Right', 'Israel');
	enemy('US Right', 'Palestine');
	enemy('US Right', 'Marxists');
}

function ally(name1, name2, degree = 0) {
	return link(name1, name2, 'ally', degree);
}

function enemy(name1, name2, degree = 0) {
	return link(name1, name2, 'enemy', degree);
}

function link(name1, name2, type, degree = 0, cause) {
	const node1 = node(name1);
	const node2 = node(name2);
	if (!node1 || !node2) {
		return;
	}
	const existing1 = findLink(node1, node2);
	if (existing1 && existing1.type != type) {
		return existing1;
	}
	const existing2 = findLink(node2, node1);
	if (existing2 && existing2.type != type) {
		return existing2;
	}
	node1.links.push({
		degree,
		node: node2,
		type,
		cause,
	});
	node2.links.push({
		degree,
		node: node1,
		type,
		cause,
	});
}

function findLink(node1, node2) {
	return node1.links.find((l) => l.node == node2);
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
