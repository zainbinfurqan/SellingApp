import React, { Component } from "react";

class ProductCard_landscap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CardData: []
    };
  }
  componentDidMount() {
    this.setState({ CardData: this.props.CardData });
  }

  render() {
    return (
      <div
        className="col-sm-12 col-md-12 col-xl-6 col-lg-6"
        style={{ margin: "10px 0px" }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={this.props.CardData.Image_Path}
              className="card-img"
              style={{height:'100%'}}
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.CardData.Name}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. 
              </p>
              <p>
                <span>Location: </span>
                {this.props.CardData.Location}
              </p>
              <p>
                <span>Posting Date:</span> {this.props.CardData.PostingDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductCard_landscap;
