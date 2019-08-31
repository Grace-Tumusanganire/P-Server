const propertymodels = require('../models/propertymodels');
const Joi = require('joi');
const express = require('express');
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

const propertiesControllers = {

   async newProperty (res,req) {

        const { price, state, city, address, type } = req.body;

        if (!req.files.image) {
            return res.status(400).send ({message:'image required'});
        }
        const propertyImage = req.files.image.path;
        const newProperty = {
            price,
            state,
            city,
            address,
            type,
            owner: req.user.id,
            status: 'available',
            created_on: moment().format(),
            image_url: result.url
        };
            
        }
    
    




























    }
