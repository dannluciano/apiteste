
class ProductsController {
  constructor (Product) {
    this.Product = Product
  }

  async get (req, res) {
    try {
      const products = await this.Product.find({})
      res.send(products)
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

  async getById (req, res) {
    try {
      const { id } = req.params
      const products = await this.Product.findById(id)
      res.send(products)
    } catch (err) {
      res.status(404).send(err.message)
    }
  }
}

export default ProductsController
