const fs = require('fs');
const { Arquivos } = require('./configFiles');

const arquivo = new Arquivos();

const argv = process.argv.slice(2);

const comando = argv[0];
const filePath = argv[1] || 'fichaPersonagem.txt';
const data = (argv[2])?.split('_').join('\n');

switch (comando) {
    case 'ler':
        console.log(`Lendo o arquivo ${filePath}...`);
        if (fs.existsSync(filePath)) {
            arquivo.lerArquivo(filePath) 
        } else {
            console.log('Criando o arquivo...');
            arquivo.criarArquivoSeNaoExistir(filePath);
            arquivo.lerArquivo(filePath);
        } 
        break;
    case 'criar':
        console.log(`Criando o arquivo ${filePath}...`);
        arquivo.criarArquivoSeNaoExistir(filePath);
        arquivo.adicionarConteudoAoArquivo(filePath, `\n${data}`);
        break;
    case 'escrever':
        console.log('Atualizando o arquivo...');
        try {
            arquivo.adicionarConteudoAoArquivo(filePath, `\n${data}`)
        } catch (err) {
            console.error(err);
        }
        break;
    case 'apagar':
        arquivo.deletarArquivo(filePath);
        break;
    case 'limpar':
        arquivo.limparArquivo(filePath);
        break;
    default:
        console.log('Argumento inválido use "Ler", "Criar" ou "Escrever".')
}
