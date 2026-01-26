const fs = require('fs');

function lerArquivo(caminho) {
    try {
        const data = fs.readFileSync(caminho, 'utf-8');
        console.log(data);
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
    }

    console.log('\n');
}

function criarArquivoSeNaoExistir(caminho) {
    try {
        fs.writeFileSync(caminho, '', 'utf-8');
        console.log('Arquivo criado com suceeso!');
    } catch (error) {
        console.error('Erro ao criar o arquivo:', error);
    }
}

function adicionarConteudoAoArquivo(caminho, conteudo) {
    try {
        fs.appendFileSync(caminho, conteudo, 'utf-8');
        console.log('Conteúdo adicionado com sucesso!');
    } catch (err) {
        console.error('Erro ao adicionar contéudo ao arquivo...', err);
    }
}

module.exports = { lerArquivo, criarArquivoSeNaoExistir, adicionarConteudoAoArquivo };