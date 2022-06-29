/*!

=========================================================
* NextJS Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-argon-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.


*/
import { auth } from './lib/firebase';

const routes = (username) => {
	return [
		{
			collapse : false,

			icon     : 'far fa-newspaper text-success',
			state    : 'formsCollapse',

			path     : '/recipes',
			name     : 'Feed',
			miniName : 'N',
			layout   : ''
		},
		{
			collapse : false,

			icon     : 'far fa-calendar-alt text-default',
			state    : 'formsCollapse',

			path     : `/${username}/calendar`,
			name     : 'Kalendar',
			miniName : 'N',
			layout   : ''
		},
		{
			collapse : false,

			icon     : 'fas fa-shopping-basket text-warning',
			state    : 'formsCollapse',

			path     : `/${username}/shoppingList`,
			name     : 'Einkauf',
			miniName : 'N',
			layout   : ''
		},
		{
			collapse : true,
			name     : 'Sammlung',
			icon     : 'ni ni-books text-info',
			state    : 'dashboardsCollapse',
			views    : [
				{
					collapse : false,

					icon     : 'ni ni-single-copy-04 text-primary',
					state    : 'formsCollapse',

					path     : '/recipes/myRecipes',
					name     : 'Uploads',
					miniName : 'M',
					layout   : ''
				},

				// {
				// 	collapse : false,

				// 	icon     : 'far fa-bookmark text-blue',
				// 	state    : 'formsCollapse',

				// 	path     : '/collection/saved',
				// 	name     : 'Merkzettel',
				// 	miniName : 'S',
				// 	layout   : ''
				// },
				{
					collapse : false,

					icon     : 'far fa-heart  text-danger',
					state    : 'formsCollapse',

					path     : '/recipes/favorites',
					name     : 'Lieblingsrezepte',
					miniName : 'L',
					layout   : ''
				}
			]
		}

		// {
		// 	collapse : true,
		// 	name     : 'Kochbücher',
		// 	icon     : 'ni ni-books text-info',
		// 	state    : 'dashboardsCollapse',
		// 	views    : [
		// 		{
		// 			path     : '/collection',
		// 			name     : 'Alle Kochbücher',
		// 			miniName : 'A',
		// 			layout   : ''
		// 		},
		// 		{
		// 			path     : '/collection/collection1',
		// 			name     : 'Kochbuch 1',
		// 			miniName : 'B',
		// 			layout   : ''
		// 		},
		// 		{
		// 			path     : '/collection/collection2',
		// 			name     : 'Kochbuch 2',
		// 			miniName : 'C',
		// 			layout   : ''
		// 		}
		// 	]
		// }
	];
};

export default routes;
