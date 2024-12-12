// src/App.jsx

import './App.css';

import { useState } from 'react';
import IngredientList from '../components/IngredientList';
import BurgerStack from '../components/BurgerStack';

export const availableIngredients = [
	{ name: 'Kaiser Bun', color: 'saddlebrown' },
	{ name: 'Sesame Bun', color: 'sandybrown' },
	{ name: 'Gluten Free Bun', color: 'peru' },
	{ name: 'Lettuce Wrap', color: 'olivedrab' },
	{ name: 'Beef Patty', color: '#3F250B' },
	{ name: 'Soy Patty', color: '#3F250B' },
	{ name: 'Black Bean Patty', color: '#3F250B' },
	{ name: 'Chicken Patty', color: 'burlywood' },
	{ name: 'Lettuce', color: 'lawngreen' },
	{ name: 'Tomato', color: 'tomato' },
	{ name: 'Bacon', color: 'maroon' },
	{ name: 'Onion', color: 'lightyellow' },
	{ name: 'Cheddar Cheese', color: '#FDE18B' },
	{ name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
	const [stack, setStack] = useState([]);

	const addToBurger = (ingredient) => {
		setStack([...stack, ingredient]);
	};

	const removeFromBurger = (index) => {
		const newStack = stack.slice();
		newStack.splice(index, 1);
		setStack(newStack);
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				padding: '20px',
			}}
		>
			<div style={{ width: '60%' }}>
				<IngredientList
					availableIngredients={availableIngredients}
					addToBurger={addToBurger}
				/>
			</div>
			<BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
		</div>
	);
};

export default App;
