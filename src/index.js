import React from 'react';
import MenuContext from './context';
import Offcanvas from './parts/offcanvas';

import './style/style.scss';
import './style/responsive.scss';

export default class OffcanvasMenu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			menuOpen: this.props.isOpen ? true : false,
			openedSubmenus: [],
			currentPage: this.props.location ? this.props.location.pathname : window.location.pathname
		}
		
		this.menuCloseOpen = this.menuCloseOpen.bind(this);
		this.handleSubmenu = this.handleSubmenu.bind(this);
	}

	// handle opening and closing of offcanvas menu
	menuCloseOpen = (e) => {
		e.preventDefault();
		const {config} = this.props;
		const {menuOpen} = this.state;
		
		if ( config.push ) {

			if ( !menuOpen ) {
				document.body.classList.add('eom-push');
				document.body.style.paddingLeft = config && config.width ? config.width : 320+'px';
			
			} else {
				document.body.classList.remove('eom-push');
				document.body.style.paddingLeft = 0;
			}
		}

		this.setState({menuOpen: !menuOpen});
	}

	// handle submenu opne/close action
	handleSubmenu = (e, menu) => {
		e.preventDefault();
		const {openedSubmenus} = this.state;

		if ( openedSubmenus.indexOf(menu) !== -1 ) {
			const index = openedSubmenus.indexOf(menu);

			delete openedSubmenus[index];

		} else {
			openedSubmenus.push(menu);
		}

		this.setState({openedSubmenus});
	}

	render() {
		const {menu, header, footer, config, Link, location} = this.props;
		const{menuOpen} = this.state;
		let currentPage = this.state.currentPage;

		if ( location ) currentPage = location.pathname;
		
		return(
			<MenuContext.Provider value={{...this.state, currentPage, handleSubmenu: this.handleSubmenu, Link, matchPath}}>
				<Offcanvas
					config={config ? config : null}
					menu={menu} 
					header={header} 
					footer={footer} 
					menuCloseOpen={this.menuCloseOpen}
					isOpen={menuOpen}
				/>
			</MenuContext.Provider>
		)
	}
}