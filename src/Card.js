import React from 'react';

const Card = (props) => {
	const { name, avenger, src } = props;
	return (
		<div className ='tc card dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='' src={src} height='300' width='200'/>
			<div>
				<h2 className='white'>{avenger}</h2>
				<p className='white'>{name}</p>
			</div>
		</div>
	);
}

export default Card;
