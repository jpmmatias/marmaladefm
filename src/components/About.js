import React from 'react';
import Stat from './stat';

const About = (props) => {
	const playCounts = props.mixes.reduce(
		(acc, current) => acc + current.play_count,
		0
	);
	const seconds = props.mixes.reduce(
		(acc, current) => acc + current.audio_length,
		0
	);

	return (
		<div className='ph3 ph4-l'>
			<div className='measure black center lh-copy f4 ph3'>
				<p className='mt0'>
					Marmalade.fm apresenta o que há de melhor em grooves, batidas e world
					music.
				</p>
				<p>
					Quer você goste de hip hop, trip hop, jazz clássico, jazz fusion, beat
					afro ou break beat ... temos tudo o que você precisa!
				</p>
			</div>
			<div className='flex pt3 '>
				<Stat
					{...props}
					statName='Featuring…'
					statData={`${props.mixes.length} mixes`}
				/>
				<Stat {...props} statName='Played…' statData={`${playCounts} times`} />
				<Stat
					{...props}
					statName='With…'
					statData={`${Math.floor(seconds)} seconds`}
				/>
			</div>
		</div>
	);
};

export default About;
