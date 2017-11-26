const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const Model = require('../../database/index.js').User;
const router = express.Router();

router.get('/', (req, res, next) => {

});

router.post('/', (req, res, next) => {
	let data = {
		budget: req.body.budget,
		tripLocation: req.body.location,
		startDate: req.body.startDate,
		endDate: req.body.endDate,
		username: req.body.user
	}
	console.log('User Trip Data', data);

	var user = Model;

	user.findOne({ username: data.username }, (err, doc) => {
		if (err) console.log(err);
		console.log('Document Trips', doc.trips);
		doc.trips.input_budget = data.budget;
		doc.trips.location = data.tripLocation;
		doc.trips.start_date = data.startDate;
		doc.trips.end_date = data.endDate;

		doc.save((err, data) => {
			if (err) console.log('document saving error', err);
			console.log('data SAVED!!', data);
		})
	});
	// user.save((err, user) => {
	// 	if (err) { console.log(err) }
	// 	else { console.log(user) }
	// })

	// res.send(data);
});

module.exports.searchData = router;