const router = require('express').Router();
const { Event } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  Event.findAll({
    include: [{ model: Ingredient }]
  })
    .then(events => res.json(events)
    .catch(next)
});

router.get('/:id', (req, res, next) => {
  Event.findById(req.params.id, {
    include: [{ model: Ingredient }]
  })
    .then(event => res.json(event))
    .catch(next)
});