import React, {useState} from 'react';
import GameBoard from './comp/gameBoard';
import Placar from './comp/placar';

export default function App()
{
	const [btn, setBtn] = useState();

	const style =
	{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	};

	return(
		<div style={style}>
			<GameBoard btn={btn} setBtn={setBtn}/>
			<Placar/>
		</div>
	);
};
