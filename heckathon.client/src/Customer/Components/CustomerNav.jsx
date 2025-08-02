
import '../../Customer/CustomerCss/CustomerNav.css'
const CustomerNav = () => {
  return ( 
      
      <ul className="customer-nav">
         <li>
               <p className="customer-nav-icon"><i className="fa-solid fa-house"></i></p>
               <p className="customer-nav-text">Home</p>
         </li>

          <li className="customer-nav-icon">
              <p className="customer-nav-icon"><i className="fa-regular fa-calendar-check"></i></p>
              <p className="customer-nav-text">Apointments</p>
          </li>

          <li className="customer-nav-icon">
              <p className="customer-nav-icon"> <i className="fa-solid fa-message"></i></p>              
              <p className="customer-nav-text">Messages</p>
          </li>

          <li className="last customer-nav-icon">
              <p className="customer-nav-icon"><i className="fa-solid fa-user"></i></p>                  
              <p className="customer-nav-text">Profile</p>
          </li>
      </ul> 
  );
};

export default CustomerNav;