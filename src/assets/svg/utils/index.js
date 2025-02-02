function styleStrToObject(styleStr) {
	const obj = {};
	const s = styleStr
		.toLowerCase()
		.replace(/-(.)/g, (m, g) => g.toUpperCase())
		.replace(/;\s?$/g, '')
		.split(/:|;/g);
	for (let i = 0; i < s.length; i += 2) {
		obj[s[i].replace(/\s/g, '')] = s[i + 1].replace(/^\s+|\s+$/g, '');
	}

	return obj;
}

export default styleStrToObject;
