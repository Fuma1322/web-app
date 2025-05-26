import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import AddProduct from "./pages/AddProduct";
import QueryForm from "./pages/QueryForm";
import QueryList from "./pages/QueryList";
import IncomeStatement from "./pages/IncomeStatement";
import SalesDashboard from "./pages/SalesDashboard";
//import HomePage from "./components/Home-page";
import Navbar from "./components/Nav";
import Repairs from "./pages/Repairs";
import AdminDashboard from "./components/AdminDashboard";
import AdminInventory from "./pages/AdminInventory";
import AdminSettings from "./pages/AdminSettings";
import Users from "./components/Users";

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
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/income-statements" element={<IncomeStatement />} />
            <Route path="/sales-dashboard" element={<SalesDashboard />} />
            <Route path="/nav" element={<Navbar />} />
            <Route path="/users" element={<Users />} />
            <Route path="/repairs" element={<Repairs />} />
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
