import Image from "next/image";

const Testimonials = () =>{
    return(
        <div className="testimonials">
            
            <h1>Testimonials</h1>
            <p>Customer testimonials showcasing real experience, building<br/>
            trust and confidence in our product</p>
            <div className="img">
            <button style={{paddingRight:'20px'}}>←</button>
            <Image src = '/testimonials.avif' width={200} height={200} alt='testimonials'/>
            <button style={{paddingLeft:'20px'}}>→</button>
            </div>
            <p>⭐⭐⭐⭐⭐</p>
            <p>ShopZ.co delivers exceptional fashion with perfect blend of style,<br/> 
            quality and affordability.Trendy pieces for every<br/>
            occasion, making it my go-to fashion destination</p>
        </div>
    );
}

export default Testimonials;