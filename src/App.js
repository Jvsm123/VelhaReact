import React from 'react';
import GameBoard from './comp/GameBoard';
import Placar from './comp/Placar';

export default function App()
{
	const style =
	{
		display: 'flex',
		heigth: '100vh',
	};

	return(
		<div style={style}>
			<GameBoard/>
			<Placar/>
		</div>
	);
};
