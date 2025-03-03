import React, { memo } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const Tabs: React.FC<TabsProps> = memo(({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex border-b mb-4 sm:mb-6 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-3 py-2 text-sm whitespace-nowrap ${
            activeTab === tab.id 
              ? 'border-b-2 border-blue-500 text-blue-500 font-medium' 
              : 'text-gray-500'
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
});

Tabs.displayName = 'Tabs';

export default Tabs;