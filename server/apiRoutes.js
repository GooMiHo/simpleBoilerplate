const router = require('express').Router();

// router.use('/users', require('./users'));

router.get('/', async function(req, res, next){
  //
});

router.post('/', async function(req, res, next){
  //
});

router.get('/:userId', async function(req, res, next){
  // try {
  //   const id = req.params.id;
  //   const campus = await Campus.findOne({where: {id: id}, include: [{model: Student, include: [{all: true}] }] });
  //   res.json(campus);
  // } catch (err) {
  //   next(err);
  // }
});

router.put('/:userId', async function(req, res, next){
  //const id = req.params.userId;
});

router.delete('/userId', async function(res, req, next){
  //const id = req.params.userId;
});

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;

