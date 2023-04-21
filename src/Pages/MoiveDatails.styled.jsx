import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CardContainer = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 20px;
`;

export const MovieInfo = styled.div`
  padding-left: 20px;
`;

export const AditionaList = styled.ul`
  padding-left: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const AditionaTittle = styled.h2`
  padding-left: 40px;
  font-size: 18px;
`;

export const GoBack = styled(NavLink)`
display: block
  font-size: 14px;
  color: black;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    color: blue;
    text-decoration: underline;
  }
`;
