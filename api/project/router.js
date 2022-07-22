// build your `/api/projects` router here
const router = require('express').Router()


router.get('/api/project', (req,res,next) => {
   console.log('this is a project message')
})

router.use((err,req,res,next) =>{
    res.status(500).json({
        customMessage: 'something went wrong inside the project router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router