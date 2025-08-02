import React from 'react';
import { Routes, Route } from 'react-router-dom';  
import CustomerHomePage from '../Customer/Pages/CustomerHomePage';

const CustomerRoutes = () => {
    return (
        <> 
            <Routes>
                <Route path="/*" element={<CustomerHomePage />} />
                <Route path="/Page1" element={<CustomerHomePage />} />
                
            </Routes>
        </>
    );
};

export default CustomerRoutes;
