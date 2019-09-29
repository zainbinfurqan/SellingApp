import React, { Component } from "react";
import "./loginheader.css";
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import logo from "../../images/sellapplogo.png";
import sidebarIcon from "../../images/sidebar.png";
// import SideBar from "../SideBar/SideBar.js";
import Button from "@material-ui/core/Button";


import SideBar from "../SideBar/SideBar.js";
class LoginHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginPanel: false,
      header_form_key: "",
      logoImg: true,
      sidebarFlag: false
    };
  }
  Loginhandle = () => {
    console.log("1");
    let { LoginPanel } = this.state;
    this.setState({
      LoginPanel: LoginPanel === true ? false : true,
      header_form_key: LoginPanel === true ? "" : "Login"
    });
  };
  Signinhandle = () => {
    let { LoginPanel } = this.state;
    this.setState({
      LoginPanel: LoginPanel === true ? false : true,
      header_form_key: LoginPanel === true ? "" : "signin"
    });
  };
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (window.innerWidth >= 411) {
      // console.log("a");
      this.setState({ logoImg: false });
    } else {
      this.setState({ logoImg: true });
    }
  };
  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      this.updateWindowDimensions.bind(this)
    );
  }
  componentDidMount() {
    // this.setState({ DiamondReplica_data });
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    setTimeout(() => {
      this.setState({ openOffer: false });
    }, 6000);
  }
  openSidebar = () => {
    // console.log()
    this.setState({ sidebarFlag: true });
  };
  closesidebar = () => {
    this.setState({ sidebarFlag: false });
  };
  render() {
    return (
      <div className="login_header">
        {this.state.logoImg && (
          <img src={sidebarIcon} className='headerLogo' onClick={this.openSidebar} />
        )}
        <div className="header_div">
          <p className="header_li" onClick={this.Loginhandle}>
            Login
          </p>
          <p className="header_li" onClick={this.Signinhandle}>
            SignUp
          </p>
          <div className="dropdown dropdown_header">
            <button
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
                What We Do
              </a>
              <a class="dropdown-item" href="#">
                Report A Bug
              </a>
            </div>
          </div>
        </div>
        {/* {this.state.sidebarFlag && ( */}
        {/* {sideBar} */}
        <SideBar close={this.closesidebar} open={this.state.sidebarFlag} />
        {/* )} */}

        <Dialog
          open={this.state.LoginPanel}
          // onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            onClick={this.Loginhandle}
            style={{ cursor: "pointer", width: "fit-content" }}
          >
            {"Close"}
          </DialogTitle>
          {this.state.header_form_key == "signin" ? (
            <DialogTitle id="alert-dialog-title">{"SigIn Here!"}</DialogTitle>
          ) : (
            <DialogTitle id="alert-dialog-title">{"Login Here!"}</DialogTitle>
          )}

          {this.state.header_form_key == "signin" ? (
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {/* {this.state.header_form_key} */}
                <TextField
                  className="login_txtbox"
                  placeholder="Full Name"
                  margin="normal"
                />
                <TextField
                  className="login_txtbox"
                  placeholder="Email"
                  margin="normal"
                />
                <TextField
                  className="login_txtbox"
                  placeholder="Password"
                  margin="normal"
                />
                <TextField
                  className="login_txtbox"
                  placeholder="Contact No"
                  margin="normal"
                />
                <div className="SignIn_main">
                  <Button
                  style={{margin:'10px 0px 0px 0px'}}
                    variant="contained"
                    color="primary"
                    // className={classes.button}
                  >
                    SignIn
                  </Button>
                </div>
              </DialogContentText>
            </DialogContent>
          ) : (
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <TextField
                  placeholder="Email"
                  margin="normal"
                  className="login_txtbox"
                />
                <TextField
                  className="login_txtbox"
                  placeholder="Password"
                  margin="normal"
                />
                <div className="Login_main">
                  <Button
                  style={{margin:'10px 0px 0px 0px'}}
                    variant="contained"
                    color="primary"
                    // className={classes.button}
                  >
                    Login
                  </Button>
                </div>
              </DialogContentText>
            </DialogContent>
          )}
        </Dialog>
      </div>
    );
  }
}
export default LoginHeader;
