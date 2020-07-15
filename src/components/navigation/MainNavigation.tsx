import Link from 'next/link'
import styled from 'styled-components'

export interface IRouteConfigItem {
  path: string
  slug: string
}

const routeConfig: IRouteConfigItem[] = [
  {
    path: '/',
    slug: 'Jordan Coppard',
  },
  {
    path: '/resume',
    slug: 'Resume',
  },
  {
    path: '/portfolio',
    slug: 'Portfolio',
  },
  {
    path: '/about',
    slug: 'About',
  },
  {
    path: '/knowledge',
    slug: 'Knowledge',
  },
]

export const MainNavigation = () => {
  const routes = routeConfig.map((props) => {
    return (
      <li key={props.path}>
        <Link href={props.path}>
          <a>{props.slug}</a>
        </Link>
      </li>
    )
  })

  return <NavigationContainer>{routes}</NavigationContainer>
}

const NavigationContainer = styled.nav`
  font-size: 20px;
  color: red;
`
