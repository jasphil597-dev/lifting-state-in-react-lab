const BurgerStack = ({ stack, removeFromBurger }) => {
	return (
		<div style={{ width: '40%', float: 'right', textAlign: 'center' }}>
			<h2>Your Burger</h2>
			<ul style={{ listStyleType: 'none', padding: 0 }}>
				{stack.map((ingredient, index) => (
					<li
						key={index}
						style={{
							backgroundColor: ingredient.color,
							padding: '5px',
							margin: '5px 0',
							color: 'white',
							textAlign: 'center',
							cursor: 'pointer',
						}}
						onClick={() => removeFromBurger(index)}
					>
						{ingredient.name}
						<button style={{ marginRight: '10px' }}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default BurgerStack;

// const BurgerStack = ({ stack, removeFromBurger }) => {
// 	return (
// 		<div>
// 			<h2>Your Burger</h2>
// 			<ul style={{ listStyleType: 'none', padding: 0 }}>
// 				{stack.map((ingredient, index) => (
// 					<li
// 						key={index}
// 						style={{
// 							backgroundColor: ingredient.color,
// 							padding: '10px',
// 							margin: '5px 0',
// 							color: 'white',
// 							textAlign: 'center',
// 							cursor: 'pointer',
// 						}}
// 						onClick={() => removeFromBurger(index)}
// 					>
// 						{ingredient.name} <button style={{ marginLeft: '10px' }}>X</button>
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// };

// export default BurgerStack;

// // // import React from 'react';
// // import Ingredient from './IngredientList';

// // // `src/components/BurgerStack.jsx`
// // const BurgerStack = ({ stack, removeFromBurger }) => {
// // 	return (
// // 		<>
// // 			<div>
// // 				<h2>Your Burger</h2>
// // 				<ul>
// // 					{stack.map((ingredient, index) => (
// // 						<li
// // 							key={index}
// // 							style={ingredient.name}
// // 							onClick={() => removeFromBurger(index)}
// // 							buttonLabel='X'
// // 						/>
// // 					))}
// // 				</ul>
// // 			</div>
// // 		</>
// // 	);
// // };

// // export default BurgerStack;
