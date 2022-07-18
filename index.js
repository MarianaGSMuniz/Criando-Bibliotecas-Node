const chalk = require('chalk');
const fs = require('fs');
const { url } = require('inspector');

const texto = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)';

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const linksExtraidos = regex.exec(texto);
    console.log(linksExtraidos)
}
//return arrayResultados.length === 0 ? 'não há links' : arrayResultados;

extraiLinks(texto);

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivos'));

}
 // async/await
async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
     const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
     return extraiLinks(texto);
    } catch (erro) {
      trataErro(erro);
    }
}
 //promise
//function pegaArquivo(caminhoDoArquivo) {
  //  const encoding = 'utf-8';
    //fs.promises
      //  .readFile(caminhoDoArquivo, encoding)
        //.then((texto) => console.log(texto))
       // .catch((erro) => trataErro(erro))


//}
//callback
//function pegaArquivo(caminhoDoArquivo) {
  //  const encoding = 'utf-8'
    //fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
      //  if (err) {
        //    trataErro(erro);
        //}

    //})
//}

module.exports = pegaArquivo;