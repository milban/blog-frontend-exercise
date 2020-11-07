import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import TagList from 'components/write/TagList';

const TagBoxBlock = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray[2]};
  padding-top: 2rem;
  
  h4 {
  color: ${palette.gray[8]}
  margin-top: 0;
  margin-bottom: 0.5rem;
  }
`;
const TagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid ${palette.gray[9]};
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }

  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: ${palette.gray[8]};
    color: white;
    font-weight: bold;
    &:hover {
      background: ${palette.gray[6]};
    }
  }
`;

const TagBox: React.FC = () => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState<string[]>([]);

  const insertTag = useCallback((tag: string) => {
    if (!tag) {
      return;
    }
    if (localTags.includes(tag)) {
      return;
    }
    setLocalTags((localTags) => [...localTags, tag]);
  }, []);

  const onRemove = useCallback((tag: string) => {
    setLocalTags((localTags) =>
      localTags.filter((localTag) => localTag !== tag),
    );
  }, []);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setInput(event.target.value);
    },
    [],
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault();
      insertTag(input.trim());
      setInput('');
    },
    [input, insertTag],
  );

  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm onSubmit={onSubmit}>
        <input
          placeholder="태그를 입력하세요"
          value={input}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

export default TagBox;
