// build your `/api/projects` router here
const router = require('express').Router()
const helpers = require('./model')


router.get('/', (req,res,next) => {
  helpers.getProject()
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(next)
})

router.use((err,req,res,next) =>{
    res.status(500).json({
        customMessage: 'something went wrong inside the project router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router