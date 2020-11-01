import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

/* typescript는 빌드 시점에만 작동하고 prop-types는 런타임 시점에 작동
  https://github.com/yannickcr/eslint-plugin-react/issues/2275
  https://ko.reactjs.org/docs/typechecking-with-proptypes.html
 */
Button.propTypes = {
  children: PropTypes.element,
};

export default Button;
