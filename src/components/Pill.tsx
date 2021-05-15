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
  // Default background for 100% progress.
	let background: string = activeColor

	if (progress > 0 && progress < 1) {
		background = `linear-gradient(
      90deg,
      ${activeColor} ${progress * 100}%,
      ${passiveColor} ${(1 - progress) * 100}%
    )`
	}

  if (progress === 0) {
    background = passiveColor
  }

	const pillStyle = {
		height,
		width,
		background,
		borderRadius: width / 2,
	}

	return <div style={pillStyle}></div>
}
