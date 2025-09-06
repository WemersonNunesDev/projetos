def menu():
    opcoes = ['adicionar item', 'estoque', 'sair']

    print(f'\n{'=' * 6} MENU {'=' * 6}')
    for i, opcao in enumerate(opcoes, start=1):
        print(f'{i} - {opcao.capitalize()}')

    try:
        escolha = int(input('O que deseja fazer? '))
        return escolha
    except ValueError:
        print('⚠️ Escolha inválida, digite um número.')
        return None
