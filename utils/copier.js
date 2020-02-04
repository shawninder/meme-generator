export default function copier (ref) {
  return () => {
    if (ref.current) {
      ref.current.select()
      document.execCommand('copy')
    }
  }
}
