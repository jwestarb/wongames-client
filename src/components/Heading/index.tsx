import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type Headingprops = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: 'primary' | 'secondary' //Todo: Se utiliza o type LineColors, quebra no Storybook
  size?: 'small' | 'medium' | 'huge'
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'medium'
}: Headingprops) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    size={size}
  >
    {children}
  </S.Wrapper>
)

export default Heading
