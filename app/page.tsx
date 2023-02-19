import shiki from 'shiki'


const markdown: string = `
  # Purpose

  Project created with a purpose to study Next 13 new features and to store some of my
  useful config files so i can get them from any pc that i log-in.
`.trim()



export default async function Home() {

  const highlighter = await shiki.getHighlighter({
    theme: 'rose-pine-moon'
  })

  const code = highlighter.codeToHtml(markdown, {lang: 'md'})

  return (
    <div dangerouslySetInnerHTML={{__html: code}} />
  )
}
