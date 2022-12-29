import {render, screen} from '@testing-library/react'
import Menu from './index';

test('Deve renderizar um Link para a página inicial', ()=> {
    render(<Menu/>);
    const linkPaginaInicial = screen.getByText('Inicial')
    expect(linkPaginaInicial).toBeInTheDocument();
});

test('Deve renderizar uma lista Link', ()=> {
    render(<Menu/>);
    const listaDeLinks = screen.getAllByRole('link')
    expect(listaDeLinks).toHaveLength(4);
});

test('Nao Deve o link para extrato', ()=> {
    render(<Menu/>);
    const linkExtrato = screen.queryByText('Extrato')
    expect(linkExtrato).not.toBeInTheDocument();
});

test('deve renderizar uma lista de links com a classe link', () => {
    render(<Menu/>)
    const links = screen.getAllByRole('link');
    links.forEach((link) => expect(link).toHaveClass('links'));
    expect(links).toMatchSnapshot();    
})

