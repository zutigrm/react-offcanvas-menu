import React from 'react';

const RouterLink = ({item, context, hasSubmenu}) => {
	const {Link, currentPage} = context;
	const menuClass = ['eom-menu-item'];
	if ( currentPage === item.link ) menuClass.push('active');

	return(
		<Link 
			id={`menu-${item.text.toLowerCase()}`} 
			className={menuClass.join(' ')}
			to={item.link}
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
		</Link>
	);
}

export default RouterLink;