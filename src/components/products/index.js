import React, {Component} from 'react';


import ProductsList from './ProductsList'

class Products extends Component {
    render() {
        const {products} = this.props;
        return (
            <ProductsList products={products}/>
        );
    }
}

Products.propTypes = {};
Products.defaultProps = {};

export default Products;
