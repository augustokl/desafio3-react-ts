import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
}

interface LinkRouteProps {
  selected?: true | false;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LinkRoute = styled(Link)<LinkRouteProps>`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s;
  border-bottom: ${props => (props.selected ? '2px solid #ff872c' : 'none')};
  opacity: ${props => (props.selected ? '1' : '0.4')};
  padding-bottom: 5px;

  & + a {
    margin-left: 32px;
  }

  &:hover {
    opacity: 0.6;
  }
`;
