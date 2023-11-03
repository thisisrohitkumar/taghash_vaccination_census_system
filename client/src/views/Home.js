import React from "react";
import '../stylesheets/home.css'
import Form from '../components/Form'
import brandImg from '../assets/images/brand_img.svg'
import brandNameImg from '../assets/images/syringe.png'

const Home = () => {
    return(
        <>
            <div className="container">
                <div className="brandBox">
                    <div className="brandName">
                        <div className="brandNameImg">
                            <img src={brandNameImg} alt="Brand Name Image" />
                        </div>
                        <div className="brandNameText">
                        <h1>Vaccination</h1>
                        <h2>Census System</h2>
                        </div>
                    </div>
                    <div className="brandImg">
                        <img src={brandImg} alt="Brand Image" />
                    </div>
                </div>
                <div className="formBox">
                    <Form />
                </div>
            </div>
        </>
    )
}

export default Home
