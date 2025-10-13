import React from 'react'

type BadgeTone = 'neutral' | 'success' | 'warning' | 'critical'

interface BadgeProps {
  tone?: BadgeTone
  children: React.ReactNode
}

const toneMap: Record<BadgeTone, string> = {
  neutral:
    'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600',
  success:
    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300 dark:border-green-700',
  warning:
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700',
  critical:
    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-300 dark:border-red-700',
}

export function Badge({ tone = 'neutral', children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${toneMap[tone]}`}
    >
      {children}
    </span>
  )
}
