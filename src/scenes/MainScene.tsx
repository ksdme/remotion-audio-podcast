import {useCurrentFrame, useVideoConfig} from 'remotion'
import Pill from '../components/Pill'

const amplitudes = [
	95, 6, 89, 66, 21, 80, 57, 79, 60, 92, 17, 36, 44, 11, 3, 68, 28, 19, 99, 14,
	81, 20, 40, 65, 79, 62, 25, 90, 80, 59,
]

interface Props {
	samples: number[]
	durationPerSample: number
}

export default function MainScene({ samples = amplitudes, durationPerSample = 2 }: Props) {
	const frame = useCurrentFrame()
	const video = useVideoConfig()
	const minHeight = 20

	// Calculations
	const elapsed = frame / video.fps

	// Styling
	const colors = {
		backgroundColor: '#35D399',
		activeColor: 'white',
		passiveColor: 'rgba(255, 255, 255, 0.6)',
	}

	const canvasStyle = {
		height: '100%',
		width: '100%',
		background: colors.backgroundColor,
	}

	const pillContainerStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 12,
	}

	const pillss = samples.map((sample, index) => {
		const pillStarts = index * durationPerSample
		const pillEnds = pillStarts + durationPerSample
		let localProgress = 0

		if (elapsed > pillStarts && elapsed < pillEnds) {
			localProgress = (elapsed - pillStarts) / durationPerSample
		}

		if (elapsed > pillEnds) {
			localProgress = 1
		}

		return (
			<Pill
				key={index}
				height={sample + minHeight}
				progress={localProgress}
				activeColor={colors.activeColor}
				passiveColor={colors.passiveColor}
			/>
		)
	})

	return (
		<div style={canvasStyle}>
			<div style={pillContainerStyle}>{pillss}</div>
		</div>
	)
}
