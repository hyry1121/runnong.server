const mongoose = require( 'mongoose' )

const city = {
	name: String,
	districts: String
}

const options = {
	collection: 'City'
}

const citySchema = new mongoose.Schema( city, options )

module.exports = mongoose.model( 'City', citySchema )