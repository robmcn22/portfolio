// To be used in future projects

import React, { useState } from 'react';

export default function DashboardLayout({ dashboardData }) {
  const [activeTab, setActiveTab] = useState(dashboardData.tabs[0]?.id);

  return (
    <div className="w-full space-y-8">
      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dashboardData.kpis.map((kpi, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-sm font-medium text-gray-500">{kpi.label}</span>
            <div className="text-3xl font-extrabold text-gray-900 mt-2">{kpi.value}</div>
          </div>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 flex space-x-8">
        {dashboardData.tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 font-medium text-sm transition-colors border-b-2 ${
              activeTab === tab.id
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panel Display */}
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
        {dashboardData.tabs.find((t) => t.id === activeTab)?.content}
      </div>
    </div>
  );
}