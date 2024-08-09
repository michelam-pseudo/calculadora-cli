const multiplicar = (...args) => {

        let produto = new Number();
        if(!args) {return console.log("Nenhum número a ser produtodo foi informado.")}
        args = args[0].split(',');
        produto = parseFloat(args[0]);

        args.forEach((num, index) => {if(index == 0) {} else{produto *= parseFloat(num);}})


        console.log(produto);

}

module.exports = multiplicar;
