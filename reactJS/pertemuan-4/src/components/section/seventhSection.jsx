import netflix from "../../assets/netflix.png";
import reddit from "../../assets/reddit.png";
import amazon from "../../assets/amazon.png";
import discord from "../../assets/discord.png";
import spotify from "../../assets/spotify.png";

function SeventhSection() {
    return (
        <>
            <div className="seventhSectionContainer">
                <div><img src={netflix} alt="Netflix logo" /></div>
                <div><img src={reddit} alt="Reddit logo" /></div>
                <div><img src={amazon} alt="Amazon logo" /></div>
                <div><img src={discord} alt="Discord logo" /></div>
                <div><img src={spotify} alt="Spotify logo" /></div>
            </div>
            <div className="seventhSectionContainerMobile">
                <div className="upperImages">
                    <div><img src={netflix} alt="Netflix logo" height="50px" width="91px" /></div>
                    <div><img src={reddit} alt="Reddit logo" height="23px" width="71px" /></div>
                </div>
                <div className="lowerImages">
                    <div><img src={amazon} alt="Amazon logo" height="30px" width="96px" /></div>
                    <div><img src={discord} alt="Discord logo" height="32px" width="95px" /></div>
                    <div><img src={spotify} alt="Spotify logo" height="26px" width="87px" /></div>
                </div>
            </div>
        </>
    );
}

export default SeventhSection;