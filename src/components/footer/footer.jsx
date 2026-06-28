import './footer.css';
import { CiInstagram, CiLinkedin  } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";


function Footer() {

    return (
        <div className="main-footer">
            <div className="footer-1 footer-section">
                <p>Hello,</p> 
                <p>this is  vivek patel a BTech Computer Science Student at National Institue of Technology, Agartala. I have made this pokedex with my initial learning of reactJS, hope you like this.
                </p>
                <p>Please check out my Social Profiles</p>
            </div>

            <div className="footer-2 footer-section">
                <p>A Pokédex is a portable electronic encyclopedia in the Pokémon universe used to record and catalog information about various Pokémon species</p>
                <p>Version 1.0.0</p>
            </div>

            <div className="footer-3 footer-section">
                <p>My Social Profiles</p>
                <p>
                    <a href="https://www.linkedin.com/in/vivek-pat3l/"><CiLinkedin /></a>
                    <a href="https://www.instagram.com/vivek_pat3l/"><CiInstagram /></a>
                    <a href="https://github.com/anonymousd3vil-ops"><FaGithub /></a>
                    <a href="https://leetcode.com/u/vivek_pat3l/"><SiLeetcode /></a>
                    <a href="https://vivekpatelportfolio.vercel.app/"><TbWorldWww /></a>
                </p>
            </div>
        </div>
    );
}

export default Footer;