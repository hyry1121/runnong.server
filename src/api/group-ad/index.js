const router = require( 'express' ).Router(),
			GroupAd = require( './../../models/group-ad' ),
			createController = require( './../create-controller' )

const controller = createController( GroupAd )

router.put( '/', controller.update )
router.get( '/', controller.get )

module.exports = router