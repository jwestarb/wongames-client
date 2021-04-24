import { screen } from '@testing-library/react'
import 'jest-styled-components'

import { renderWithTheme } from 'utils/tests/helpers'
import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    const { container } = renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a black label when color is passed', () => {
    const { container } = renderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a normal logo when size is default', () => {
    const { container } = renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a bigger logo', () => {
    const { container } = renderWithTheme(<Logo size="large" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a bigger logo without text on mobile if hidOnMobile', () => {
    const { container } = renderWithTheme(<Logo size="large" hideOnMobile />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
