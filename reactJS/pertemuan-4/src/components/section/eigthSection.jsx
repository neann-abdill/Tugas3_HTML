 import logo from "../../assets/logo.png";
 import fb from "../../assets/fb.png";
import tw from "../../assets/tw.png";
import instagram from "../../assets/Instagram.png";
 
 function EighthSection() {
    return (
        <div className="eighthSectionContainer">
            <div className="footerDescription">
                <div className="footerPart">
                    <img src={logo} alt="LaslesVPN logo" className="footerLogo" />
                    <h5 className="footerMerk">Lasles<span className="footerVpnWord">VPN</span></h5>
                </div>
                <div>
                    <p className="footerText"><span className="footerLaslesVpn">LaslesVPN</span> is a private virtual network that <br />has unique features and high security.</p>
                </div>
                <div className="sosmedLogo">
                    <div><img src={fb} alt="Facebook logo" className="sosmedLogo" /></div>
                    <div><img src={tw} alt="Twitter logo" className="sosmedLogo" /></div>
                    <div><img src={instagram} alt="Instagram logo" className="sosmedLogo" /></div>
                </div>
                <div className="copyright">&copy;2020 LaslesVPN</div>
            </div>
            <div className="footerDescription">
                <p className="footerTitle">Product</p>
                <p className="footerDetail">Download</p>
                <p className="footerDetail">Pricing</p>
                <p className="footerDetail">Locations</p>
                <p className="footerDetail">Server</p>
                <p className="footerDetail">Countries</p>
                <p className="footerDetail">Blog</p>
            </div>
            <div className="footerDescription">
                <p className="footerTitle">Engage</p>
                <p className="footerDetail">LaslesVPN ?</p>
                <p className="footerDetail">FAQ</p>
                <p className="footerDetail">Tutorials</p>
                <p className="footerDetail">About Us</p>
                <p className="footerDetail">Privacy Policy</p>
                <p className="footerDetail">Terms of Service</p>
            </div>
            <div className="footerDescription">
                <p className="footerTitle">Earn Money</p>
                <p className="footerDetail">Affiliate</p>
                <p className="footerDetail">Become Partner</p>
            </div>
            <div className="footerDescriptionMobile">
                <div className="footerPart">
                    <img src={logo} className="footerLogo" />
                    <h5 className="footerMerk">Lasles<span className="footerVpnWord">VPN</span></h5>
                </div>
                <div>
                    <p className="footerText"><span className="footerLaslesVpn">LaslesVPN</span> is a private virtual network that <br />has unique features and high security.</p>
                </div>
                <div className="sosmedLogo">
                    <div><img src={fb} alt="Facebook logo" className="sosmedLogo" /></div>
                    <div><img src={tw} alt="Twitter logo" className="sosmedLogo" /></div>
                    <div><img src={instagram} alt="Instagram logo" className="sosmedLogo" /></div>
                </div>
                <div className="copyright">&copy;2020 LaslesVPN</div>
            </div>
        </div>
    );
}

export default EighthSection;