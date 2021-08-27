import React, {useState} from 'react';
import GameBoard from './comp/GameBoard';
import Placar from './comp/Placar';

export default function App()
{
	const [vez, setVez] = useState(true);
	const [total, setTotal] = useState(0);
	const [placar, setPlacar] = useState(0);
	const [vitoria, setVitoria] = useState(
	[
		[], [], [],
		[], [], [],
		[], [], [],
	]);

	const resetBtn =
	{
		padding: '2rem',
		fontSize: '20pt',
		fontWeight: 'bold',
	};

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
		setVitoria([ [], [], [], [], [], [], [], [], [] ]);
	};

	return(
		<div style={style}>
			{
				total <= 8
				&&
					<div style={board}>
						<GameBoard bt={0} vez={vez} setVez={setVez} total={total} setTotal={setTotal} vitoria={vitoria} setVitoria={setVitoria}/>
						<GameBoard bt={1} vez={vez} setVez={setVez} total={total} setTotal={setTotal} vitoria={vitoria} setVitoria={setVitoria}/>
						<GameBoard bt={2} vez={vez} setVez={setVez} total={total} setTotal={setTotal} vitoria={vitoria} setVitoria={setVitoria}/>
						<GameBoard bt={3} vez={vez} setVez={setVez} total={total} setTotal={setTotal} vitoria={vitoria} setVitoria={setVitoria}/>
						<GameBoard bt={4} vez={vez} setVez={setVez} total={total} setTotal={setTotal} vitoria={vitoria} setVitoria={setVitoria}/>
						<GameBoard bt={5} vez={vez} setVez={setVez} total={total} setTotal={setTotal} vitoria={vitoria} setVitoria={setVitoria}/>
						<GameBoard bt={6} vez={vez} setVez={setVez} total={total} setTotal={setTotal} vitoria={vitoria} setVitoria={setVitoria}/>
						<GameBoard bt={7} vez={vez} setVez={setVez} total={total} setTotal={setTotal} vitoria={vitoria} setVitoria={setVitoria}/>
						<GameBoard bt={8} vez={vez} setVez={setVez} total={total} setTotal={setTotal} vitoria={vitoria} setVitoria={setVitoria}/>
					</div>
				||
				total === 10
				&&
					<div >
						<h1>Jogador Tal é o Vencedor!!!</h1>
						<button style={resetBtn} onClick={() => reset()}>Recomeçar?</button>
						<Placar placar={placar} setPlacar={setPlacar}/>
					</div>
				||
					<div >
						<h1>VELHA!!!</h1>
						<button style={resetBtn} onClick={() => reset()}>Recomeçar?</button>
					</div>
			}
		</div>
	);
};
