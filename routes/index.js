const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const router = express.Router();
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const rootDir = require('../utils/path')
const products = [];

// /addproduct =>get

/**
 * @swagger
 * /addproduct:
 *  get:
 *   description:
 *      Use to request all product
 *   responses:
 *       '200':
 *          description : Success
 */

router.get('/addproduct', (req, res, next) => {
  res.status(200).render('addproduct', { pageTitle: 'Add product' });
  //res.status(200).json({ 'success': '1' });
  //next();   
});

// /admin/addproduct =>post

/**
 * @swagger
 * /addproduct:
 *    post:
 *        description: 
 *          Use to post a new product
 *        responses:
 *            '200':
 *              description: Success     
 */
router.post('/addproduct', (req, res, next) => {
  products.push({ title: req.body.title })
  res.status(302).redirect('/');
})

exports.routes = router;

exports.products=products