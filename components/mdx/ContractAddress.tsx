'use client'

import React, { useState } from 'react'

interface ContractAddressProps {
  chain: string
  address: string
  label?: string
}

export function ContractAddress({ chain, address, label }: ContractAddressProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="my-4 rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-gray-50 dark:bg-gray-900">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          {label && (
            <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
              {label}
            </div>
          )}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-500">
              {chain}
            </span>
            <code className="text-sm font-mono text-gray-900 dark:text-gray-100 break-all">
              {address}
            </code>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={copied ? 'Copied' : 'Copy address'}
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
    </div>
  )
}
