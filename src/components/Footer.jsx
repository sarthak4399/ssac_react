
import {ImLinkedin} from "react-icons/im"
import {BsGithub} from "react-icons/bs"
import "./footer.css";
export default function Footer(){
    return(
        <div className="footer">
        <p>SSAC</p>
        <div className="social">
            <label>Contact on:</label>
            <div className="icon">
                <a href="https://www.linkedin.com/in/yuvraj-darshankar-52262622b/" target="_blank">
                <ImLinkedin size={19}/>
                </a>
                /
                <a href="https://github.com/YuviCrypter" target="_blank">
                <BsGithub size={19}/>
                </a>
                </div>
        </div>    
        </div>
    )
}
