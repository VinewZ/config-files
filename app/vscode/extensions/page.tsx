import React from 'react';
import shiki from 'shiki'

export const metadata = {
  title: 'VsCode - Extensions'
}

export default async function Extensions() {
  
  const extensionsResponse = await fetch('https://raw.githubusercontent.com/VinewZ/vscodesettings/main/extensions.json')
  const extensions: string = await extensionsResponse.text()

  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon'
  })

  const code = highlighter.codeToHtml(extensions, {lang: 'json'})

  return (
    <>
      <div  
        dangerouslySetInnerHTML={{__html: code}} 
      />
    </>
  );
}