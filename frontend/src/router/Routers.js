import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Login } from '../components/Login/Login';
import { Product } from '../components/Product/Product';
import { SidebarContent } from '../components/Sidebar/SidebarContent';
 
import { Sidebar } from '../components/Sidebar/Sidebar';
export const Routers = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Content" element={<Sidebar content={<SidebarContent/>}/>} />
                <Route path="/Content/Product" element={<Sidebar content={<Product/>}/>} />
                
                 
            </Routes>
        </BrowserRouter>
  )
}
