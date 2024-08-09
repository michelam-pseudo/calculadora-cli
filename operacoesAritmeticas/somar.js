const somar = (...args) => {
	
	let soma = new Number();
	if(!args) {return console.log("Nenhum número a ser somado foi informado.")}
	args = args[0].split(',');
	soma = parseFloat(args[0]);

	args.forEach((num, index) => {if(index == 0) {} else{soma += parseFloat(num);}})


	console.log(soma);

}

module.exports = somar;
