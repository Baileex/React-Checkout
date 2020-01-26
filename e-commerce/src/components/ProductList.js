import React, { Component } from "react";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";
import Product from "./Product"

class ProductList extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name="Our" title="Products" />

              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map(product => {
                      return <Product key={product.id} product={product}/>
                    })
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>
        <h3>Hello from Product List</h3>
      </div>
    );
  }
}

export default ProductList;
