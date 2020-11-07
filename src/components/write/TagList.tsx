import React from 'react';
import styled from 'styled-components';
import TagItem from 'components/write/TagItem';

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

interface TagListProps {
  tags: string[];
  onRemove?: (tag: string) => void;
}

const TagList: React.FC<TagListProps> = ({ tags, onRemove }) => {
  return (
    <TagListBlock>
      {tags.map((tag) => (
        <TagItem key={tag} tag={tag} onRemove={onRemove} />
      ))}
    </TagListBlock>
  );
};

export default TagList;
