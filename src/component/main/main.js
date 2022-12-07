import './main.css';
const rectangleRed = require('../../assets/RectangleMap.png');

const Main= ()=>{

    const listFeatureText = ['Kirim Ke Berbagai Negara','Mudah Di Gunakan','Pengiriman Aman'];

    const listFeatureArrObject = [{
        caption : 'Berbagai Metode Pengiriman', text : `A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.`},
        {caption : `Lacak status pengiriman anda`, text : `A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown.
        A Lorem Ipsum is simply dummy text of the printing and typesetting industry. `},
        {caption : `Cek schedule pengiriman anda`, text : `A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.`}]

   

       
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

            <div className='main-row-map'>
                {listFeatureArrObject.map((item,index)=>{
                    if(index === 1){
                        return(
                    <div className="head-main" id='map-cont' value={index}>
                        
                        <div className='head-col2' id='map-col2'>
                        <img src={rectangleRed} alt='rectangleMap' id='rectangleMap-reverse'/>
                        <img id='mobileView-reverse'src={require(`../../assets/mobileView${index+1}.png`)} alt='mobileView'/> 
                        <img id='fishMap-reverse'src={require(`../../assets/fish${index+1}.png`)} alt='Fish'/>
                        </div>

                        <div className='head-col1' id='map-col1'>
                            <div className='container-mapping'>
                                <div className='col1-header' id='map-header'>
                            {item.caption}
                                </div>
                                <div className='col1-text' id='map-text'>
                            {item.text}
                           </div>
                            </div>   
                        </div>

                        
                    </div>
                        )
                    }
                    return (
                    <div className="head-main" id='map-cont' value={index}>
                        <div className='head-col1' id='map-col1'>
                            <div className='container-mapping'>
                                <div className='col1-header' id='map-header'>
                            {item.caption}
                                </div>
                                <div className='col1-text' id='map-text'>
                            {item.text}
                           </div>
                            </div>
                            
                        </div>
                        <div className='head-col2' id='map-col2'>
                        <img src={rectangleRed} alt='rectangleMap' id='rectangleMap'/>
                        <img id='mobileView'src={require(`../../assets/mobileView${index+1}.png`)} alt='mobileView'/> 
                        <img id='fishMap'src={require(`../../assets/fish${index+1}.png`)} alt='Fish'/>
                        </div>
                    </div>
                    )
                })}
            </div>


        </div>
    )
}

export default Main;