import React, {useState} from 'react';

export default function GameBoard()
{
	const [btn1, setBtn1] = useState(1);
	const [btn2, setBtn2] = useState(2);
	const [btn3, setBtn3] = useState(3);
	const [btn4, setBtn4] = useState(4);
	const [btn5, setBtn5] = useState(5);
	const [btn6, setBtn6] = useState(6);
	const [btn7, setBtn7] = useState(7);
	const [btn8, setBtn8] = useState(8);

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
		let btn = [];

		for(let i = 1; i < 10; i++)
		{
			btn.push(
				<button
					style={btnStyle}
					onClick={() => `${setBtn1('teste')}`}
				>
					`${btn}`
				</button>
			);
		}

		return btn;
	}

	return(
		<div style={style}>
			{board()}
		</div>
	);
};
