function CornerMarks() {
  const mark = 'absolute h-4 w-4 border-blueprint-line/40'

  return (
    <>
      <span className={`${mark} top-3 left-3 border-t border-l`} aria-hidden="true" />
      <span className={`${mark} top-3 right-3 border-t border-r`} aria-hidden="true" />
      <span className={`${mark} bottom-3 left-3 border-b border-l`} aria-hidden="true" />
      <span className={`${mark} bottom-3 right-3 border-b border-r`} aria-hidden="true" />
    </>
  )
}

export default CornerMarks
