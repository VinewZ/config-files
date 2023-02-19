import React from 'react';
import shiki from 'shiki'

export const metadata = {
  title: 'Terminal - Oh My Posh'
}

const markdown: string = `
# Oh-my-posh config

- Font-family: Fira code NF

## Init Oh My Posh with Tonybaloney theme

- Create profile config file
  -- notepad $PROFILE
  -- paste:
    --- oh-my-posh init pwsh --config 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/tonybaloney.omp.json' | Invoke-Expression
`.trim()

export default async function Omp() {
  
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon'
  })

  const code = highlighter.codeToHtml(markdown, {lang: 'md'})

  return (
    <div dangerouslySetInnerHTML={{__html: code}} />
  );
}