import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderNav = styled.header`
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
  display: flex;
  margin-bottom: 20px;
  border-bottom: 2px solid black;
`;

export const StyledLink = styled(NavLink)`
display: block
  padding: 8px 14px;
  font-size: 18px;
  color: black;
  text-decoration: none;
  margin-right: 10px;

  &: hover {
   text-decoration: underline;
  }

  &.active {
    color: blue;
  }
`;
