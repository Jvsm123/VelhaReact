import React, {useState} from 'react';

export default function GameBoard(props)
{
	const [btn, setBtn] = useState('');
	const [lock, setLock] = useState(false);

	const btnStyle =
	{
		backgroundColor: 'gray',
		padding: '4.5rem',
		border: '1px solid black',
		borderRadius: '2px',
		cursor: 'pointer',
		color: 'white',
		fontSize: '14pt',
		fontWeight: 'bold',
		textAlign: 'center',
	};

	function jogador()
	{
		if(!lock)
		{
			let t;

			if( props.vez )
			{
				setBtn('O');
				t = 'O'
			}
			else
			{
				setBtn('X');
				t = 'X';
			}

			props.setVez( !props.vez );

			setLock(!lock);

			props.setTotal( props.total + 1 );

			verificaVitoria(t);
		}
	};

	function verificaVitoria(t)
	{
		props.vitoria[props.bt] = t;

		if( props.vitoria[0] === 'X' && props.vitoria[1] === 'X' && props.vitoria[2] === 'X' )
		{
			console.log(props.vitoria[0] + '1 Vertical')
			props.setTotal(10);
		}
		else if( props.vitoria[3] === 'X' && props.vitoria[4] === 'X' && props.vitoria[5] === 'X')
		{
			console.log(props.vitoria[3] + ' 2 Vertical')
			props.setTotal(10);
		}
		else if( props.vitoria[6] === 'X' && props.vitoria[7] === 'X' && props.vitoria[8] === 'X')
		{
			console.log(props.vitoria[6] + ' 3 Vertical')
			props.setTotal(10);
		}
		else if( props.vitoria[0] === 'X' && props.vitoria[3] === 'X' && props.vitoria[6] === 'X')
		{
			console.log(props.vitoria[0] + ' 1 Horizontal')
			props.setTotal(10);
		}
		else if( props.vitoria[1] === 'X' && props.vitoria[4] === 'X' && props.vitoria[7] === 'X')
		{
			console.log(props.vitoria[1] + ' 2 Horizontal')
			props.setTotal(10);
		}
		else if( props.vitoria[2] === 'X' && props.vitoria[5] === 'X' && props.vitoria[8] === 'X')
		{
			console.log(props.vitoria[2] + ' 3 Horizontal')
			props.setTotal(10);
		}
		else if( props.vitoria[0] === 'X' && props.vitoria[4] === 'X' && props.vitoria[8] === 'X')
		{
			console.log(props.vitoria[0] + ' 1 Diagonal')
			props.setTotal(10);
		}
		else if( props.vitoria[2] === 'X' && props.vitoria[4] === 'X' && props.vitoria[6] === 'X')
		{
			console.log(props.vitoria[6] + ' 2 Diagonal')
			props.setTotal(10);
		}

		if( props.vitoria[0] === 'O' && props.vitoria[1] === 'O' && props.vitoria[2] === 'O' )
		{
			console.log(props.vitoria[0] + '1 Vertical')
			props.setTotal(10);
		}
		else if( props.vitoria[3] === 'O' && props.vitoria[4] === 'O' && props.vitoria[5] === 'O')
		{
			console.log(props.vitoria[3] + ' 2 Vertical')
			props.setTotal(10);
		}
		else if( props.vitoria[6] === 'O' && props.vitoria[7] === 'O' && props.vitoria[8] === 'O')
		{
			console.log(props.vitoria[6] + ' 3 Vertical')
			props.setTotal(10);
		}
		else if( props.vitoria[0] === 'O' && props.vitoria[3] === 'O' && props.vitoria[6] === 'O')
		{
			console.log(props.vitoria[0] + ' 1 Horizontal')
			props.setTotal(10);
		}
		else if( props.vitoria[1] === 'O' && props.vitoria[4] === 'O' && props.vitoria[7] === 'O')
		{
			console.log(props.vitoria[1] + ' 2 Horizontal')
			props.setTotal(10);
		}
		else if( props.vitoria[2] === 'O' && props.vitoria[5] === 'O' && props.vitoria[8] === 'O')
		{
			console.log(props.vitoria[2] + ' 3 Horizontal')
			props.setTotal(10);
		}
		else if( props.vitoria[0] === 'O' && props.vitoria[4] === 'O' && props.vitoria[8] === 'O')
		{
			console.log(props.vitoria[0] + ' 1 Diagonal')
			props.setTotal(10);
		}
		else if( props.vitoria[2] === 'O' && props.vitoria[4] === 'O' && props.vitoria[6] === 'O')
		{
			console.log(props.vitoria[6] + ' 2 Diagonal')
			props.setTotal(10);
		}

		console.log(props.vitoria, props.total);
	};

	return(
		<button
			style={btnStyle}
			onClick={() => jogador()}
		>
			{btn}
		</button>
	);
};
