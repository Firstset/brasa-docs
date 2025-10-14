'use client'

import React, { useState } from 'react'

interface TabProps {
  title: string
  children: React.ReactNode
}

export function Tab({ children }: TabProps) {
  return <div>{children}</div>
}

interface TabsProps {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[]
}

export function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = React.Children.toArray(children) as React.ReactElement<TabProps>[]

  return (
    <div className="my-6">
      <div className="flex border-b border-gray-200 dark:border-gray-800" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === index
                ? 'border-b-2 border-[var(--brasa-primary)] text-[var(--brasa-primary)]'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            role="tabpanel"
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            hidden={activeTab !== index}
          >
            {activeTab === index && tab.props.children}
          </div>
        ))}
      </div>
    </div>
  )
}
