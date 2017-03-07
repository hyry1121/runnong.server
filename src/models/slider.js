const mongoose = require( 'mongoose' )

const slider = {
	link: String,
	img: String,
	show: Boolean
}

const options = {
	collection: 'Slider'
}

const sliderSchema = new mongoose.Schema( slider, options )

module.exports = mongoose.model( 'Slider', sliderSchema )