import {Audio, useCurrentFrame, useVideoConfig} from 'remotion'
import Pill from '../components/Pill'
import useWait from '../hooks/useWait'
import audio from '../../resources/audio.wav'
import audioConfig from '../../resources/audio.wav.json'

interface Props {
	config: any
	episode: number
}

export default function MainScene({ config = audioConfig, episode = 1 }: Props) {
	// Wait for all the resources to load.
	useWait(3)

	// Destructure configuration
	const samples = config.amplitudes
	const durationPerSample = config.duration

	const frame = useCurrentFrame()
	const video = useVideoConfig()
	const minHeight = 30

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
		alignItems: 'center',
		background: colors.backgroundColor,
	}

	const mainStyle = {
		height: video.width,
		width: video.width,
		display: 'flex',
		flexDirection: 'column' as 'column',
		justifyContent: 'space-around',
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

	const episodeCountStyle = {
		position: 'absolute' as 'absolute',
		top: 40,
		right: 80,
		color: 'white',
		fontSize: '9.4rem',
	}

	const pills = samples.map((sample: any, index: number) => {
		const pillStarts = index * durationPerSample
		const pillEnds = pillStarts + durationPerSample
		let localProgress = 0

		if (elapsed >= pillStarts && elapsed < pillEnds) {
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
			<div style={mainStyle}>
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

			<div style={episodeCountStyle}>
				{episode}
			</div>

			<Audio
				src={audio} />
		</div>
	)
}
