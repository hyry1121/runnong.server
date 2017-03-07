function handleRes( err, res, doc ) {
	if( err ) {
		res.send({
			success: false,
			error: err
		})
		return console.error( err )
	}
	res.send({
		success: true,
		result: doc
	})
}

module.exports = Modle => {
	const controller = {}

	controller.add = ( req, res ) => {
		Modle.create( req.body, (err, doc) => {
			handleRes( err, res, doc )
		})
	}

	controller.del = ( req, res ) => {
		Modle.findByIdAndRemove( req.body._id, (err, doc) => {
			handleRes( err, res, doc )
		})
	}

	controller.update = ( req, res ) => {
		Modle.findByIdAndUpdate( req.body._id, req.body, (err, doc) => {
			handleRes( err, res, doc )
		})
	}

	controller.get = ( req, res ) => {
		Modle.find().exec( (err,doc) => {
			handleRes( err, res, doc )
		})
	}

	return controller
}