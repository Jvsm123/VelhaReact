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
	};

	function jogador()
	{
		if(!lock)
		{
			( props.vez ) ? setBtn('O') : setBtn('X');

			props.setVez( !props.vez );

			setLock(!lock);
			
			props.setTotal( props.total + 1 );

			console.log(props.total);
		}
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
