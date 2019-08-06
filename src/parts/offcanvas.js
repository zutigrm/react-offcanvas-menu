import React from 'react';
import MenuItems from './../navigation/items';
import Hamburger from './hamburger';

const Offcanvas = ({config, menu, header, footer, menuCloseOpen, isOpen}) => {
	const classes = ['eom-offcanvas'];
	const {width} = config && config.width ? config.width : 320;

	if ( isOpen ) classes.push('active');
	if( config && config.skin === 'light' ) classes.push('eom-light');

	return(
		<div className={classes.join(' ')} style={{width}}>
			<Hamburger menuCloseOpen={menuCloseOpen} />
			<div className="menu-overflow">
				{header ?
					<div className="eom-header">
						{header}
					</div> : ''
				}
				
				<div className="eom-menu-wrap">
					<MenuItems items={menu} />
				</div>

				{footer ?
					<div className="eom-footer">
						{footer}
					</div> : ''
				}
			</div>
		</div>
	);
}

export default Offcanvas;