import Pill from '../components/Pill'

export default function MainScene() {
	const colors = {
		backgroundColor: '#35D399',
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

	return (
		<div style={canvasStyle}>
			<div style={pillContainerStyle}>
				<Pill height={200} />
				<Pill height={300} />
				<Pill height={400} />
				<Pill height={500} />
				<Pill height={200} />
				<Pill height={200} />
				<Pill height={300} />
			</div>
		</div>
	)
}
