const chalk = require('chalk');
const pegaArquivo = require('./index');

const caminho = process.argv;

function processaTexto(caminhoDoArquivo) {
    const resutlado = pegaArquivo(caminhoDoArquivo[2]);
    console.log(chalk.yellow('Lista de Links', resultado));


}
processaTexto(caminho);