import axios from "axios";
import React, { useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./components/PublicRoute";
import ProtecedRoute from "./components/ProtecedRoute";
import Home from "./pages/Home";
import AdminBuses from "./pages/admin/AdminBuses";
import AdminHome from "./pages/admin/AdminHome";
import AdminUsers from "./pages/admin/AdminUsers";
import BookNow from "./pages/BookNow";
function App() {
  return (
    <div className="App  ">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtecedRoute>
                <Home />
              </ProtecedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtecedRoute>
                <AdminHome />
              </ProtecedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtecedRoute>
                <AdminUsers />
              </ProtecedRoute>
            }
          />
          <Route
            path="/book-now/:id"
            element={
              <ProtecedRoute>
                <BookNow />
              </ProtecedRoute>
            }
          />
          <Route
            path="/admin/buses"
            element={
              <ProtecedRoute>
                <AdminBuses/>
                </ProtecedRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// https://www.edustoke.com/assets/selected_country_dial_info.json
// {name: 'India', flag: '🇮🇳', code: 'IN', dial_code: '+91'}
// 1
// :
// {name: 'Bangladesh', flag: '🇧🇩', code: 'BD', dial_code: '+880'}
// 2
// :
// {name: 'Nepal', flag: '🇳🇵', code: 'NP', dial_code: '+977'}
// 3
// :
// {name: 'Bhutan', flag: '🇧🇹', code: 'BT', dial_code: '+975'}
// 4
// :
// {name: 'Sri Lanka', flag: '🇱🇰', code: 'LK', dial_code: '+94'}
// 5
// :
// {name: 'Thailand', flag: '🇹🇭', code: 'TH', dial_code: '+66'}
// 6
// :
// {name: 'Singapore', flag: '🇸🇬', code: 'SG', dial_code: '+65'}
// 7
// :
// {name: 'Korea, Republic of South Korea', flag: '🇰🇷', code: 'KR', dial_code: '+82'}
// 8
// :
// {name: 'United Arab Emirates', flag: '🇦🇪', code: 'AE', dial_code: '+971'}
// 9
// :
// {name: 'Saudi Arabia', flag: '🇸🇦', code: 'SA', dial_code: '+966'}
// 10
// :
// {name: 'Yemen', flag: '🇾🇪', code: 'YE', dial_code: '+967'}
// 11
// :
// {name: 'Qatar', flag: '🇶🇦', code: 'QA', dial_code: '+974'}
// 12
// :
// {name: 'Bahrain', flag: '🇧🇭', code: 'BH', dial_code: '+973'}
// 13
// :
// {name: 'United Kingdom', flag: '🇬🇧', code: 'GB', dial_code: '+44'}
// 14
// :
// {name: 'Afghanistan', flag: '🇦🇫', code: 'AF', dial_code: '+93'}
// 15
// :
// {name: 'United States', flag: '🇺🇸', code: 'US', dial_code: '+1'}
// 16
// :
// {name: 'Germany', flag: '🇩🇪', code: 'DE', dial_code: '+49'}
// 17
// :
// {name: 'Canada', flag: '🇨🇦', code: 'CA', dial_code: '+1'}
// 18
// :
// {name: 'Australia', flag: '🇦🇺', code: 'AU', dial_code: '+61'}
// 19
// :
// {name: 'Kuwait', flag: '🇰🇼', code: 'KW', dial_code: '+965'}
// 20
// :
// {name: 'Japan', flag: '🇯🇵', code: 'JP', dial_code: '+81'}
// 21
// :
// {name: 'Oman', flag: '🇴🇲', code: 'OM', dial_code: '+968'}
// 22
// :
// {name: 'Sweden', flag: '🇸🇪', code: 'SE', dial_code: '+46'}
// 23
// :
// {name: 'Denmark', flag: '🇩🇰', code: 'DK', dial_code: '+45'}
// 24
// :
// {name: 'Belgium', flag: '🇧🇪', code: 'BE', dial_code: '+32'}
// 25
// :
// {name: 'South Africa', flag: '🇿🇦', code: 'ZA', dial_code: '+27'}
// 26
// :
// {name: 'Ireland', flag: '🇮🇪', code: 'IE', dial_code: '+353'}
// 27
// :
// {name: 'Kenya', flag: '🇰🇪', code: 'KE', dial_code: '+254'}
// 28
// :
// {name: 'Philippines', flag: '🇵🇭', code: 'PH', dial_code: '+63'}
// 29
// :
// {name: 'Nigeria', flag: '🇳🇬', code: 'NG', dial_code: '+234'}
// 30
// :
// {name: 'France', flag: '🇫🇷', code: 'FR', dial_code: '+33'}
// 31
// :
// {name: 'Malaysia', flag: '🇲🇾', code: 'MY', dial_code: '+60'}
// 32
// :
// {name: 'Netherlands', flag: '🇳🇱', code: 'NL', dial_code: '+31'}
// 33
// :
// {name: 'Hong Kong', flag: '🇭🇰', code: 'HK', dial_code: '+852'}
// 34
// :
// {name: 'Myanmar', flag: '🇲🇲', code: 'MM', dial_code: '+95'}
// 35
// :
// {name: 'Cambodia', flag: '🇰🇭', code: 'KH', dial_code: '+855'}
// 36
// :
// {name: 'Russia', flag: '🇷🇺', code: 'RU', dial_code: '+7'}
// 37
// :
// {name: 'Switzerland', flag: '🇨🇭', code: 'CH', dial_code: '+41'}
// 38
// :
// {name: 'New Zealand', flag: '🇳🇿', code: 'NZ', dial_code: '+64'}
// 39
// :
// {name: 'Italy', flag: '🇮🇹', code: 'IT', dial_code: '+39'}
// 40
// :
// {name: 'China', flag: '🇨🇳', code: 'CN', dial_code: '+86'}
// 41
// :
// {name: 'Spain', flag: '🇪🇸', code: 'ES', dial_code: '+34'}
// 42
// :
// {name: 'Vietnam', flag: '🇻🇳', code: 'VN', dial_code: '+84'}
// 43
// :
// {name: 'Indonesia', flag: '🇮🇩', code: 'ID', dial_code: '+62'}
