import { Layout } from '@/components/layout'
import { FC } from 'react'
import styled from 'styled-components'

const Test = styled.p`
  font-size: 20px;
  color: red;
`

const Home: FC = () => {
  return (
    <Layout>
      <Test>Under construction, check back by the 20th July</Test>
    </Layout>
  )
}

export default Home
