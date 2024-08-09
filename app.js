const readline = require('readline');
const {stdin:input, stdout:output} = require('process');
const rl = readline.createInterface({input, output});
const somar = require('./operacoesAritmeticas/somar.js');
const subtrair = require('./operacoesAritmeticas/subtrair.js');
const dividir = require('./operacoesAritmeticas/dividir.js');
const exponenciar = require('./operacoesAritmeticas/exponenciar.js');

rl.question("Olá! Bem-vindo à calculadora de terminal! Digite a operação aritmética desejada:\n+ para soma\n- para subtração\n* para multiplicação\n/ para divisão\n** para exponenciação\n", 
		(resposta) => {

			switch(resposta) {
				
				case '+':
					
					rl.question("\nDigite os números da soma.\n", (res) => {console.log(res); somar(res); rl.close(); } )
				case '-':
					rl.question("\nDigite os números da subtração.\n", (res) => {console.log(res); subtrair(res); rl.close(); } )
				
				case '/':
					rl.question("\nDigite os números da divisão.\n", (res) => {console.log(res); dividir(res); rl.close(); } )
				
				case '**':
					 rl.question("\nDigite os números da exponenciação.\n", (res) => {console.log(res); exponenciar(res); rl.close(); } )				

			}
			
		
		}
)


