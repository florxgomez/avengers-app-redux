import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className='pa2'>
		<input 
			className='pa3 ba b--silver bg-light-gray' 
			type='search' 
			placeholder='search Avenger'
			onChange={searchChange}/>
		</div>
	);
}

export default SearchBox;