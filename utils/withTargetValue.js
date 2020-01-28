export default (setVal) => {
  return (event) => {
    setVal(event.target.value)
  }
}
