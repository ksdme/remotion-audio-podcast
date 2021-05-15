interface Props {
  color?: string
  height: number
  width?: number
}

export default function Pill({ height, width = 60, color = 'white' }: Props) {
  const pillStyle = {
    height,
    width,
    background: color,
    borderRadius: width / 2,
  }

  return (
    <div style={pillStyle}></div>
  )
}
