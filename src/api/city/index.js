const router = require( 'express' ).Router(),
			CityModle = require( './../../models/city' ),
			createController = require( './../create-controller' )

const controller = createController( CityModle )

router.post( '/', controller.add )
router.delete( '/', controller.del )
router.put( '/', controller.update )
router.get( '/', controller.get )

module.exports = router