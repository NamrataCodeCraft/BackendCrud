const userModel = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const createUser = async function (req, res) {
    try {
        const data = req.body
        const created = await userModel.create(data)
        return res.status(201).send({ status: true, msg: created })

    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}
const  login = async function (req, res) {
    try {
        const { email, password } = req.body

        if (!email) return res.status(400).send({ msg: 'email requierd' })
        if (!password) return res.status(400).send({ msg: 'password requierd' })

        let user = await userModel.findOne({ email });

        if (!user) return res.status(404).send({ msg: 'user not found' })

        if (user.password !== password) return res.status(400).send({ msg: 'password ' })

        let token = jwt.sign({_id : user._id},'namratais')
        
        return res.status(200).send({msg:"login",token})

    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}
const userUpdate = async function (req, res) {
    try {
       
        const id = req.params.id

        await userModel.findByIdAndUpdate({_id , id},req.body)
        
        return res.status(200).send({msg:"Update!",})

    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

module.exports = { createUser, login ,userUpdate }