const cityRouter = require( './api/city' ),
			sliderRouter = require( './api/slider' ),
			shopRouter = require( './api/shop' ),
			groupAdRouter = require( './api/group-ad' )

module.exports = app => {
	// api
	app.use( '/api/city', cityRouter )
	app.use( '/api/slider', sliderRouter )
	app.use( '/api/shop', shopRouter )
	app.use( '/api/group-ad', groupAdRouter )
}