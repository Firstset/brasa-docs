import { Callout, Tabs, Tab, Badge, Steps, Step, ContractAddress } from './components/mdx'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useMDXComponents(components: any) {
  return {
    ...components,
    Callout,
    Tabs,
    Tab,
    Badge,
    Steps,
    Step,
    ContractAddress,
  }
}
