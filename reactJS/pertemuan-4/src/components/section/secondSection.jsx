 import security from "../../assets/security.png";
 
 function SecondSection() {
    return (
        <div className="secondSectionContainer">
            <div>
                <img src={security} />
            </div>
            <div className="secondSectionRight">
                <h1 className="secondSectionRightTitle">Your Security is our priority</h1>
                <h1 className="secondSectionRightTitleMobile">Your Security is <br />our priority</h1>
                <p className="secondSectionRightText">Piggyvest uses the highest level of security and it is secured by 256 bits SSL security <br />encryption to ensure that your information is completely protected from fraud</p>
                <p className="secondSectionRightTextMobile">Piggyvest uses the highest level of <br />security and it is secured by 256 bits <br />SSL security encryption to ensure that <br />your information is completely <br />protected from fraud{""}</p>
                <div className="secondSectionRightLearn">
                    <a href="#" className="secondSectionRightLearnText">Learn More</a>
                </div>
            </div>
        </div>
    );
}

export default SecondSection;