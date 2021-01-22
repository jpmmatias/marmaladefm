import React from 'react';
import PlayButton from './PlayButton';
import PlayMix from './PlayMix';

const Featuredmix = ({ name, pictures = {}, ...props }) => {
	console.log(props);
	return (
		<div
			className='w-50-l vh-100 flex items-center jusify-center cover bg-center bg-featured pad-bottom fixed left-0 mix-overlay'
			style={{ backgroundImage: `url(${pictures.extra_large})` }}
		>
			<PlayMix {...props}>
				<div className='w-100 tc pa3 relative z-3'>
					<p className='b  biryani f6 white ttu'>Mix em Destaque</p>
					<h1 className='mix-title mt0 mb2 anton white ttu '>{name}</h1>
					<PlayButton />
				</div>
			</PlayMix>
		</div>
	);
};

export default Featuredmix;

