import { Router } from 'express';

const router = Router();

/**
 * Product
 */
router.get('/product', (req, res) => {
  res.send({ message: 'products' });
});

router.get('/product/:id', () => {});

router.post('/product', () => {});

router.put('/product/:id', () => {});

router.delete('/product/:id', () => {});

/**
 * Update
 */
router.get('/update', (req, res) => {});

router.get('/update/:id', (req, res) => {});

router.post('/update', (req, res) => {});

router.put('/update/:id', (req, res) => {});

router.delete('/update/:id', (req, res) => {});

/**
 * UpdatePoint
 */
router.get('/updatepoint', (req, res) => {});

router.get('/updatepoint/:id', (req, res) => {});

router.post('/updatepoint', (req, res) => {});

router.put('/updatepoint/:id', (req, res) => {});

router.delete('/updatepoint/:id', (req, res) => {});

export default router;
