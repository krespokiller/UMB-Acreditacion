// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import { action } from '@storybook/addon-actions'

import ProgramCard from './ProgramCard'

export default { component: ProgramCard }

const Template = (args) => <ProgramCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  imageSrc: 'https://placekitten.com/400/300',
  active: true,
  programType: 'POSTGRADO',
  headquarter: 'Bogotá',
  classification: 'ACREDITADO',
  title: 'Enfermeria',
  handleClick: () => action('Clicked'),
}
export const Secondary = Template.bind({})
Secondary.args = {
  imageSrc: 'https://placekitten.com/400/300',
  active: false,
  programType: 'POSTGRADO',
  headquarter: 'Bogotá',
  classification: 'ENESPERA',
  title: 'Enfermeria',
  handleClick: () => action('Clicked'),
}
