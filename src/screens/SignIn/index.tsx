import { Container, Slogan, Title } from './styles'

import bgImg from '../../assets/background.png'

export function SignIn() {
  return (
    <Container source={bgImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
    </Container>
  )
}
