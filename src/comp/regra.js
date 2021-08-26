export default class Regra
{
	constructor()
	{
		this.campo = [ [], [], [], [], [], [], [], [], [] ];
		this.jogador = ['O', 'X'];
		this.vez = true;
		this.lastId = 0;
	};

	inc()
	{
		return this.lastId++;
	};
};
