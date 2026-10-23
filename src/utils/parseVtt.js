function toSeconds(stamp) {
  const cleaned = stamp.trim().replace(',', '.').split(/\s+/)[0]
  const parts = cleaned.split(':')
  if (parts.length < 2 || parts.length > 3) return NaN
  const seconds = Number(parts.pop())
  const minutes = Number(parts.pop())
  const hours = parts.length ? Number(parts[0]) : 0
  if ([hours, minutes, seconds].some((value) => Number.isNaN(value))) return NaN
  return hours * 3600 + minutes * 60 + seconds
}

function cueText(lines) {
  return lines
    .join(' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim()
}

export function parseVtt(source) {
  const text = String(source)
    .replace(/^\uFEFF/, '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
  const cues = []

  for (const block of text.split(/\n{2,}/)) {
    const lines = block
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
    const timeIndex = lines.findIndex((line) => line.includes('-->'))
    if (timeIndex === -1) continue

    const [rawStart, rawEnd] = lines[timeIndex].split('-->')
    if (!rawEnd) continue
    const start = toSeconds(rawStart)
    const end = toSeconds(rawEnd)
    const textContent = cueText(lines.slice(timeIndex + 1))
    if (Number.isNaN(start) || Number.isNaN(end) || !textContent) continue
    cues.push({ start, end, text: textContent })
  }

  return cues
}
