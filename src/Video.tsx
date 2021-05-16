import './index.css'
import {Composition} from 'remotion'
import MainScene from './scenes/MainScene'
import audio from '../resources/audio.wav.json'

export const RemotionVideo: React.FC = () => {
	const fps = 30
	const totalDuration = audio.duration * audio.amplitudes.length
	const totalDurationInFrames = Math.ceil(totalDuration * fps)

	return (
		<>
			<Composition
				id="MainScene"
				component={MainScene}
				durationInFrames={totalDurationInFrames}
				fps={fps}
				width={1080}
				height={1920}
			/>
		</>
	);
};
