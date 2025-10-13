import React from 'react'

type CalloutType = 'info' | 'warn' | 'success' | 'danger'

interface CalloutProps {
  type?: CalloutType
  children: React.ReactNode
}

const iconMap: Record<CalloutType, string> = {
  info: 'ℹ️',
  warn: '⚠️',
  success: '✅',
  danger: '🚨',
}

const colorMap: Record<CalloutType, string> = {
  info: 'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800',
  warn: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800',
  success: 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800',
  danger: 'bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800',
}

export function Callout({ type = 'info', children }: CalloutProps) {
  return (
    <div
      className={`my-4 rounded-lg border-l-4 p-4 ${colorMap[type]}`}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <span className="text-xl" aria-hidden="true">
          {iconMap[type]}
        </span>
        <div className="flex-1 text-sm">{children}</div>
      </div>
    </div>
  )
}
