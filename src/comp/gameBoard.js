import React, {useState, useEffect} from 'react';
import Regra from './regra';

export default function GameBoard()
{
	const regra = new Regra();
	let campo = regra.campo;
	let vez = regra.vez;

	const [novoCampo, setNovoCampo] = useState('');

	const style =
	{
		display: 'flex',
		width: '35rem',
		flexWrap: 'wrap',
	};

	const btnStyle =
	{
		backgroundColor: 'gray',
		padding: '4.5rem',
		border: '1px solid black',
		borderRadius: '2px',
		cursor: 'pointer',
		color: 'white',
	};

	function board()
	{
		function jogador( vez )
		{
			return (vez) && regra.jogador[0] || regra.jogador[1];
		};

		function attrib( id )
		{
			campo[id] = jogador(vez);

			console.log(campo, novoCampo);

			vez = !vez;
		};

		return campo.map( elemento => <button
			id={regra.inc()}
			onClick={(e) => { attrib(e.target.id); draw(elemento) } }
			style={btnStyle}>{novoCampo}</button>
		);
	};

	function draw(elemento)
	{
		if(elemento === 'X')
			return setNovoCampo('<span>X</span>');
		else if (elemento === 'O')
			return setNovoCampo('<span>O</span>');
		else
			return setNovoCampo('');
	};

	return(
		<div style={style}>
			{board()}
		</div>
	);
};
