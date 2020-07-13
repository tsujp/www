import Head from 'next/head'
import { FC } from 'react'
import styled from 'styled-components'

const Test = styled.p`
  font-size: 20px;
  color: red;
`

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Test Head</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Test>howdy</Test>
    </>
  )
}

export default Home
