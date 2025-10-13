import React from 'react'

interface StepProps {
  title: string
  children: React.ReactNode
}

export function Step({ title, children }: StepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <h4 className="font-semibold text-base mb-2">{title}</h4>
        <div className="text-sm text-gray-700 dark:text-gray-300">{children}</div>
      </div>
    </div>
  )
}

interface StepsProps {
  children: React.ReactElement<StepProps> | React.ReactElement<StepProps>[]
}

export function Steps({ children }: StepsProps) {
  const steps = React.Children.toArray(children) as React.ReactElement<StepProps>[]

  return (
    <div className="my-6 space-y-6">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brasa-primary)] text-white font-semibold text-sm">
              {index + 1}
            </div>
          </div>
          <div className="flex-1 pt-1">{step}</div>
        </div>
      ))}
    </div>
  )
}
