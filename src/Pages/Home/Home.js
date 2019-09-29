import React, { Component } from "react";
import "./home.css";
import ProductCard from "../../Components/Cards/ProductCard_Home.js";
// import BannerImage from "../../images/Banner_1.jpg";
// import Untitled from "../../images/Untitled.png";
import banner_1 from "../../images/Banner-1.jpg";
import banner_2 from "../../images/banner-2.jpg";
import banner_3 from "../../images/banner-3.png";
import gridview from "../../images/grid_view_icon.png";
import boxview from "../../images/land_view_icon.png";
import { Link, Switch, Route, Router } from "react-router-dom";
// import { product } from "../../ConstantData/HomeData.js";
import ProductCard_landscap from "../../Components/Cards/ProductCard_landscap.js";
import Uploadimag from "../../Components/UpdateImage/UploadImag.js";
import firebase from "../../firebase";
// import Slider from './Slider.js'
const storage = firebase.storage().ref();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      loginKey: true,
      uploadimagpanelFlag: false,
      abc: ""
    };
  }
  componentDidMount() {
    let { product } = this.state;

    // var abc =
    // this.setState({ product: this.fetchdata() });
    // console.log(abc);
    // console.log(this.fetchdata());
    // setTimeout(()=> {
    //   this.fetchdata();
    // console.log(this.fetchdata());

    // }, 5000);

    this.fetchdata();
  }

  fetchdata = () => {
    let { product } = this.state;
    console.log("abc");
    var abc = [];
    firebase
      .database()
      .ref(`/AuthUser/UserProducts/`)
      .on("value", snapshot => {
        if (snapshot && snapshot.exists()) {
          snapshot.forEach(function(childSnapshot) {
            abc.push(childSnapshot.val());
          });

          this.setState({ product: abc });
        }
      });

    // firebase
    //   .database()
    //   .ref("/AuthUser/UserProducts/")
    //   .once("value", function(snapshot) {
    //     snapshot.forEach(function(childSnapshot) {
    //       var childKey = childSnapshot.key;
    //       var childData = childSnapshot.val();
    //       // let xyz = {
    //       //   location: childData.location,
    //       //   name: childData.name,
    //       //   startbid: childData.startbid
    //       // };
    //       let xyz = {
    //         // childData:childSnapshot.val()
    //       };
    //       // console.log(childData);
    //       abc.push(childData);
    //       // ...
    //       // console.log(childData);
    //     });
    //   });
    return abc;
  };

  openUploadImagehandle = () => {
    // console.log("abc");
    this.setState({ uploadimagpanelFlag: true });
  };

  closeUploadImaghanle = () => {
    this.setState({ uploadimagpanelFlag: false });
    setTimeout(() => {
      this.fetchdata();
    }, 1000);
  };

  render() {
    let { uploadimagpanelFlag, product } = this.state;
    // console.log(product);

    return (
      <div>
        <div id="slider">
          <figure>
            <img src={banner_1} />
            <img src={banner_2} />
            <img src={banner_3} />
          </figure>
        </div>
        {/* <Slider/> */}

        <div
          style={{
            height: "49px",
            margin: "9px 0px 0px 0px",
            textAlign: "right"
          }}
        >
          <div className="search_textbox">
            <div className="input-container">
              <i className="fa fa-search icon"></i>
              <input className="input-field" type="text" placeholder="search" />
            </div>
            {/* <button className="btn"> */}
            <div className="search_btn">
              Search
              </div>
              {/* </button> */}
          </div>
        </div>
        <div
          style={{
            height: "49px",
            padding: "0px 10px",
            margin: "9px 0px 0px 0px",
            textAlign: "left"
          }}
        >
          <div className="dropdown dropdown_home">
            {/* <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Category
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Cars
              </a>
              <a class="dropdown-item" href="#">
                Moter Bikes
              </a>
              <a class="dropdown-item" href="#">
                Mobiles
              </a>
            </div> */}
          </div>
          <div className="change_view">
            <img src={gridview} />
            <img src={boxview} />
          </div>
          <div className="sell_item" onClick={this.openUploadImagehandle}>
            {/* <button
              type="button"
              className="btn"
              onClick={this.openUploadImagehandle}
            > */}
              Sell?
            {/* </button> */}
          </div>
        </div>
        <div></div>
        <div className="row card_main_div">
          {this.state.product.map((items, index) => {
            return (
              <div
                className="col-sm-12 col-md-4 col-lg-3 col-xl-3 product_card_col"
                key={index}
              >
                {this.state.loginKey == true ? (
                  <Link
                    to={{
                      pathname: "/Product-view",
                      state: {
                        items
                      }
                    }}
                  >
                    <ProductCard CardData={items} />
                  </Link>
                ) : (
                  <ProductCard CardData={items} />
                )}
              </div>
            );
          })}
        </div>
        {/* <div className="row card_main_div">
          {this.state.product.map(items => {
            return (
              // <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3 product_card_col">
              this.state.loginKey == true ? (
                <Link
                  to={{
                    pathname: "/Product-view",
                    state: {
                      items
                    }
                  }}
                >
                  <ProductCard_landscap CardData={items} />
                </Link>
              ) : (
                <ProductCard_landscap CardData={items} />
              )
            );
          })}
        </div>
         */}
        {uploadimagpanelFlag && (
          <Uploadimag
            open={uploadimagpanelFlag}
            close={this.closeUploadImaghanle}
          />
        )}
      </div>
    );
  }
}
export default Home;
