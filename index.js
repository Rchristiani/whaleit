const Transform = require('stream').Transform;

class WhaleTransform extends Transform {
	_transform(chunk, enc, next) {
		const string = chunk.toString().replace(/[Ww]hale/ig,"🐳");
		this.push(string);
		next();
	}
}

module.exports = WhaleTransform;