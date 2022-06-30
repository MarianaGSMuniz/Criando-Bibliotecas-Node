const chalk = require('chalk');
const pegaArquivo = require('./index');
const validaURLs = require('./http-valida');
const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resutlado = await pegaArquivo(caminhoDoArquivo[2]);
    console.log(chalk.yellow('Lista de Links', resultado));


}
processaTexto(caminho);