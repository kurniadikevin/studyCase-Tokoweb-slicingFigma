import './banner1.css';

const Banner1= ()=>{
    return(
        <div className="banner1">
            <div className="banner1-col1">
                <div className="banner1-row1">Lacak Pegiriman Anda</div>
                <div className="banner1-text">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text </div>
                <div className="banner1-bottom">
                    <input></input>
                    <button>Lacak</button>
                </div>
            </div>
            <div className="banner1-col2">
                <div className="banner1-row1">Cek Tarif Pengiriman Anda</div>
                <div className="banner1-col2-row2">
                 <input id="inputOrigin"></input>
                 <input id="inputDestination"></input>
                </div>
                <div className="banner1-col2-bottom">
                    Check
                </div>
               
            </div>
        </div>
    )
}

export default Banner1;