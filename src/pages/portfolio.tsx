import { Layout } from '@/components/layout'
import { FC } from 'react'
import styled from 'styled-components'

const Test = styled.p`
  font-size: 20px;
  color: red;
`

const Portfolio: FC = () => {
  return (
    <Layout>
      <Test>Portfolio</Test>
    </Layout>
  )
}

export default Portfolio
