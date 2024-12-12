const IngredientList = ({ availableIngredients, addToBurger }) => {
	return (
		<div>
			<h2>Ingredients</h2>
			<ul>
				{availableIngredients.map((ingredient, index) => (
					<li
						key={index}
						style={{
							backgroundColor: ingredient.color,
							padding: '5px',
							margin: '5px',
							cursor: 'pointer',
						}}
					>
						{ingredient.name}
						<button
							onClick={() => addToBurger(ingredient)}
							style={{ marginLeft: '10px' }}
						>
							+
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default IngredientList;
