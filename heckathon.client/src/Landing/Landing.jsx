import React from 'react';
import ServicesCard from '../Landing/Components/ServicesCard'; 
import './LandingCss/Landing.css'
import LandingImage from '../assets/LandingPic.jpg'; 
function Navbar() {

    const services = [
        {
            text: "Find Trusted Mechanics",
            paragraph: "Connect with verified mechanics, view their profiles, and book appointments for repairs or maintenance."
        },
        {
            text: "Access Quality Parts",
            paragraph: "Browse and order parts directly from reliable suppliers in the automotive aftermarket industry."
        },
        {
            text: "Support SMMEs",
            paragraph: "Help small businesses grow by choosing local mechanics and suppliers through our platform."
        }
    ];


    return (
        <>
        <nav>
            
               <ul className="nav-bar">
                 <li>Home</li>
                 <li>About us </li>
                <li>Services</li>
                <li className="last">
                    <i className="fa-solid fa-user"></i>
                    <span>SignIn / SignUp</span>
                </li>
            </ul>

        </nav>

         <main>
            <div className="image-container">
                    <img src={LandingImage} alt="no"/>
                <p class="text">Connecting Customers, Mechanics, and Suppliers in the Automotive Aftermarket</p>
            </div>

             <section>
                    <h1 className="services">Services</h1>

                    <div className="services-container">

                        {services.map((service, ) => (                            
                            <ServicesCard text={service.text} paragraph={service.paragraph } />
                        ))} 

                    </div>
                     

                    <h1 className="about-title">About Us</h1>
                    <div className="about-container">                        
                        <p> About Us
                            We are a platform dedicated to connecting customers, mechanics, and suppliers in the automotive aftermarket industry. Our goal is to make it easier for customers to find trusted mechanics, for mechanics to grow their businesses and networks, and for suppliers to reach a wider audience. By creating a space for direct interaction, collaboration, and easy access to quality parts, we help small and medium enterprises thrive while ensuring customers receive reliable service.
                        </p>
                    </div>
                </section>
                
        </main>

    </>
    );

}
export default Navbar;   


