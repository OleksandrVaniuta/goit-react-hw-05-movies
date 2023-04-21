import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: block
  padding: 5px 2px;
  font-size: 14px;
  color: black;
  text-decoration: none;
  margin-right: 10px;

  &: hover {
   text-decoration: underline;
   color: blue;
  }

`;

export const InputFilter = styled.input`
  margin-left: 20px;
  font-size: 20px;
`;

export const SubmitBtn = styled.button`
  font-size: 20px;
  &:hover {
    color: blue;
  }
`;
