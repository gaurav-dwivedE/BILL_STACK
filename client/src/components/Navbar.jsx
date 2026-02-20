import React from 'react';
import  Btn  from './Btn';
import { Menu } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();
  return (
  <div className="w-full border-b bg-white sticky top-0 z-50 border-gray-200">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
        <div className="w-6 h-6 bg-blue-600 rounded-md" />
        BILLSTACK
      </div>
      <div className="hidden md:flex gap-8 text-sm text-gray-600">
        <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
        <NavLink to="/features" className="hover:text-blue-600">Features</NavLink>
        <span>Pricing</span>
        <span>Solutions</span>
        <span>Enterprise</span>
      </div>
      <div  className="flex items-center gap-3">
       <div className='cursor-pointer' onClick = {() => navigate("/login")}> <Btn outline>Login</Btn> </div>
        <Btn >Get Started</Btn>
        <Menu className="md:hidden" />
      </div>
    </div>
  </div>
)};