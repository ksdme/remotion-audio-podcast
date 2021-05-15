interface Props {
	activeColor?: string
	passiveColor?: string
	height: number
	width?: number
	progress?: number
}

export default function Pill({
	height,
	width = 60,
	activeColor = 'white',
	passiveColor = 'black',
	progress = 1,
}: Props) {
	let color = progress === 0
    ? passiveColor
    : activeColor

	const containerStyle = {
		height,
		width,
    background: passiveColor,
    borderRadius: width / 2,
    overflow: 'hidden',
	}

  const pillStyle = {
    width: progress * 100,
    height: '100%',
    background: color,
  }

	return (
    <div style={containerStyle}>
      <div style={pillStyle}></div>
    </div>
  )
}
