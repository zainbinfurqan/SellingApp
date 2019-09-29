import React,{Component} from 'react';
import whatsappicon from '../../images/whatsapp.png'
import './footer.css';
import hlplogo from '../../images/helpicon.png'

class Footer extends Component{
    constructor(){
        super()
        this.setState={

        }
    }
render(){
    return(
        <div className="footer">
            <div className="cntact_icon">
          <a
            href="https://wa.me/+923443097697?text=I%20want%20to%20Buy%20some%20products%20"
            target="_blank"
          >
            <p>
              <img src={hlplogo} />
            </p>
          </a>
        </div>
        </div>
    )
}
}
export default Footer;