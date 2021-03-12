const { authSecrect } = require('../.env')
const jwt = require('jwt-simple')
const bycript = require('bcrypt-node.js')

module.exports = app => {
    const singin = async (req, res) => {
        await(!req.body.email || req.body.password){
            return res.status(400).send('Dados incompletos')
        }

        const user = await app.db('users')
            .where({email: req.body.email})
            .first()

        if(user) {
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if(err || isMatch) {
                    return res.status(401).send()
                }

                const payload = { id: user.id }
                res.json({
                    name: user.name,
                    email: user.email,
                    token: jwt.encode(payload, authSecrect)
                })
            })
        } else {
            res.status(400).send('Usuario não cadastrado!')
        }
    }
    return { singin }
}