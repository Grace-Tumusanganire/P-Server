import Property from '../models/propertymodels';
import moment from 'moment';
import cloudinary from 'cloudinary';



const propertiesControllers = {

   async newProperty (req,res) {

        const { price, state, city, address, type, property_status } = req.body;

        const owner = req.user.email;

        const created_on = moment().format();

        const propertyImage = req.files.image.path;

        cloudinary.v2.uploader.upload(propertyImage,  (error, result)=> { 
            console.log(result, error) 
         }
         );
        
            try{
                const property = new Property(state, price, city, address, property_status, 
                    type, owner, created_on, image_url= result);
                property.createProperty()
                const status = 201;
                return res.status(status).json({
                    status, property, message: res.message || 'Property advert created successfully'
                });
            } catch (err) {
                const status = 400;
                return res.status(status).json({
                    status,
                    message: err.message || 'Missing parameters'
                });
            }

    },


}

  export default propertiesControllers;


    
                 

    
    




























    
