import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
// import axios from 'axios'
// import products from '../products'

import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

function HomeSreen() {
    // const [products, setProducts] = useState([])

    const dispatch = useDispatch()
    const productList  = useSelector(state => state.productList)
    const { error, loading, products} = productList

    useEffect(() => {
        dispatch(listProducts())

    }, [dispatch])
    
    return (
        <div>
            <h1>Latest Products</h1>
            {loading ? <h>Loading...</h>
                : error ? <h3>{error}</h3>
                :   <Row>
                        {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                        ))}
                    </Row>
            }
            
        </div>
    )
}

export default HomeSreen
