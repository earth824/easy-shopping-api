exports.getProducts = (req, res) => {
  res.status(200).json({ message: 'Get All Product' });
};

exports.getProduct = (req, res) => {
  res.status(200).json({ message: 'Get Product' });
};

exports.createProduct = (req, res) => {
  res.status(201).json({ message: 'Create Product' });
};

exports.updateProduct = (req, res) => {
  res.status(200).json({ message: 'Update Product' });
};

exports.deleteProduct = (req, res) => {
  res.status(204).json({ message: 'Delete Product' });
};