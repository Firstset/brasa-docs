import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import { Callout } from 'nextra/components'

import { Badge, ContractAddress, Steps, Step, Tabs, Tab } from './components/mdx'

export function useMDXComponents(components = {}) {
  return getThemeComponents({
    ...components,
    Callout,
    Tabs,
    Tab,
    Steps,
    Step,
    Badge,
    ContractAddress,
  })
}
