import React, {useState} from 'react';
import GameBoard from './comp/GameBoard';
import Placar from './comp/Placar';

export default function App()
{
	const [vez, setVez] = useState(true);
	const [total, setTotal] = useState(0);
	const [placar, setPlacar] = useState(0);

	const board =
	{
		display: 'flex',
		width: '35rem',
		flexWrap: 'wrap',
	};

	const style =
	{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	};

	function reset()
	{
		setVez(true);
		setTotal(0);
	};

	return(
		<div style={style}>
			{ total < 9
				&&
					<div style={board}>
						<GameBoard vez={vez} setVez={setVez} total={total} setTotal={setTotal}/>
						<GameBoard vez={vez} setVez={setVez} total={total} setTotal={setTotal}/>
						<GameBoard vez={vez} setVez={setVez} total={total} setTotal={setTotal}/>
						<GameBoard vez={vez} setVez={setVez} total={total} setTotal={setTotal}/>
						<GameBoard vez={vez} setVez={setVez} total={total} setTotal={setTotal}/>
						<GameBoard vez={vez} setVez={setVez} total={total} setTotal={setTotal}/>
						<GameBoard vez={vez} setVez={setVez} total={total} setTotal={setTotal}/>
						<GameBoard vez={vez} setVez={setVez} total={total} setTotal={setTotal}/>
						<GameBoard vez={vez} setVez={setVez} total={total} setTotal={setTotal}/>
					</div>
				||
					<div>
						<h1>O Jogo acabou!</h1>
						<button onClick={() => reset()}>Recomeçar?</button>
						<Placar placar={placar} setPlacar={setPlacar}/>
					</div>
			}
		</div>
	);
};
