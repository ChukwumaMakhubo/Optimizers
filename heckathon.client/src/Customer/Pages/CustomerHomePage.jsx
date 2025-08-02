import '../CustomerCss/CustomerHomePage.css'; 
import MechanicCardCustomer from '../Components/MechanicCardCustomer';

const CustomerHomePage = () => {
  return (
      <div className="customer-home-page"> 
          <div class="fitler">
              <input type="text" placeholder="seach for location..." class="search"></input>
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
    </div>
  );
};

export default CustomerHomePage;