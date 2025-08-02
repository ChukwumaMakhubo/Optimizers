import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './/Landing/Landing' 
import CustomerRoutes from "./Customer/CustomerRoutes";
function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/Customer" element={<CustomerRoutes />} />
                {/*<Route path="/Mechanic" element={<Register />} />*/}
                {/*<Route path="/Supplier" element={<Register />} />*/}
            </Routes>
        </BrowserRouter>
       
    );
}

export default App;