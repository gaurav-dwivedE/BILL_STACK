import { motion } from "framer-motion";
import { BarChart3, Boxes, CreditCard } from "lucide-react";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Btn from "../components/Btn";

const DashboardMock = () => (
  <div className="bg-white rounded-3xl shadow-2xl p-5 border border-gray-200">
    <div className="flex gap-2 mb-4">
      <div className="w-3 h-3 bg-red-400 rounded-full" />
      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
      <div className="w-3 h-3 bg-green-400 rounded-full" />
    </div>
    <div className="grid grid-cols-3 gap-3 mb-4">
      <div className="h-10 bg-blue-100 rounded-lg" />
      <div className="h-10 bg-green-100 rounded-lg" />
      <div className="h-10 bg-yellow-100 rounded-lg" />
    </div>
    <div className="h-40 flex items-end gap-3">
      <div className="bg-blue-100 w-12 h-16 rounded" />
      <div className="bg-blue-200 w-12 h-20 rounded" />
      <div className="bg-blue-600 w-12 h-32 rounded" />
      <div className="bg-blue-200 w-12 h-24 rounded" />
      <div className="bg-blue-100 w-12 h-28 rounded" />
    </div>
  </div>
);

const Hero = () => (
  <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
    <div>
      
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
        Scale Your
        <br /> Business with
        <span className="text-blue-600"> Multi-Tenant</span> Billing
      </h1>
      <p className="text-gray-500 mt-4 max-w-md">
        The all-in-one stack to manage inventory, automate invoicing, and oversee
        multiple business entities from a single unified dashboard.
      </p>
      <div className="flex gap-4 mt-6">
        <Btn>Get Started Free →</Btn>
        <Btn outline>Request Demo</Btn>
      </div>
      <div className="flex items-center gap-3 mt-6">
        <div className="flex -space-x-2">
          <div className="w-7 h-7 rounded-full bg-gray-300 border-2  border-white" />
          <div className="w-7 h-7 rounded-full bg-gray-400 border-2  border-white" />
          <div className="w-7 h-7 rounded-full bg-gray-500 border-2  border-white" />
        </div>
        <span className="text-sm text-gray-500">Joined by <b>10k+</b> companies</span>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <DashboardMock />
    </motion.div>
  </div>
);

const TrustedLogos = () => (
  <div className="border-y py-10 text-center text-gray-400 border-gray-200 text-xs">
    Built to support billing operations across multiple business types
    <div className="flex justify-center gap-10 mt-6 text-gray-500 text-sm">
     
      <span>Retail Stores</span>
      <span>SaaS Companies</span>
      <span>Wholesalers</span>
      <span>Service Providers</span>
      <span>Distributors</span>
    
    </div>
  </div>
);

const Features = () => (
  <div className="max-w-7xl mx-auto px-6 py-20 text-center">
    <p className="text-blue-600 text-xs font-semibold mb-2">POWERFUL FEATURES</p>
    <h2 className="text-4xl font-bold">Built for the complexity of modern business</h2>
    <p className="text-gray-500 mt-2 max-w-xl mx-auto">
      Everything you need to manage global billing, complex inventory, and
      multiple legal entities in one place.
    </p>
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {[{
        icon: <Boxes />,
        title: "Multi-Tenancy",
        desc: "Isolated data environments for global operations and client portfolios."
      },{
        icon: <BarChart3 />,
        title: "Inventory Management",
        desc: "Real-time tracking integrated directly with billing cycles."
      },{
        icon: <CreditCard />,
        title: "Automated Billing",
        desc: "Flexible subscription models and one-time payments."
      }].map((f,i)=> (
        <Card key={i}>
          <div className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg mb-3">
            {f.icon}
          </div>
          <h3 className="font-semibold">{f.title}</h3>
          <p className="text-sm text-gray-500 mt-2">{f.desc}</p>
        </Card>
      ))}
    </div>
  </div>
);

const CTA = () => (
  <div className="max-w-6xl mx-auto px-6 py-16">
    <div className="bg-linear-to-r from-blue-600 to-blue-500 rounded-3xl text-white p-12 text-center shadow-xl">
      <h3 className="text-3xl font-semibold">
       Take Full Control of Your Business Billing Ecosystem
      </h3>
      <p className="mt-2 text-sm opacity-90">
        Manage invoices, inventory, customers, and multi-branch operations from one powerful platform built for modern businesses.
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <Btn>Get Started Now</Btn>
        <Btn outline>Talk to Sales</Btn>
      </div>
    </div>
  </div>
);


export default function BillStackLanding() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <TrustedLogos />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}