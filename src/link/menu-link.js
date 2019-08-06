import React from 'react';

const MenuLink = ({item, context, hasSubmenu}) => {
	const {currentPage} = context;
	const menuClass = ['eom-menu-item'];
	if ( currentPage === item.link ) menuClass.push('active');

	return(
		<a 
			href="#"
			id={`menu-${item.text.toLowerCase()}`} 
			className={menuClass.join(' ')}
			onClick={(e) => {
				e.preventDefault();
				window.location.replace(item.link)}
			}
		>
			<span className="menu-text">{item.text}</span>

			{item.submenu ?
				<span 
					className={`${hasSubmenu ? 'sub-arrow active' : 'sub-arrow'}`} 
					onClick={(e) => context.handleSubmenu(e, item.text.toLowerCase())}
				>
					<i></i>
					<i></i>
				</span>
				: ''
			}
		</a>
	);
}

export default MenuLink;