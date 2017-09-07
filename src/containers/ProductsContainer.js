import React, {Component} from 'react';
import {connect} from 'react-redux';

import Products from '../components/products';

class ProductsContainer extends Component {
    render() {
        return (
            <Products products={this.props.products}/>
        );
    }
}

ProductsContainer.propTypes = {};
ProductsContainer.defaultProps = {};

const mapStateToProps = ({products}) => {
    const {catalog} = products;
    return {
        products: catalog.toArray()
    }
};

export default connect(mapStateToProps)(ProductsContainer);
