import './main.css';

const Main= ()=>{

    const listFeatureText = ['Kirim Ke Berbagai Negara','Mudah Di Gunakan','Pengiriman Aman'];

    return(
        <div className="main">
            <div className="main-row1">
                <div className="main-header1">
                    Keunggulan kami
                </div>
                <div className="main-header1-text">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s.</div>
            </div>
            <div className="main-row2">
            {listFeatureText.map((item,index)=>{
                return(
                    <div className="feature-cont">
                        <div className="feater-row1">
                            <div className="feature-box">
                                <div>
                                <img src={require(`../../assets/Vector${index+1}.png`)} alt='vector img'/>
                                </div>
                            </div>
                        </div>
                        <div className="feature-row2">{item}</div>
                        <div className="feature-row3">
                        A Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Main;