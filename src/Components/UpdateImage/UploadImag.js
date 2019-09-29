
import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// import { storage } from "../../Firebase";
import firebase from "firebase/app";
import TextField from "@material-ui/core/TextField";
import firebasea from "firebase";
import * as moment from "moment";
// import React, { useState, useEffect } from "react";
// import Dialog from "@material-ui/core/Dialog";
// // import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// // import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import { storage } from "../../Firebase";
// import firebase from "firebase/app";
// import TextField from "@material-ui/core/TextField";
// import firebasea from "firebase";
// import * as moment from "moment";
// // import mailgun from "mailgun-js";
// import "./uploadimag.css";
// import { stat } from "fs";
export default function UploadImage(props) {
  let [openUpdaloadImageDialog, setopenUpdaloadImageDialog] = useState(false);
  let [image, setOpenFlag] = useState(false);
  let [url, setimage] = useState(null);
  let [state, setTxt] = useState({
    openUpdaloadImageDialog: false,
    image: null,
    url: "",
    name: "",
    location: "",
    number: "",
    email: "",
    discription: "",
    startbid: "",
    FieldError: "",
    PinCode: ""
  });

  //------close  product panel
  function closeUplaodImage() {
    props.close();
  }

  //---------- image check handle
  function uploadHandleChange(e) {
    if (e.target.files) {
      let image = e.target.files;
      var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      if (!allowedExtensions.exec(e.target.value)) {
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        alert(
          "Please upload file having extensions .jpeg/.jpg/.png/.gif only."
        );
      } else {
        setTxt({
          ...state,
          image: image
        });
      }
    }
  }

  //  upload product handle chnage
  function handlUploadImgBtn() {
    let { name, location, number, email, discription, startbid } = state;
    var imagepath;
    console.log("1");
    if (
      state.name.trim().length === 0 ||
      state.location.trim().length === 0 ||
      state.number.trim().length === 0 ||
      state.discription.trim().length === 0 ||
      state.startbid.trim().length === 0
    ) {
      setTxt({
        ...state,
        FieldError: "Fields Must Not Be Empty"
      });
    } else {
      var storageRef = firebase.storage().ref();
      console.log("1");

      console.log(state.image[0].name);
      // let uniqImagCode = Math.floor(Math.random() * 10);
      // for (let a = 0; a < state.image.length; a++) {
      // console.log(image[a].name)
      let uploadTask = storageRef
        .child(`images/${state.image[0].name}`)
        .put(state.image[0]);
      uploadTask.on(
        "state_changed",
        snapshot => {
          // progrss function ....
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is" + progress + "% done");
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              // console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              // console.log("Upload is running");
              break;
          }
        },
        error => {
          // error function ....
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;

            case "storage/canceled":
              // User canceled the upload
              break;

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // complete function ....
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            imagepath = downloadURL;
            console.log("File available at", downloadURL);
            var database = firebasea
              .database()
              .ref()
              .child("/AuthUser/UserProducts/");
            database.push({
              name: state.name,
              location: state.location,
              startbid: state.startbid,
              cellNo: state.number,
              PostData: moment().format("YYYY-MM-DD"),
              imgPth: `${imagepath}`
            });
          });
          closeUplaodImage();
        }
      );
      // }

      // console.log(imagepath);
    }
  }

  useEffect(() => {
    setopenUpdaloadImageDialog((openUpdaloadImageDialog = props.open));
  }, []);

  function changeTxtHandle(e, key) {
    // console.log(e, key);

    setTxt({
      ...state,
      [key]: e.target.value
    });
  }

  return (
    <div>
      {console.log(state.image)}
      <Dialog
        open={openUpdaloadImageDialog}
        //   onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p onClick={closeUplaodImage} style={{ width: "fit-content" }}>
            Close
          </p>
        </DialogTitle>
        <DialogContent style={{ padding: "0px", margin: "0px" }}>
          {/* <DialogContentText id="alert-dialog-description"> */}
          <TextField
            className="login_txtbox"
            placeholder="Full Name"
            margin="normal"
            value={state.name}
            onChange={e => changeTxtHandle(e, "name")}
          />
          <TextField
            className="login_txtbox"
            placeholder="location"
            margin="normal"
            value={state.location}
            onChange={e => changeTxtHandle(e, "location")}
          />
          <TextField
            className="login_txtbox"
            value={state.discription}
            onChange={e => changeTxtHandle(e, "discription")}
            multiline
            rowsMax="4"
            placeholder="Discription"
            margin="normal"
          />
          <TextField
            className="login_txtbox"
            value={state.number}
            onChange={e => changeTxtHandle(e, "number")}
            placeholder="Cell No"
            margin="normal"
          />
          <TextField
            className="login_txtbox"
            placeholder="Starting Bit"
            margin="normal"
            value={state.startbid}
            onChange={e => changeTxtHandle(e, "startbid")}
          />{" "}
          {/* <div>
            <TextField
              className="login_txtbox"
              placeholder="Pin Code"
              margin="normal"
              value={state.startbid}
              onChange={e => this.changeTxtHandle(e, "PinCode")}
            />
            <div className="pincode_btn" onClick={this.sendCode}>
              Send Code
            </div>
          </div> */}
          <div style={{ margin: "0px 0px 20px 10px" }}>
            <input type="file" multiple onChange={uploadHandleChange} />
            <p>
              After submit your product the post will be delete after 15 days
            </p>
            <button type="button" className="btn" onClick={handlUploadImgBtn}>
              upload Image
            </button>
            <p style={{ color: "red" }}>{state.FieldError}</p>
          </div>
          {/* </DialogContentText> */}
        </DialogContent>
      </Dialog>
    </div>
  );

}
