import React from "react";

export default function Footer (){
    return (
  <div className="border-t pt-10 pb-6 text-sm border-gray-200 text-gray-500">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
      <div>
        <h4 className="font-semibold text-gray-800">BILLSTACK</h4>
        <p className="mt-2 text-xs">
          The ultimate infrastructure for multi-tenant SaaS billing and inventory management.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">Product</h4>
        <ul className="mt-2 space-y-1">
          <li>Feature List</li>
          <li>Pricing</li>
          <li>Integrations</li>
          <li>Changelog</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">Developers</h4>
        <ul className="mt-2 space-y-1">
          <li>Documentation</li>
          <li>API Reference</li>
          <li>Status</li>
          <li>Github</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">Company</h4>
        <ul className="mt-2 space-y-1">
          <li>About Us</li>
          <li>Careers</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl text-center mx-auto px-6 mt-8 flex justify-between text-xs text-gray-400">
      <span>© 2024 BillStack Inc. All rights reserved.</span>
      <span className="text-green-500">● All systems operational</span>
    </div>
  </div>
)};