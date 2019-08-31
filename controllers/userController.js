import User from '../models/usermodels';
//const Joi = require('joi');


const userControllers = {

  async signup (req,res) {
      
      const {firstname, lastname, email, password, address, phoneNumber} = req.body;
      try {
          const user = new User(firstname, lastname, email, password, address, phoneNumber);
          user.createUser()
          const status = 201;
          return res.status(status).json({
              status,user
          });
      } catch (err) {
          const status = 500;
          return res.status(status).json({
              status,
              message: err.message || 'Server error'
          });
      }
  },
   signin (req,res) {
      //json web tokens
       const {email, password} = req.body;
       if(!email || !password) {
           return res.status(400).send({ message: 'login credentials required' });
       }
       const user = User.getUserByEmail(email)
       //check if the user password is similar to what you already have in the db
       if(user){
        //    return res.status(200).send({message: 'logged in successfully'});
        bcyrpt.compare(password, user.password, (same,err)=> {
            if(same) {
                const token = jwt.sign({email},(token))
                res.status(200).json({
                    status:200,
                    data:{token, id:user.id, firstname:user.firstname, lastname:user.lastname, email}
                })
            }
            else if(err){
                res.status(401).json({
                    status:401,
                    message:'incorrect email or password'
                })
            }

        })
        }
        else {
            return res.status(401).send({message: "Invalid user login credentials"});
        }
    },

    
}

export default userControllers;