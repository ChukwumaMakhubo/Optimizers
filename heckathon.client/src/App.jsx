import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './routes';
import CustomerRoutes from '../src/Customer/CustomerRoutes'

function App() {
    
    return (
        <Router>
            <Route path="/" element={<LandingPage />} />
            <Route path="/customer" element={<Login />} />
            <Route path="/Mechanic" element={<Register />} />
            <Route path="/Supplier" element={<Register />} />
        </Router>
    );
}

export default App;