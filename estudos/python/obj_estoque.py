import locale
locale.setlocale(locale.LC_ALL, 'pt_BR.UTF-8')

class Estoque:
    def __init__(self, nome='', quantidade=0, preco_custo=0, preco_venda=0, local=''):
        self.nome = nome
        self.quantidade = quantidade
        self.preco_custo = preco_custo
        self.preco_venda = preco_venda
        self.local = local

    def novo_item(self):
        valor = locale.currency(self.preco_custo, grouping=True)
        valor_total = locale.currency(self.quantidade * self.preco_custo, grouping=True)

        valor_venda = locale.currency(self.preco_venda, grouping=True)
        total_preco_venda = locale.currency(self.quantidade * self.preco_venda, grouping=True)

        texto = f'{self.nome.capitalize()}\n{round(self.quantidade, 3)} {valor} - Total: {valor_total}  {valor_venda} - Total: {total_preco_venda}\n{'=' * 56}'

        with open('estoque.txt', 'a', encoding='utf-8') as f:
            f.write(texto)
            print('\nProduto adicionado!')

    @staticmethod
    def ler_estoque():
        title = 'Item'
        qtd = 'Qtd'
        text_compra = 'Valor de compra'
        text_total = 'Total'
        text_venda = 'Valor de venda'

        # print(title.center(24, ' '), qtd.center(24, ' '), text_compra.center(24, ' '), text_total.center(24, ' '), text_venda.center(24, ' '), text_total.center(24, ' '))
        try:
            with open('estoque.txt', 'r', encoding='utf-8') as f:
                conteudo = f.read()
                print('\n')
                print(conteudo)
                
        except FileNotFoundError:
            print('\n⚠️ Nenhum arquivo de estoque encontrado ainda.')