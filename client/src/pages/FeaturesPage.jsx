import React from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Boxes,
  CreditCard,
  Bell,
  BarChart3,
  Shield,
  Settings
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Btn from "../components/Btn";
import Card from "../components/Card";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const modules = [
  {
    icon: <LayoutDashboard />,
    title: "Dashboard",
    points: [
      "Total Sales Overview",
      "Monthly Revenue",
      "Pending Payments",
      "Profit & Loss Snapshot",
      "Low Stock Alerts",
      "Top Selling Products",
    ]
  },
  {
    icon: <Users />,
    title: "Customer Management",
    points: [
      "Customer Ledger",
      "Purchase History",
      "Credit Limit Management",
      "Due Payment Tracking",
      "Loyalty Points System",
      "Automated Reminders"
    ]
  },
  {
    icon: <Boxes />,
    title: "Inventory Management",
    points: [
      "Product Listing",
      "Real-Time Stock Tracking",
      "Supplier Management",
      "Purchase Orders",
      "Reorder Alerts",
      "Stock Transfers"
    ]
  },
  {
    icon: <CreditCard />,
    title: "Billing & Invoice",
    points: [
      "Create Invoice",
      "GST / Tax Calculation",
      "Multi-Payment Options",
      "Invoice Download (PDF)",
      "Refund Management"
    ]
  },
  {
    icon: <Bell />,
    title: "Messaging System",
    points: [
      "Payment Due Alerts",
      "Order Status Updates",
      "Billing Confirmation",
      "In-App Notifications",
      "Email / SMS Integration"
    ]
  },
  {
    icon: <BarChart3 />,
    title: "Reports & Analytics",
    points: [
      "Sales Reports",
      "Inventory Reports",
      "Expense Reports",
      "Tax Reports",
      "Profit Margin Analysis"
    ]
  },
  {
    icon: <Shield />,
    title: "Staff & Role Management",
    points: [
      "Staff Accounts",
      "Role-Based Permissions",
      "Attendance Tracking",
      "Activity Logs"
    ]
  },
  {
    icon: <Settings />,
    title: "Platform Owner Panel",
    points: [
      "Organization Management",
      "Subscription Management",
      "Usage Monitoring",
      "Audit Logs",
    
    ]
  }
];

export default function FeaturesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1
          
          className="text-5xl font-bold"
        >
          Features Available For Your Organization Workspace
        </h1>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          BillStack provides complete billing, inventory, customer and reporting
          infrastructure for your organization after workspace onboarding.
        </p>
      </div>

      {/* MODULE GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 pb-20"
      >
        {modules.map((m, i) => (
          <motion.div variants={item} whileHover={{ y: -6 }} key={i}>
            <Card>
              <div className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg mb-3">
                {m.icon}
              </div>
              <h3 className="font-semibold mb-2">{m.title}</h3>
              <ul className="text-sm text-gray-500 space-y-1">
                {m.points.map((p, idx) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-linear-to-r from-blue-600 to-blue-500 rounded-3xl text-white p-12 text-center shadow-xl"
        >
          <h3 className="text-3xl font-semibold">
            Setup Your Organization Workspace Today
          </h3>
          <p className="mt-2 text-sm opacity-90">
            Start managing customers, inventory, billing and reports from one dashboard.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Btn>Register Organization</Btn>
            <Btn outline>View Plans</Btn>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}