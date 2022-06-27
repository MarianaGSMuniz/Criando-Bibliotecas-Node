const chalk = require('chalk');
const fs = require('fs')

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivos'));

}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.green(texto))
}

//function pegaArquivo(caminhoDoArquivo) {
//  const encoding = 'utf-8';
//fs.promises
//  .readFile(caminhoDoArquivo, encoding)
//.then((texto) => console.log(texto))
//.catch((erro) => trataErro(erro))


}

//function pegaArquivo(caminhoDoArquivo) {
//  const encoding = 'utf-8'
//fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//  if (err) {
//    trataErro(erro);
//}

//console.log(chalk.green(texto))

// })
//}
//pegaArquivo('./arquivos/texto.md');