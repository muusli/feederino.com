import React from 'react';
import CalendarView from 'components/mealplanner/Calendar';
import ShoppingList from 'components/mealplanner/ShoppingList';
import Default from '../../layouts/Default.js';
function mealplanner() {
	return (
		<div>
			<CalendarView />
		</div>
	);
}
mealplanner.layout = Default;
export default mealplanner;
