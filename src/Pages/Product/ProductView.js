import React, { Component } from "react";

import './productview.css'
class ProductView extends Component {
  render() {
    // console.log(this.props.location.state.items);
    console.log();
    
    return (
      <div className="row" style={{width:'100%',margin:'0px'}}>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 product_img_col">
          <div className="Product_Img">
            {/* <h2>Product Image</h2> */}
            <img src={this.props.location.state.items.imgPth} />
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 product_detail_col">
          <div className="Product_Details">
            <h2>Product Details</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductView;
