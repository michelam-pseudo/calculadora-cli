const readline = require('readline');
const {stdin:input, stdout:output} = require('process');
const rl = readline.createInterface({input, output});
const somar = require('./operacoesAritmeticas/somar.js');

rl.question("Olá! Bem-vindo à calculadora de terminal! Digite a operação aritmética desejada:\n1 - Soma\n", 
		(resposta) => {

			switch(resposta) {
				
				case '1':
					
					rl.question("\nDigite os números a serem somados.\n", (res) => {console.log(res);somar(eval(res)); rl.close();})

			}
			
		
		}
)


