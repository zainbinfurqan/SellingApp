import React, { useState, useEffect } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import firebase from "firebase";
import "./adminhome.css";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";

import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function AdminHome() {
  let [State, setProductData] = useState({
    product: []
  });
  let [State_, setImg] = useState({
    imagePanel: false,
    Image_Path: ""
  });
  let [_State_, setindex] = useState({
    index: -1
  });
  let [State__, setExpended] = useState({
    expanded: -1,
    expendflag:false
  });
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    let { product } = State;
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

          setProductData({ product: abc });
        }
      });
  }

  function openImagPanel(value) {
    console.log(value);
    setImg({ imagePanel: true, Image_Path: value });
    fetchData();
  }

  function openPanel(value) {
    setindex({ index: value });
  }

  function handleClose() {
    setImg({ imagePanel: false });
  }

  function handleOpenExpend(value) {
    if(State__.expendflag == true){
      setExpended({ expanded: -1 });
      console.log("1")
    }else{
      setExpended({ expanded: value,expendflag:true });
      console.log("2")

    }
  }
  // console.log(State.product)

  return (
    <div className="row" style={{ margin: "0px", width: "100%" }}>
      {State.product.map((items_1, index_1) => {
        return (
          <ExpansionPanel
            className="adminCard_details"
            // style={{  }}
            expanded={State__.expanded === index_1}
            onChange={() => handleOpenExpend(index_1)}
          >
            <ExpansionPanelSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <p>Product Details</p>
            </ExpansionPanelSummary>
            <div className="cardContentActive">
            <p>
                  <span>Name: </span>
                  {items_1.name}
                </p>
                <p>
                  <span>Location: </span>
                  {items_1.location}
                </p>
                <p>
                  <span>Posting Date:</span> {items_1.PostData}
                </p>
                <p>
                  <span>Cell No:</span> {items_1.cellNo}
                </p>
                <p
                  className="adminCardbtn"
                  onClick={() => openImagPanel(items_1.imgPth)}
                >
                  View Image
                </p>
                <p className="adminCarddeletebtn">Delete</p>
            </div>
          </ExpansionPanel>
        );
      })}
      {/* {State.product.map((items, index) => {
        return (
          <div className="col-sm-12 col-md-4 col-lg-3 colxl-3 detail_panel">
            <div
              className={`${
                _State_.index == index
                  ? "admin-product-cards-active"
                  : "admin-product-cards"
              }`}
              onClick={() => openPanel(index)}
            >
              <div
                className={`${
                  _State_.index == index ? "cardContentActive" : "cardContent"
                }`}
              >
                <p>
                  <span>Name: </span>
                  {items.name}
                </p>
                <p>
                  <span>Location: </span>
                  {items.location}
                </p>
                <p>
                  <span>Posting Date:</span> {items.PostData}
                </p>
                <p>
                  <span>Cell No:</span> {items.cellNo}
                </p>
                <p
                  className="adminCardbtn"
                  onClick={() => openImagPanel(items.imgPth)}
                >
                  View Image
                </p>
                <p className="adminCarddeletebtn">Delete</p>
              </div>
            </div>
          </div>
        );
      })} */}

      <Dialog
        open={State_.imagePanel}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <img
              src={State_.Image_Path}
              style={{ width: "100%", height: "100%" }}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AdminHome;
