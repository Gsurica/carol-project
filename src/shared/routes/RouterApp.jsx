import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Moments } from "../../pages/Moments";
import { HowMuchLove } from "../../pages/HowMuchLove";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/home" /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/moments" element={ <Moments /> } />
        <Route path="/howmuchlove" element={ <HowMuchLove /> } />
      </Routes>
    </BrowserRouter>
  )
}
