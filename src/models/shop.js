const mongoose = require( 'mongoose' )

const shop = {
	name: String,
	address: {
		city: String,
		district: String,
		detail: String
	},
	link: String,
	logo: String,
	tel: String,
	desc: String,
	postage: Number,  // 配送价
	priceBeforePost: Number,  // 起送价
	star: Number,
	show: Boolean,
	recommend: Boolean,
	rank: Number,
	openTime: String
}

const options = {
	collection: 'Shop'
}

const shopSchema = new mongoose.Schema( shop, options )

module.exports = mongoose.model( 'Shop', shopSchema )