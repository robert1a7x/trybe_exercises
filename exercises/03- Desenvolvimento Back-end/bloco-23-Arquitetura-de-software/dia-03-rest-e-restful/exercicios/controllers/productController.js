const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res, next) => {
  const products = await ProductModel.getAll();

	if (!products) return res.status(400).json([])

   return res.status(200).json(products);
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

	if (!product) return res.status(404).json({ message: 'Product not found' })

  return res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;
	
	try {
		const newProduct = await ProductModel.add(name, brand);

  	return res.status(201).json(newProduct);
	} catch (error) {
		return res.status(500).json({ message: 'Algo deu errado' })
	}

  
});

router.delete('/:id', async (req, res) => {
	try {
		const products = await ProductModel.exclude(req.params.id);
		return res.status(200).json(products);
	} catch (error) {
		return res.status(500).json({ message: 'Algo deu errado' })
	}

});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

	try {
		const products = await ProductModel.update(req.params.id, name, brand);
	
		return res.status(200).json(products);
	} catch (error) {
		return res.status(500).json({ message: 'Algo deu errado' })
	}
});

module.exports = router;