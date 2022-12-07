import './head.css';
const googleplayLogo = require('../../assets/google-play.png');
const googleplayText =  require('../../assets/googleplaytext.png');
const appleAppLogo =  require('../../assets/applelogo.png');
const appleText = require('../../assets/appletext.png');
const rectangleRed =  require('../../assets/rectanglered.png');
const twofish = require('../../assets/2goldfish.png');
const phone1 = require('../../assets/phone1.png');

const Head = ()=>{
    return (
        <div className="head">
            <div className="dashboard">
                <div className='toko-ikan'>Toko Ikan</div>
                <div className='panel-cont'>
                    <div>Beranda</div>
                    <div>Keunggulan</div>
                    <div>Fitur Aplikasi</div>
                </div>
                <div className='download-cont'>
                    <div>Download</div>
                </div>
            </div>
            <div className="head-main">
                <div className='head-col1'>
                    <div className='col1-header'>
                    Kirim berbagi jenis ikan dengan mudah
                    </div>
                    <div className='col1-text'>
                    A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  
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
                    <div className='col1-bottom'>
                        <div className='col1-bottom1'>
                            <div className='bottomNum'>1.9k+</div>
                            <div className='bottom-text'>Active Users</div>
                        </div>
                        <div className='col1-bottom2'>
                            <div className='bottomNum'>20+</div>
                            <div className='bottom-text'>New Features</div>
                        </div>
                    </div>
                </div>
                <div className='head-col2'>
                     <img id='twoFish' src={twofish} alt='twofish'/> 
                    <img id='rectangleRed' src={rectangleRed} alt='rectangle red'/>
                     <img id='phone1'src={phone1} alt='phone1'/> 
                </div>
            </div>
        </div>
    )
}

export default Head;