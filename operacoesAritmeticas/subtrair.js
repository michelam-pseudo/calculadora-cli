const subtrair = (...args) => {
        
        let diferenca = new Number();
        if(!args) {return console.log("Nenhum número a ser somado foi informado.")}
        args = args[0].split(',');
        diferenca = parseFloat(args[0]);

        args.forEach((num, index) => {if(index == 0) {} else{diferenca -= parseFloat(num);}})


        console.log(diferenca);

}

module.exports = subtrair;
