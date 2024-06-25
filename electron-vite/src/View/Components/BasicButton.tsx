const BasicButton = (
  {text, color, size}: {
    text: string
    color: string
    size: string
  }
) => {
  return (
    <>
      <button className={`btn btn-${color} btn-wide`}>{text}</button>
    </>
  )
}

export default BasicButton