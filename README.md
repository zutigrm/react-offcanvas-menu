# React Offcanvas Menu

React offcanvas menu is "out of the box" solution for adding offcanvas menu to your react project in less than a minute. It comes packed with page "push" effect, unlimited submenus and header and footer sections.

## Usage
You can use react offcanvas menu with router or defualt links. If you want to use it with router you will need to pass 2 additional parameters, otherwise it will fallback to ```<a></a>``` links by default.

React offcanvas menu takes 5 arguments, but only 1 is required. You can provide only menu items and menu is ready to be used. But if you want to add more features, here is the list of all parameters:

- ```Link``` To use router option with react offcanvas menu you need to supply Link component from react-router-dom package. More on this later in examples.
- ```location``` If you want to use router, alogn with the ```link``` you will need to include ```location``` parameter that can be obtained by wrapping the menu with ```withRouter``` method from react-router-dom 
- ```menu``` this is the parameter that will contain array of objects representing your menu structure. Each object contains ```text``` of the menu, ```link``` a page route link, and optional ```submenu``` property to which you can pass submenu links in an array of object with same properties as for the parent menu. More on this in examples section.
- ```header``` If you want to include header section, like logo, or brand name, you pass component or content to this parameter.
- ```footer``` - to add additional links, or any other content to the bottom of the offcanvas menu, pass it to this paramater.
- ```config``` parameter has few properties you can use to configurate some menu features. To enable push behavior of the menu (when opened it will push the current page) set ```push``` param to ```true```. If you want menu to be opened by default when page loads, set ```isOpen``` param to ```true```. To set the width of the menu use ```width``` param, and add pass it a number value. To apply the light skin, use ```skin``` param and pass it ```light``` value.


## Examples

basic usage example (quick offcanvas menu with ```<a>``` links system):

```javascript
<OffcanvasMenu
	menu={[
		{text: 'Home', link: '/'},
		{text: 'Pages', link: '/page', submenu: [
			{text: 'Page 1', link: '/page/1'},
			{text: 'Page 2', link: '/page/2'}
		]},
		{text: 'Contact', link: '/contact'}
	]}
/>
```


To use router with react offcanvas menu, you need to create a custom component that will hold the menu and export it using ```withRouter```:

```javascript
// you will need link and withRouter from react router dom
import {Link, withRouter} from 'react-router-dom';

// And you will need react offcanvas menu offcourse :)
import OffcanvasMenu from 'react-offcanvas-menu'; 

// name you menu component and pass the location parameter 
// that will be drilled from withRouter
function Menu({location}) {

	return(
		<OffcanvasMenu
			Link={Link} // react-router-dom Link
			location={location} // location parameter passed from Router
			config={{
				width: 300, // you can modify default width
				push: true // if you want to enable push feature
			}}
			// this is where you create your menu items
			menu={[
				// basic menu item
				{text: 'Home', link: '/'}, 

				// menu item with submenu
				{text: 'Pages', link: '/page', submenu: [ 
					{text: 'Page 1', link: '/page/1'},
					{text: 'Page 2', link: '/page/2'}
				]}
			]}
			header={ // you can add logo to the header for example
				<img src={logo} className="menu-logo" alt="logo" width="250" height="100" />
			}
			footer={<Footer />} // if you want content in footer
		/>
	)
}

// some quick markup for the footer section of offcanvas menu
const Footer = () => {
	return(
		<div className="social-wrap">
			<h4>Socia Networks Footer</h4>
			<ul className="social">
				<li>
					<a href="facebook">Facebook</a>
				</li>
				<li>
					<a href="twitter">Twitter</a>
				</li>
			</ul>
		</div>
	)
}

// You need to wrap export with withRouter 
// so you can access the location prop in your component
// and pass it to the react-offcanvas-menu
export default withRouter(Menu);
```