import time
from menu import menu
from obj_estoque import Estoque

while True:
    escolha = menu()
    time.sleep(0.3)

    if escolha == 1:
        print('\nNovo Item:')
        print('=' * 24)
        time.sleep(1)

        nome = str(input('Nome: '))
        qtd = float(input('Quantidade: '))
        valor_custo = float(input('Valor de compra (R$): '))
        valor_venda = float(input('Valor de venda (R$): '))
        local = str(input('Local: '))

        estoque = Estoque(nome, qtd, valor_custo, valor_venda, local)
        estoque.novo_item()

    elif escolha == 2:
        Estoque.ler_estoque()

    elif escolha == 3:
        print('Saindo... ')
        break
    else:
        print('Opção inválida.')

    input("\nPressione ENTER para continuar...")
