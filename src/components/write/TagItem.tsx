import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';

const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[6]};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

interface TagItemProps {
  tag: string;
  onRemove?: (tag: string) => void;
}

const TagItem: React.FC<TagItemProps> = ({ tag, onRemove }) => (
  <Tag onClick={() => onRemove?.(tag)}>#{tag}</Tag>
);

export default React.memo(TagItem);
