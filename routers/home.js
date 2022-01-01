const express = require('express')
const router = express.Router()
const detail = require('../models/Personal_details')
const portfolio = require('../models/portfolio')
const education = require('../models/education')

router.get('/', async (req,res)=>{
    try{
        const para_detail = await detail.findOne();
        const para_portfolio = await portfolio.find();
        const para_education = await education.find();
        res.render('home_page/home',{para_detail:para_detail,para_education:para_education,para_portfolio:para_portfolio})
    }catch(err){
        res.send('error' + err)
    }
})

module.exports = router