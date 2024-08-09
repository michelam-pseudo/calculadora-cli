const dividir = (...args) => {

        let quociente = new Number();
        if(!args) {return console.log("Nenhum número a ser quocientedo foi informado.")}
        args = args[0].split(',');
        quociente = parseFloat(args[0]);

        args.forEach((num, index) => {if(index == 0) {} else{quociente /= parseFloat(num);}})


        console.log(quociente);

}

module.exports = dividir;
