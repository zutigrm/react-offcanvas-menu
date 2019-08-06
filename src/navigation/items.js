import React from 'react';
import MenuItem from './item';

const MenuItems = ({items, classes}) => {
	const menuClass = ['eom-menu'];

	if ( classes ) menuClass.push(classes);
	
	return( 
		<ul className={menuClass.join(' ')}>
			{items.map(item => 
				<MenuItem 
					key={item.text} 
					item={item} 
				/>
			)}
		</ul>
	);
}

export default MenuItems;