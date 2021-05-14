import { Story, Meta } from '@storybook/react/types-6-0'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">
    <h1>Only on Dektop</h1>
  </MediaMatch>
)

export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">
    <h1>Only on Mobile</h1>
  </MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
