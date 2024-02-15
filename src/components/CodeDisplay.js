import React from 'react';
import { CodeBlock } from 'react-code-blocks';

function CodeDisplay({ code }) {
  return (
    <div>
      <CodeBlock
        text={code}
        language="jsx"
        showLineNumbers={false}
        wrapLines={true}
      />
    </div>
  );
}

export default CodeDisplay;
