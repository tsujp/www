import { Layout } from '@/components/layout'
import { FC } from 'react'
import styled from 'styled-components'

const Test = styled.p`
  font-size: 20px;
  color: red;
`

const About: FC = () => {
  return (
    <Layout>
      <Test>About</Test>
    </Layout>
  )
}

export default About
