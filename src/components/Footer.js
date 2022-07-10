import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg" 



 export default function Footer(){
    return(
        <footer>
            <img src={facebook} alt="facebook-logo" className="logo-footer"/>
            <img src={twitter} alt="twitter" className="logo-footer"/>
            <img src={instagram} alt="instagram" className="logo-footer"/>
            <a href=""></a>
        </footer>
    )
 }