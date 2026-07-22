import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/admin/Auth/Login";
import Dashboard from "../pages/admin/Dashboard/Dashboard";

import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import Banner from "../pages/admin/Banner/Banner";
import AddBanner from "../pages/admin/Banner/AddBanner";
import EditBanner from "../pages/admin/Banner/EditBanner";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public */}
      <Route path="/login" element={<Login />} />

      {/* Protected */}
      <Route
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]} />
        }
      >
        <Route element={<AdminLayout />}>
          <Route
            path="/admin/dashboard"
            element={<Dashboard />}
          />
        </Route>
        
      </Route>

       <Route element={<AdminLayout />}>

    {/* Dashboard */}
    <Route
      path="/admin/dashboard"
      element={<Dashboard />}
    />

    {/* Hero Banner Management */}
    <Route
      path="/admin/banners"
      element={<Banner />}
    />

    <Route
      path="/admin/banner/create"
      element={<AddBanner/>}
    />

    <Route
      path="/admin/banner/edit/:id"
      element={<EditBanner />}
    />

  </Route>

      {/* Default */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* 404 */}
      <Route
        path="*"
        element={<h1 className="text-center mt-20 text-3xl">404 - Page Not Found</h1>}
      />

    </Routes>
  );
};

export default AppRoutes;