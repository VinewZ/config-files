import React from 'react';
import shiki from 'shiki'

export const metadata = {
  title: 'Terminal - General'
}

const markdown: string = `
  # General

  Currently I'm using the combo Powershell + Oh My Posh in my terminal.

  - Windows Powershell: https://learn.microsoft.com/pt-br/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.3
  
  -- Color scheme: Campbell
  -- Font-family: Fira code NF

  - Oh My Posh: https://ohmyposh.dev

  ---

  For the theme, I chose Rainier - Retro variant, but i change it constantly: 

  Theme: https://github.com/joytrekker/rainier-syntax-theme
`.trim()

export default async function General() {
  
  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon'
  })

  const code = highlighter.codeToHtml(markdown, {lang: 'md'})

  return (
    <div dangerouslySetInnerHTML={{__html: code}} />
  );
}