import React from 'react';

const Hamburger = ({menuCloseOpen}) => {
	
	return(
		<div className="eom-hamburger-wrap">
			<a 
				className="eom-hamburger" 
				href="#" title="Menu" 
				onClick={(e) => menuCloseOpen(e)}
			>
				<span></span>
				<span></span>
				<span></span>
			</a>
		</div>
	)
}

export default Hamburger;