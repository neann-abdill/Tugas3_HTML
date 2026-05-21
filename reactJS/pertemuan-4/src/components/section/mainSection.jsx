import mainImage from "../../assets/mainImage.png";
import appleStore from "../../assets/appleStore.png";
import playStore from "../../assets/playStore.png";

function MainSection() {
    return (
        <div className="mainSection">
            <div className="mainSectionLeft">
                <h1 className="mainSectionTitle">The Best Way <br /> To Save & Invest</h1>
                <div className="mainSectionText">Piggyvest helps over 3 million customers achieve their financial <br /> goals by helping them save and invest with ease</div>
                <button className="buttonCreateAccount">Create Free Account</button>
                <div className="buttonDownloadGroup">
                    <button className="buttonDownload">
                        <div><img src={appleStore} /></div>
                        <div className="buttonDownloadText">Get on Iphone</div>
                    </button>
                    <button className="buttonDownload">
                        <div><img src={playStore} /></div>
                        <div className="buttonDownloadText">Get on Android</div>
                    </button>
                </div>
            </div>
            <div>
                <img src={mainImage} />
            </div>
            <div className="mainSectionMobile">
                <h1 className="mainSectionTitle">The Best Way <br /> To Save & Invest</h1>
                <div className="mainSectionText">Piggyvest helps over 3 million customers <br />achieve their financial goals by helping <br />them save and invest with ease</div>
                <button className="buttonGetStarted">Get Started</button>
                <div className="buttonDownloadGroup">
                    <button className="buttonDownload">
                        <div><img src={appleStore} /></div>
                        <div className="buttonDownloadText">Get on Iphone</div>
                    </button>
                    <button className="buttonDownload">
                        <div><img src={playStore} /></div>
                        <div className="buttonDownloadText">Get on Android</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MainSection;