import './footer.css';

const Footer= ()=>{
    return(
    <div className="footer">
         <div className='footer-main'>
            <div className="footer-col1">
                <div>
                    <img src={require('../../assets/footer1.png')} alt='footer1'/>
                </div>
                <div className='footer-col1-text'>
                A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.
                </div>
                <div className='icon-cont-foot'>
                    <div>
                    <img src={require('../../assets/facebook.png')} alt='fb'/>
                    </div>
                    <div>
                    <img src={require('../../assets/twitter.png')} alt='twitter'/>
                    </div>
                    <div>
                    <img src={require('../../assets/instagram.png')} alt='ig'/>
                    </div>
                </div>
            </div>
            <div className="footer-col2">
                <div className='ft-col2-col1'>
                        <div id='ft-head'>Menu Bantuan</div>
                        <div className='ft-text'>
                        <div>Keunggulan</div>
                        <div>Fitur Aplikasi</div>
                        <div>Testimoni</div>
                    </div>
                </div>
                <div className='ft-col2-col2'>
                    
                        <div id='ft-head'>Informasi kontak</div>
                    <div className='ft-text'>
                        <div>0812-9797-1227</div>
                        <div>0812-9797-1227</div>
                        <div>Jbgtranshipping@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            All rights reserved@2022
        </div>
    </div>
    )
}

export default Footer;