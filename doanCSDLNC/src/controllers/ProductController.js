const ProductService = require('../services/ProductService')

const createProduct = async(req, res) => {
    try {
        const { name, image, type, price, countInStock, rating} = req.body
        if(name ===null || image ===null  || type ===null  || price===null  || countInStock===null  || rating===null ){
            return res.status(200).json({
                status:'ERR',
                messages:'the input is required'
            })
        } 
        console.log('response', req.body)
        const response = await ProductService.createProduct(req.body)
        
        return res.status(200).json(response)
    }catch(e){
        return res.status(404).json({
           messages: e.message
        })
    }
}
  
const updateProduct = async(req, res) => {
    try {
        const productId = req.params.id
        const data = req.body
        if (!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is required'
            })
        }
        const response = await ProductService.updateProduct(productId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsProduct = async(req, res) => {
    try {
        const productId = req.params.id
        if (!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is required'
            })
        }
        const response = await ProductService.getDetailsProduct(productId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
} 

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id
        if (!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is required'
            })
        }
        const response = await ProductService.deleteProduct(productId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllProduct = async (req, res) => {
    // console.log('req.query', req.query)
    try {
        const { limit, page, sort, filter } = req.query
        const response = await ProductService.getAllProduct( Number(limit) || 8, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllProduct
}