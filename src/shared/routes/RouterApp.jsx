import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../../pages/Home";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/home" /> } />
        <Route path="/home" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  )
}
