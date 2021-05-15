import {useCurrentFrame, useVideoConfig} from 'remotion'
import Pill from '../components/Pill'
import useWait from '../hooks/useWait'

const amplitudes = [
	95, 6, 89, 66, 21, 80, 57, 79, 60, 92, 17, 36, 44, 11, 3, 68, 28, 19, 99, 14,
	81, 20, 40, 65, 79, 62, 25, 90, 80, 59,
]

interface Props {
	samples: number[]
	durationPerSample: number
}

export default function MainScene({ samples = amplitudes, durationPerSample = 2 }: Props) {
	// Wait for all the resources to load.
	useWait(3)

	const frame = useCurrentFrame()
	const video = useVideoConfig()
	const minHeight = 40

	// Calculations
	const elapsed = frame / video.fps

	// Styling
	const colors = {
		backgroundColor: 'rgb(53, 211, 153)',
		activeColor: 'rgb(255, 255, 255)',
		passiveColor: 'rgb(174, 237, 214)',
	}

	const canvasStyle = {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column' as 'column',
		justifyContent: 'space-around',
		background: colors.backgroundColor,
	}

	const pillSectionStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}

	const pillContainerStyle = {
		width: '86%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 12,
	}

	const headerStyle = {
		fontWeight: 900,
		fontSize: '9.4rem',
		lineHeight: '9.4rem',
		textAlign: 'center' as 'center',
	}

	const headerSectionStyle = {
		marginLeft: 'auto',
		marginRight: 'auto',
	}

	const headerActiveColor = {
		color: colors.activeColor,
	}

	const headerLeftPassiveColor = {
		textAlign: 'left' as 'left',
		color: colors.passiveColor,
	}

	const headerRightPassiveColor = {
		textAlign: 'right' as 'right',
		color: colors.passiveColor,
	}

	const pills = samples.map((sample, index) => {
		const pillStarts = index * durationPerSample
		const pillEnds = pillStarts + durationPerSample
		let localProgress = 0

		if (elapsed > pillStarts && elapsed < pillEnds) {
			localProgress = (elapsed - pillStarts) / durationPerSample
		}

		if (elapsed >= pillEnds) {
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
			<div style={headerSectionStyle}>
				<div style={headerStyle}>
					<div style={headerLeftPassiveColor}>the</div>
					<div style={headerActiveColor}>unprepared</div>
					<div style={headerRightPassiveColor}>podcast</div>
				</div>
			</div>

			<div style={pillSectionStyle}>
				<div style={pillContainerStyle}>{pills}</div>
			</div>
		</div>
	)
}
