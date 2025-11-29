"use client";
import Image from "next/image";

const Lifestyle = () => {
    return(
        <div className="lifestyle-section">
            <div className="lifestyle-box">
                <Image src='/model-lm.jpg' alt='fashion-model' width={300} height={100}/>
                <div className="lifestyle-content">
                    <h2>Explore Trendy Styles And Elevate Your Fashion Game!</h2>
                    <p>Discover the latest fashion trends at Skena.co, where style meets comfort. Our curated collection offers something for every occasion, ensuring you always look your best.</p>
                    <p>From casual wear to elegant evening outfits, Skena.co delivers high-quality designs that reflect your unique style.</p>
                    <button className="btn-learn">Learn More</button>
                </div>
            </div>

            <div className="features-row">
                <div className="feature-item">
                    <i className="icon-checkout">🛒</i>
                    <h4>Seamless Checkout Process</h4>
                    <p>Fast, secure, and easy checkout for a smooth shopping experience.</p>
                </div>

                <div className="feature-item">
                    <i className="icon-ai">🎁</i>
                    <h4>Personalized Style Recommendations</h4>
                    <p>AI-driven suggestions based on customer preferences and purchase history.</p>
                </div>

                <div className="feature-item">
                    <i className="icon-image">🖼️</i>
                    <h4>High-Quality Product Images</h4>
                    <p>Clear, detailed images with zoom features to enhance product presentation.</p>
                </div>
            </div>
        </div>
    );
}

export default Lifestyle;