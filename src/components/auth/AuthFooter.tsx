import styled from 'styled-components';
import palette from 'lib/styles/palette';

const AuthFooter = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

export default AuthFooter;
