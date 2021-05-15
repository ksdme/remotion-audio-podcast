import {Composition} from 'remotion';
import MainScene from './scenes/MainScene'

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="MainScene"
				component={MainScene}
				durationInFrames={1800}
				fps={30}
				width={1080}
				height={1080}
			/>
		</>
	);
};
