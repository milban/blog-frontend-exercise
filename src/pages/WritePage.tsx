import React from 'react';
import Responsive from 'components/common/Responsive';
import Editor from 'components/write/Editor';

const WritePage: React.FC = () => {
  return (
    <Responsive>
      <Editor />
    </Responsive>
  );
};

export default WritePage;
