const fs = require('fs');

class Arquivos {
    constructor(caminho) {
        this.caminho = caminho;
    }

    lerArquivo(caminho) {
        try {
            const data = fs.readFileSync(caminho, 'utf-8');
            console.log(data);
        } catch (err) {
            console.error('Erro ao ler o arquivo:', err);
        }
    
        console.log('\n');
    }
    
    criarArquivoSeNaoExistir(caminho) {
        try {
            fs.writeFileSync(caminho, '', 'utf-8');
            console.log('Arquivo criado com suceeso!');
        } catch (error) {
            console.error('Erro ao criar o arquivo:', error);
        }
    }
    
    adicionarConteudoAoArquivo(caminho, conteudo) {
        try {
            fs.appendFileSync(caminho, conteudo, 'utf-8');
            console.log('Conteúdo adicionado com sucesso!');
        } catch (err) {
            console.error('Erro ao adicionar contéudo ao arquivo...', err);
        }
    }
    
    deletarArquivo(caminho) {
        try {
            fs.unlinkSync(caminho);
            console.log('\nArquivo deletado com sucesso!')
        } catch (err) {
            console.error('Erro ao deletar o arquivo:', err);
        }
    }
    
    limparArquivo(caminho) {
        try {
            fs.truncateSync(caminho, 0);
            console.log('Arquivo limpo com sucesso!');
        } catch (err) {
            console.log('Erro ao limpar o Arquivo:', err);
        }
    }
    
}


module.exports = { Arquivos };