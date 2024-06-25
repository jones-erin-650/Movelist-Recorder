const BasicButton = (
  {text, color, size}: {
    text: string
    color: string
    size: string
  }
) => {
  return (
    <>
      <button className={`btn btn-${color} btn-${size}`}>{text}</button>
    </>
  )
}

export default BasicButton