import Pill from '../components/Pill'

const samples = [
	{ height: 200, progress: 1 },
	{ height: 300, progress: 1 },
	{ height: 200, progress: 1 },
	{ height: 100, progress: 1 },
	{ height: 400, progress: 1 },
	{ height: 300, progress: 0.5 },
	{ height: 400, progress: 0 },
	{ height: 500, progress: 0 },
	{ height: 200, progress: 0 },
	{ height: 120, progress: 0 },
	{ height: 80, progress: 0 },
]

export default function MainScene() {
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

	const pills = samples.map((sample, index) => {
		return (
			<Pill
				key={index}
				height={sample.height}
				progress={sample.progress}
				activeColor={colors.activeColor}
				passiveColor={colors.passiveColor} />
		)
	})

	return (
		<div style={canvasStyle}>
			<div style={pillContainerStyle}>
				{pills}
			</div>
		</div>
	)
}
