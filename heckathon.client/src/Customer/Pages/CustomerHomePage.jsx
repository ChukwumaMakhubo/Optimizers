import '../CustomerCss/CustomerHomePage.css'; 
import MechanicCardCustomer from '../Components/MechanicCardCustomer';
import CustomerNav from '../Components/CustomerNav' 
import CustomerModal from '../Components/CustomerModal'
import CustomerButton from '../../Customer/Components/CustomerButton'
import { useState } from 'react';

const CustomerHomePage = () => {
    const address = "Marine Drive, Summerstrand, Summerstrand, 6000 Port Elizabeth, South Africa";
    const encodedAddress = encodeURIComponent(address);
    const CustomersReview = [
        {
            id: 1,
            name: 'Sipho M.',
            rating: 5,
            comment: 'Excellent service and friendly staff!',
            date: '2025-07-25',
        },
        {
            id: 2,
            name: 'Zanele K.',
            rating: 4,
            comment: 'Clean and professional, highly recommended.',
            date: '2025-07-20',
        },
        {
            id: 3,
            name: 'Thabo N.',
            rating: 3,
            comment: 'Good experience, but there was a delay.',
            date: '2025-07-18',
        },
        {
            id: 4,
            name: 'Thabo N.',
            rating: 3,
            comment: 'Good experience, but there was a delay.',
            date: '2025-07-18',
        },
         {
            id: 5,
            name: 'Sipho M.',
            rating: 5,
            comment: 'Excellent service and friendly staff!',
            date: '2025-07-25',
        },
        {
            id: 6,
            name: 'Zanele K.',
            rating: 4,
            comment: 'Clean and professional, highly recommended.',
            date: '2025-07-20',
        },
        {
            id: 7,
            name: 'Thabo N.',
            rating: 3,
            comment: 'Good experience, but there was a delay.',
            date: '2025-07-18',
        },
        {
            id: 8,
            name: 'Thabo N.',
            rating: 3,
            comment: 'Good experience, but there was a delay.',
            date: '2025-07-18',
        }
    ];

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false); 

    return (
      <>
            <CustomerNav /> 

            {showModal && (
                <CustomerModal title="Review">
                    <button className="close-customer-modal" onClick={handleCloseModal}>X</button>
                    <div className="review-container">
                        <div className="gogoogle-map" style={{ width: "65%", height: "400px" }}>
                            <iframe
                                title="Marine Drive Location"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
                            ></iframe>
                        </div>

                        <div className="reviews">
                            <p className="sub-heading-reviews">Customers reviews</p>

                            {CustomersReview.map((review, index) => (
                                <div key={index} className="review-box">
                                    <p>{new Date(review.date).toLocaleDateString()}</p>
                                    <p>{review.comment}</p>

                                    <p className="customer-review-rating">
                                        {Array.from({ length: review.rating }, (_, i) => (
                                            <i className="fa-solid fa-star" key={i}></i>
                                        ))}
                                    </p>

                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="make-appointment-container">
                        <CustomerButton text="Make Appointment" click={handleCloseModal} />
                    </div>




                </CustomerModal>
            )}
            
            <div className="customer-home-page">
                <div className="fitler">

                    <div className="search-location-container">
                        <i className="fa-solid fa-location-dot"></i>
                        <input type="text" placeholder="seach for location..." className="search"></input>
                    </div>
                    <select id="distanceFilter" class="">
                        <option value="">Any distance</option>
                        <option value="10">Within 10 km</option>
                        <option value="25">Within 25 km</option>
                        <option value="50">Within 50 km</option>
                        <option value="100">Within 100 km</option>
                    </select>


                    <select id="serviceFilter">
                        <option value="">All Services</option>
                        <option value="repair">Repair</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="customize">Customize</option>
                    </select>
                </div>

                <MechanicCardCustomer onView={handleOpenModal} />
                <MechanicCardCustomer onView={handleOpenModal} />
                <MechanicCardCustomer onView={handleOpenModal} />
                <MechanicCardCustomer onView={handleOpenModal} />
                <MechanicCardCustomer onView={handleOpenModal} />

            </div>
      </>
      
  );
};

export default CustomerHomePage;