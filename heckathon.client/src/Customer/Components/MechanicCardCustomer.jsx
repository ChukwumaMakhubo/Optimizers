import '../CustomerCss/MechanicCardCustomer.css';
import Logo2 from '../../assets/Logo2.jpg'
import Button from '../Components/CustomerButton'; 
function MechanicCardCustomer({ onView }) {

   ;

    return (
        <>        
            <div className="mechanic-card">
                <div className="mechanic-profile">
                    <img src={Logo2} alt="logo1"></img>
                </div>

                <div className="mechanic-details">
                    <p className="company-name">12 Long Street, Johannesburg, 2000</p>

                    <p className="location-container">
                        <span>45 Main Street, Cape Town, 8001</span>
                        <i className="fa-solid fa-location-dot" id="location-icon"></i>
                    </p>
                    <p>Repair</p>
                    <p className="ratings-container">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </p>

                    <p className="view-mechanic-button-container">
                        <Button text="View" click={ onView }/>
                    </p>
                </div>
            </div>
        </>
       
    )
}

export default MechanicCardCustomer