import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Formulario from './index';

describe('Deve renderizar um campo de Input',() => {

    test('', () => {
        render(<Formulario/>)
        const campoInput = screen.getByPlaceholderText('Digite um valor')
        expect(campoInput).toBeInTheDocument();
    });
    
    test('com o type number', () => {
        render(<Formulario/>)
        const campoInput = screen.getByPlaceholderText('Digite um valor')
        expect(campoInput).toHaveAttribute('type', 'number');
    });
    
    test('que pode ser preenchido', () => {
        render(<Formulario/>)
        const campoInput = screen.getByPlaceholderText('Digite um valor')
        userEvent.type(campoInput, '50');
        expect(campoInput).toHaveValue(50)
    });
})

test('deve chamar um evento de onSubmit ao clicar em realizar transação', () => {
    const realizarTransacao = jest.fn();

    render(<Formulario realizarTransacao={realizarTransacao}/>)
    const botao = screen.getByRole('button');

    userEvent.click(botao)
    expect(realizarTransacao).toHaveBeenCalledTimes(1);
})

test('Deve ser possível seleciona uma opção do elemento <select/>', () => {
    render(<Formulario/>)
    const select = screen.getByRole('combobox') //faz a consulta do elemento select.
    userEvent.selectOptions(select, ['Depósito']) // simula a ação de selecionar uma opção do select

    expect(screen.getByRole('option', {name: 'Selecione um tipo de transação'}).selected).toBe(false) // verifica se a opção de selecionar um tipo de transação não foi selecionada
    expect(screen.getByRole('option', {name: 'Depósito'}).selected).toBe(true); //verifica se a opção de depósito foi selecionada
})

