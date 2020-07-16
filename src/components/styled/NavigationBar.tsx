import { FC } from 'react'
import styled from 'styled-components'

// TODO fix when text becomes bold it displaces other items
const StyledNavigationBar = styled.ul`
  /* 'li' dimensions */
  --item-spacing: ${({ theme }) => theme.size.navHSpaceLi};
  --padding-tb: ${({ theme }) => theme.size.navPadTB};
  --padding-lr: ${({ theme }) => theme.size.navPadLR};

  /* 'a' underline */
  --width-start: 70%;
  --width-end: 90%;

  display: flex;
  align-items: center;
  margin-right: auto;

  li {
    display: flex;

    /* li item spacing, and extra spacing for first to keep equal */
    margin-left: var(--item-spacing);
    &:first-child {
      margin-left: calc(var(--item-spacing) + var(--padding-lr));
    }

    a {
      display: flex;
      justify-content: center;
      position: relative;
      z-index: 1;
      font-size: 1.4rem;
      font-weight: 400;
      user-select: none;
      padding: var(--padding-tb) var(--padding-lr);
      padding-bottom: calc(var(--padding-tb) * 2);
      /* color: $/{({ theme }) => theme.colour.textLight}; */
      letter-spacing: 0.07em;

      &::before {
        transition: all 0.1s ease-in-out;
        content: '';
        position: absolute;
        z-index: -1;
        background: white;
        height: ${({ theme }) => theme.size.navRouteBorderBotThickness};
        bottom: 0px;
        width: var(--width-start);
        /* background: $/{({ theme }) => theme.colour.primaryDark}; */
        opacity: 0;
      }

      &:hover,
      &.active-link {
        color: ${({ theme }) => theme.colour.text};
      }

      &.active-link::before,
      &:hover::before {
        opacity: 1;
        width: var(--width-end);
      }
    }
  }
`

export const NavigationBar: FC = ({ children, ...props }) => {
  return <StyledNavigationBar {...props}>{children}</StyledNavigationBar>
}
