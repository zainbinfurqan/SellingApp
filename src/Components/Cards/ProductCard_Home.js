import React, { Component } from "react";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import BannerImage from "../../images/Untitled.png";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
// import cardImg from "../../images/Banner_1.jpg";
import './productcard.css'
class ProductCard_Home extends Component {
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
      <Card className="productcard_main">
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          title={this.props.CardData.name}
          // subheader={`Posting Date: ${this.props.CardData.PostingDate}`}
        />
        <CardMedia className="productCard_Img"><img src={this.props.CardData.imgPth} /></CardMedia>
        <CardContent>
          <p>
            <span>Basic Info: </span>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </p>
          <p><span>Location: </span>{this.props.CardData.location}</p>
          <p><span>Posting Date:</span> {this.props.CardData.PostData}</p>
          <p><span>Cell No:</span> {this.props.CardData.cellNo}</p>
        </CardContent>
      </Card>
    );
  }
}
export default ProductCard_Home;
