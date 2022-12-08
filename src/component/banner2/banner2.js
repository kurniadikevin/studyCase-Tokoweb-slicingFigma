import './banner2.css';
const googleplayLogo = require('../../assets/google-play.png');
const googleplayText =  require('../../assets/googleplaytext.png');
const appleAppLogo =  require('../../assets/applelogo.png');
const appleText = require('../../assets/appletext.png');
const imageBanner = require('../../assets/manCourrier.png');


const Banner2= ()=>{
    return(
        <div className="banner2">
            <div className="banner2-col1">
                <div className="banner2-title">
                Available and Download Anytime!
                </div>
                <div className="banner2-text">
                A Lorem Ipsum is simply dummy text of the printing and 
                </div>
                <div className='col1-cont-box'>
                        <div className='google-cont'>
                            <div><img src={googleplayLogo} alt='googleplay logo'/></div>
                            <div className='icon-cont'>
                                <div id='text-icon'>GET IN ON</div>
                                <div><img src={googleplayText} alt='googletext'/> </div>
                            </div>
                        </div>
                        <div className='appStore-cont'>
                        <div><img src={appleAppLogo}/></div>
                            <div className='icon-cont'>
                                <div id='text-icon'>Download on the</div>
                                <div><img src={appleText}/></div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="banner2-col2">
                <img src={imageBanner} alt='imagecourrier' id='image-banner2'/>
            </div>
        </div>
    )
}

export default Banner2;