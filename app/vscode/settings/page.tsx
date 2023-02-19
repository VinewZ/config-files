import React from 'react';
import shiki from 'shiki'

export const metadata = {
  title: 'VsCode - Settings'
}

export default async function Settings() {
  
  const settingsResponse = await fetch('https://raw.githubusercontent.com/VinewZ/vscodesettings/main/settings.json', {next: {
    revalidate: 60,
  }})
  
  const settings: string = await settingsResponse.text()

  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon'
  })

  const code = highlighter.codeToHtml(settings, {lang: 'json'})

  return (
    <>
      <div  
        dangerouslySetInnerHTML={{__html: code}} 
      />
    </>
  );
}