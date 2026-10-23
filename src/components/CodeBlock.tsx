import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import Prism from 'prismjs';
import 'prismjs/components/prism-java.js';

interface CodeBlockProps {
  code: string;
  darkMode: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, darkMode }) => {
  const theme = darkMode ? themes.vsDark : themes.vsLight;

  return (
    <Highlight
      prism={Prism}
      theme={theme}
      code={code.trimEnd()}
      language="java"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} m-0 rounded-lg border p-4 text-xs sm:text-[13.5px] leading-relaxed overflow-x-auto font-mono ${
            darkMode ? 'border-slate-800' : 'border-slate-200'
          }`}
          style={{
            ...style,
            backgroundColor: darkMode ? '#020617' : '#f8fafc',
          }}
        >
          <code>
            {tokens.map((line, lineIndex) => {
              const lineProps = getLineProps({ line });

              return (
                <div
                  key={lineIndex}
                  {...lineProps}
                  style={{ ...lineProps.style, minHeight: '1.625em' }}
                >
                  {line.map((token, tokenIndex) => (
                    <span key={tokenIndex} {...getTokenProps({ token })} />
                  ))}
                </div>
              );
            })}
          </code>
        </pre>
      )}
    </Highlight>
  );
};
