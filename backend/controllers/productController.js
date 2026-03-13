import Product from "../models/Product.js";

export const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.json({ message: "product added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};