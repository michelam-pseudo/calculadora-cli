const exponenciar = (...args) => {

        let potencia = new Number();
        if(!args) {return console.log("Nenhum número a ser potenciado foi informado.")}
        args = args[0].split(',');
        potencia = parseFloat(args[0]);

        args.forEach((num, index) => {if(index == 0) {} else{potencia **= parseFloat(num);}})


        console.log(potencia);

}

module.exports = exponenciar;
