interface JsonViewerProps {
  data: unknown
  title?: string
}

function syntaxHighlight(json: string): string {
  return json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      (match) => {
        let cls = 'text-[#a78bfa]'
        if (/^"/.test(match)) {
          if (/:$/.test(match)) cls = 'text-[#00d4ff]'
          else cls = 'text-[#00ffcc]'
        } else if (/true|false/.test(match)) {
          cls = 'text-[#fbbf24]'
        } else if (/null/.test(match)) {
          cls = 'text-[#ef4444]'
        }
        return `<span class="${cls}">${match}</span>`
      }
    )
}

export default function JsonViewer({ data, title }: JsonViewerProps) {
  const json = JSON.stringify(data, null, 2)
  const highlighted = syntaxHighlight(json)

  return (
    <div className="bg-[#0a0a0f] border border-[#1a1f2e] rounded-xl overflow-hidden">
      {title && (
        <div className="px-4 py-2 border-b border-[#1a1f2e] flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
          <div className="w-3 h-3 rounded-full bg-[#fbbf24]" />
          <div className="w-3 h-3 rounded-full bg-[#00ffcc]" />
          <span className="ml-2 text-xs text-[#64748b] font-mono">{title}</span>
        </div>
      )}
      <pre
        className="p-4 text-xs font-mono overflow-auto max-h-96 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  )
}
