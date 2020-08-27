export default function withTargetValue (setVal) {
  return (event) => {
    setVal(event.target.value)
  }
}
