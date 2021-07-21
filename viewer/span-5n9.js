/*
 * span-5n9.js
 *
 * Simple implementation of `baseTree_t` intended for web viewing
 */

/*
 *	This file is part of Untangle, Transforming binary systems.
 *	Copyright (C) 2017, xyzzy@rockingship.net
 *
 *	This program is free software: you can redistribute it and/or modify
 *	it under the terms of the GNU General Public License as published by
 *	the Free Software Foundation, either version 3 of the License, or
 *	(at your option) any later version.
 *
 *	This program is distributed in the hope that it will be useful,
 *	but WITHOUT ANY WARRANTY; without even the implied warranty of
 *	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *	GNU General Public License for more details.
 *
 *	You should have received a copy of the GNU General Public License
 *	along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function UI() {

	const elem = document.getElementById('3d-graph');

	this.Graph = ForceGraph3D()(elem)
		.backgroundColor('#ddd')
		.linkColor(link => link.color ? link.color : '#444' )
		.linkDirectionalArrowColor(link => link.hcolor ? link.hcolor : '#aaa' )
		.linkDirectionalArrowLength(3.5)
		.linkDirectionalArrowRelPos(1)
		// .linkCurvature(0.25)

		.linkWidth(2)
		.linkDirectionalParticles(link => link.len ? 15 : 0)
		.linkDirectionalParticleSpeed(0.002)
		.linkDirectionalParticleColor("#f0f")
		.linkDirectionalParticleWidth(4)

		.nodeRelSize(1)
		.nodeVal('size')
		.nodeAutoColorBy('label')
		.nodeLabel(node => `${node.label}: ${node.description}`)
		.onNodeHover(node => elem.style.cursor = node ? 'pointer' : null);

}

window.addEventListener('load', function () {

	let ui = new UI();

	ui.Graph.jsonUrl('span-5n9.json');

});
