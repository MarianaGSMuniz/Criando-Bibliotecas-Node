const pegaArquivo = require ('../index');
const arrayResult = [{
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList',
}]

test('deve ser uam funçaõ', () =>{
    expect (typeof pegaArquivo).toBe ('function');
    });
    it ('deve retornar um array com resultados', async () => {
        const resultado = await pegaArquivo('C:\Users\MarianaMuniz\Desktop\Documentos\Node1\Criando-Bibliotecas-Node\texto.md')
        expect (resultado).toEqual(Array);
    })
    it ('deve retornar msg "não há links"',async ()=>{
        const resultado = await pegaArquivo('C:\Users\MarianaMuniz\Desktop\Documentos\Node1\Criando-Bibliotecas-Node\texto.md')
        expect (resultado).toEqual('não há links');
    })

