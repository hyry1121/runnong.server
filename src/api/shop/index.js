const router = require( 'express' ).Router(),
			ShopModle = require( './../../models/shop' ),
			createController = require( './../create-controller' )

const controller = createController( ShopModle )

router.post( '/', controller.add )
router.delete( '/', controller.del )
router.put( '/', controller.update )
router.get( '/', controller.get )

module.exports = router