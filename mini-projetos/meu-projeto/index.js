const fs = require('fs');
const { lerArquivo, criarArquivoSeNaoExistir, adicionarConteudoAoArquivo } = require('./configFiles');

const argv = process.argv.slice(2);

const comando = argv[0];
const filePath = argv[1] || 'fichaPersonagem.txt';
const data = (argv[2])?.split('_').join('\n');

switch (comando) {
    case 'ler':
        console.log(`Lendo o arquivo ${filePath}...`);
        if (fs.existsSync(filePath) ) {
            lerArquivo(filePath) 
        } else {
            console.log('Criando o arquivo...');
            criarArquivoSeNaoExistir(filePath);
            lerArquivo(filePath);
        } 
        break;
    case 'criar':
        console.log(`Criando o arquivo ${filePath}...`);
        criarArquivoSeNaoExistir(filePath);
        adicionarConteudoAoArquivo(filePath, `\n${data}`);
        break;
    case 'Escrever':
        console.log('Atualizando o arquivo...');
        try {
            adicionarConteudoAoArquivo(filePath, `\n${data}`)
        } catch (err) {
            console.error(err);
        }
        break;
    default:
        console.log('Argumento inválido use "Ler" ou "Criar".')
}
