const router = require('express').Router();
const { Event } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  Event.findAll()
    .then(events => res.status(200).json(events))
    .catch(next)
});

router.get('/:id', (req, res, next) => {
  Event.findById(req.params.id)
    .then(event => res.status(200).json(event))
    .catch(next)
});

router.post('/', (req, res, next) => {
  Event.create(req.body)
    .then(event => res.status(201).json(event))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.channelId;
  Event.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
