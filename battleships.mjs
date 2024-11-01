import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let veld = 10
let x = parseFloat (await userInput.question('Geef de Breedte in '))
let y = parseFloat (await userInput.question('Geef de Hoogte in '))

for(let i = 0; i < veld; i ++){
    let breedte = ''
    for(let j = 0; j < veld; j++){
        if(x == j && y == i){
            breedte += 'X';
        }else{
            breedte += '.'
        }
    }console.log(breedte)
}


process.exit()