import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import AddProduct from "./pages/AddProduct";
import QueryForm from "./pages/QueryForm";
import QueryList from "./pages/QueryList";
import IncomeStatement from "./pages/IncomeStatement";
import SalesDashboard from "./pages/SalesDashboard";
import Repairs from "./pages/Repairs";
import AdminDashboard from "./components/AdminDashboard";
import AdminInventory from "./pages/AdminInventory";
import AdminSettings from "./pages/AdminSettings";
import Users from "./components/Users";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/income-statements" element={<IncomeStatement />} />
            <Route path="/users" element={<Users />} />
            <Route path="/repairs" element={<Repairs />} />
            <Route path="/sales-dashboard" element={<SalesDashboard />} />
            <Route path="/admin-inventory" element={<AdminInventory />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/settings" element={<AdminSettings />} />
            <Route path="/query-form" element={<QueryForm />} />
            <Route path="/query-list" element={<QueryList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
