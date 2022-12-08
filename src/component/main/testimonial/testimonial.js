import './testimonial.css';

const Testimonial = ()=>{

    const testimonialArr= [{
        user : 'Floyd Miles', text : `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
        ,review : ['starFull','starFull','starFull','starHalf','starZero']
    }, {user:'Ronald Richards', text: `ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
    ,review : ['starFull','starFull','starFull','starFull','starZero']},
    {user : `Savannah Nguyen`, text : `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
    Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
    ,review : []},
    {user : 'Floyd Miles', text : `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
    ,review : []}];

    return (
        <div className="testimonial">
            <div className="testimonial-head">
                <div className="testimonial-title">Testimonial</div>
                <div className="testimonial-text">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text </div>
            </div>
            <div className="testi-slideshow">
            {testimonialArr.map((item,index)=>{
                return(
                <div className="testi-cont">
                    <div className="testi-row1">
                        <div className='testi-image-cont'>
                            <img src={require(`../../../assets/testimonial/PP${index+1}.png`)} alt='userImage'/>
                        </div>
                        <div className="star-review">
                        {item.review.map((el)=>{
                            return(
                                <div>
                                    <img src={require(`../../../assets/testimonial/${el}.png`)} alt='star'/>
                                </div>
                            )
                            })}
                      
                        </div>
                    </div>
                    <div className="testi-row2">
                        {item.user}
                    </div>
                    <div className="testi-row3">
                        {item.text}
                    </div>
                </div>
                )
             })}
            </div>
            <div className='testi-bottom'>
                <img src={require(`../../../assets/testimonial/dotRed.png`)} alt='dot-red'/>
                <img src={require(`../../../assets/testimonial/dotGrey.png`)} alt='dot-grey'/>
                <img src={require(`../../../assets/testimonial/dotGrey.png`)} alt='dot-grey'/>
                <img src={require(`../../../assets/testimonial/dotGrey.png`)} alt='dot-grey'/>
            </div>
        </div>
    )
}

export default Testimonial;