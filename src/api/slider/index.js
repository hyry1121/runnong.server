const router = require( 'express' ).Router(),
			SliderModle = require( './../../models/slider' ),
			createController = require( './../create-controller' )

const controller = createController( SliderModle )

router.put( '/', controller.update )
router.get( '/', controller.get )

module.exports = router