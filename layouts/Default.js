import React from 'react';
import { withRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
// core components
import DefaultNavbar from '../components/Navbars/DefaultNavbar';
import Sidebar from '../components/Sidebar/Sidebar.js';
import AuthFooter from '../components/Footers/AuthFooter.js';
import routes from 'routes.js';
import { useUserData } from '../lib/hooks';
import { UserContext } from '../lib/context';
function Default({ router, children }) {
	const [ sidenavOpen, setSidenavOpen ] = React.useState(false);
	const userData = useUserData();
	const getRoutes = (routes) => {
		return routes.map((prop, key) => {
			if (prop.collapse) {
				return getRoutes(prop.views);
			}
			if (prop.layout === '/recipes') {
				return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
			}
			else {
				return null;
			}
		});
	};
	const getBrandText = (path) => {
		for (let i = 0; i < routes.length; i++) {
			if (router.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
				return routes[i].name;
			}
		}
		return 'Brand';
	};
	// toggles collapse between mini sidenav and normal
	const toggleSidenav = (e) => {
		if (document.body.classList.contains('g-sidenav-pinned')) {
			document.body.classList.remove('g-sidenav-pinned');
			document.body.classList.add('g-sidenav-hidden');
		}
		else {
			document.body.classList.add('g-sidenav-pinned');
			document.body.classList.remove('g-sidenav-hidden');
		}
		setSidenavOpen(!sidenavOpen);
	};
	const getNavbarTheme = () => {
		return router.pathname.indexOf('admin/alternative-dashboard') === -1 ? 'dark' : 'light';
	};
	return (
		<div>
			<UserContext.Provider value={userData}>
				<Sidebar
					routes={routes}
					toggleSidenav={toggleSidenav}
					sidenavOpen={!sidenavOpen}
					logo={{
						innerLink : '/',
						imgSrc    : require('assets/img/brand/muusli.png'),
						imgAlt    : '...'
					}}
				/>
				<div className="main-content">
					<DefaultNavbar
						theme={getNavbarTheme()}
						toggleSidenav={toggleSidenav}
						sidenavOpen={!sidenavOpen}
						brandText={getBrandText(router.pathname)}
					/>

					{children}
					<Toaster />
					<AuthFooter />
				</div>
				{!sidenavOpen ? <div className="backdrop d-xl-none" onClick={toggleSidenav} /> : null}
			</UserContext.Provider>
		</div>
	);
}

export default withRouter(Default);
