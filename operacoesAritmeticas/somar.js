const somar = (...args) => {

	let soma = new Number();
	if(!args) {return console.log("Nenhum número a ser somado foi informado.")}
	soma  = args[0];

	args.forEach((num, index) => {soma += num;})


	console.log(soma);

}

module.exports = somar;
