import { Layout } from '@/components/layout'
import { FC } from 'react'
import styled from 'styled-components'

const Test = styled.p`
  font-size: 20px;
  color: red;
`

const Resume: FC = () => {
  return (
    <Layout>
      <Test>Resume</Test>
    </Layout>
  )
}

export default Resume
