import React from 'react';
import MenuItems from "./items";
import MenuContext from '../context';
import RouterLink from '../link/router-link';
import MenuLink from '../link/menu-link';

const MenuItem = ({item}) => {

	return(
		<MenuContext.Consumer>
			{context => {
				const {openedSubmenus, Link} = context;
				const hasSubmenu = openedSubmenus.includes(item.text.toLowerCase());
				
				return (
					<li className="eom-menu-item-wrap">
						{Link ? 
							<RouterLink 
								item={item} 
								context={context}
								hasSubmenu={hasSubmenu} 
							/> :
								<MenuLink 
									item={item} 
									context={context} 
									hasSubmenu={hasSubmenu} 
								/>
						}
 
						{item.submenu ? // if we have submenus, loop again
							<MenuItems 
								items={item.submenu} 
								classes={`${hasSubmenu ? 'eom-submenu active' : 'eom-submenu'}`} 
							/> : ''}
					</li>
					)
				}
			}
		</MenuContext.Consumer>
	)
}

export default MenuItem;