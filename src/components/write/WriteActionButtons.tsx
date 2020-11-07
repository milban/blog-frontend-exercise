import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';

const WriteActionButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5re;
  }
`;
const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

interface WriteActionButtonsProps {
  onCancel?: () => void;
  onPublish?: () => void;
}

const WriteActionButtons: React.FC<WriteActionButtonsProps> = ({
  onCancel,
  onPublish,
}) => {
  return (
    <WriteActionButtonBlock>
      <StyledButton cyan onClick={onPublish}>
        포스트 등록
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonBlock>
  );
};

export default WriteActionButtons;
