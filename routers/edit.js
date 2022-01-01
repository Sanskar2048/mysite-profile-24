const express = require('express')
const router = express.Router()
const detail = require('../models/Personal_details')
const portfolio = require('../models/portfolio')
const education = require('../models/education')

router.get('/', async (req, res) => {
    try {
        res.render('edit/edit_page')
    } catch (err) {
        res.send('error' + err)
    }
})


// about
router.get('/about', async (req, res) => {
    try {
        const d = await detail.findOne()
        var param = null
        if (d == null) res.render('edit/about', { param: param })
        else {
            param = {
                first_name: d.first_name,
                last_name: d.last_name,
                dob: d.dob,
                gender: d.gender,
                contact: d.contact,
                email: d.email,
                cv: d.cv,
                photo: d.photo,
                status: d.status,
                position: d.position
            }
            await d.remove()
            res.render('edit/about', { param: param })
        }
    } catch (err) {
        res.send('error' + err)
    }
})

router.post('/about', async (req, res) => {
    const detail_json = new detail({
        first_name: req.body.fname,
        last_name: req.body.lname,
        dob: req.body.date_of_birth,
        gender: req.body.gender,
        contact: req.body.phone,
        email: req.body.email,
        cv: req.body.cv,
        photo: req.body.photo,
        status: req.body.status,
        position: req.body.position
    })
    try {
        await detail_json.save()
        res.render('success')
    } catch (err) {
        res.send('error' + err)
    }
})

//portfolio
router.get('/portfolio', async (req, res) => {
    try {
        const param = await portfolio.find()
        res.render('edit/portfolio',{param : param})
    } catch (err) {
        res.send('error' + err)
    }
})

router.get('/portfolio/delete/:id', async (req, res) => {
    try{
        const param = await portfolio.findById(req.params.id)
        await param.remove()
        res.redirect('/edit/portfolio')
    } catch (err) {
        res.send('error' + err)
    }
})

router.get('/portfolio/new', async (req, res) => {
    try {
        res.render('edit/portfolio_new')
    } catch (err) {
        res.send('error' + err)
    }
})

router.post('/portfolio/new', async (req, res) => {
    const port = new portfolio({
        title: req.body.title,
        description: req.body.description,
        pic: req.body.pic,
        link: req.body.link
    })
    try {
        await port.save()
        res.render('success')
    } catch (err) {
        res.send('error' + err)
    }
})

//education
router.get('/education', async (req, res) => {
    try {
        const param = await education.find()
        res.render('edit/education',{param : param})
    } catch (err) {
        res.send('error' + err)
    }
})

router.get('/education/new', async (req, res) => {
    try {
        res.render('edit/education_new')
    } catch (err) {
        res.send('error' + err)
    }
})

router.post('/education/new', async (req, res) => {
    const port = new education({
        title: req.body.title,
        description: req.body.description,
        year: req.body.year,
        link: req.body.link
    })
    try {
        await port.save()
        res.render('success')
    } catch (err) {
        res.send('error' + err)
    }
})

router.get('/education/delete/:id', async (req, res) => {
    try{
        const param = await education.findById(req.params.id)
        await param.remove()
        res.redirect('/edit/education')
    } catch (err) {
        res.send('error' + err)
    }
})

module.exports = router