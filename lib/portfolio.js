function placeImages(images) {
	let grid = document.querySelector('#grid');
	let imgsArray = [];
	for (let i = 0; i < images.length; i++) {
		let div = document.createElement('div');
		let img = document.createElement('img');
		div.classList.add('item');
		img.src =
			'http://res.cloudinary.com/jonathol/image/upload/c_scale,w_0.4/v' +
			images[i].version +
			'/' +
			images[i].public_id +
			'.' +
			images[i].format;
		div.append(img);
		imgsArray.push(div);
	}
	salvattore.appendElements(grid, imgsArray);

	/*
	let dividedArrays = chunkify(images, 5, false);
	for (let i = 0; i < dividedArrays.length; i++) {
		let column = document.createElement('div');
		column.classList.add('column');
		for (let j = 0; j < dividedArrays[i].length; j++) {
			let img = document.createElement('img');
			img.src =
				'http://res.cloudinary.com/jonathol/image/upload/v' +
				dividedArrays[i][j].version +
				'/' +
				dividedArrays[i][j].public_id +
				'.' +
				dividedArrays[i][j].format;
			column.append(img);
		}
		grid.append(column);*/
}

/*
function chunkify(a, n, balanced) {
	if (n < 2) return [a];

	var len = a.length,
		out = [],
		i = 0,
		size;

	if (len % n === 0) {
		size = Math.floor(len / n);
		while (i < len) {
			out.push(a.slice(i, (i += size)));
		}
	} else if (balanced) {
		while (i < len) {
			size = Math.ceil((len - i) / n--);
			out.push(a.slice(i, (i += size)));
		}
	} else {
		n--;
		size = Math.floor(len / n);
		if (len % size === 0) size--;
		while (i < size * n) {
			out.push(a.slice(i, (i += size)));
		}
		out.push(a.slice(size * n));
	}

	return out;
}*/
