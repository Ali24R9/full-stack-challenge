const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex()
    }
  }
    // const {error, value} = Joi.validate(req.body, schema)

    // if (error) {
    //   switch (error.details[0].context.key){
    //     case 'email':
    //       res.status(400).send({
    //         error: 'You must provide a valid email address'
    //       })
    //   }
    // } else {
    //   next()
    // }
  // }
}