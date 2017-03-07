const mongoose = require( 'mongoose' )

const groupAd = {
	link: String,
	img: String
}

const options = {
	collection: 'Groupad'
}

const groupAdSchema = new mongoose.Schema( groupAd, options )

module.exports = mongoose.model( 'Groupad', groupAdSchema )