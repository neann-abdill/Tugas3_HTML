import backWhite from "../../assets/backWhite.png";
import computer from "../../assets/computer.png";

function FifthSection() {
    return(

           <div className="fifthSectionContainer">
        <div className="fifthSectionLeft">
            <h1 className="fifthSectionLeftTitle">Meet the saver <br/> of the month!</h1>
            <h1 className="fifthSectionLeftTitleMobile">Meet the saver of <br/>the month!</h1>
            <p className="fifthSectionLeftText">Every month, we shine spotlight on one saver,asking <br/>them questions about their saving culture and how the <br/>product is specifically hellping them how they spend <br/>and save for future responsibilities</p>
            <p className="fifthSectionLeftTextMobile">Every month, we shine spotlight on <br/>one saver,asking them questions <br/>about their saving culture and how the <br/>product is specifically hellping them <br/>how they spend and save for future <br/>responsibilities</p>
            <div className="fifthSectionLeftMore">
                <img src={backWhite} />
                <p className="fifthSectionLeftMeet">Meet Tohbad</p>
            </div>
        </div>
        <div className="fifthSectionRight">
            <img src={computer}  className="fifthSectionRightImage"/>
        </div>
    </div>

    );
}

export default FifthSection;