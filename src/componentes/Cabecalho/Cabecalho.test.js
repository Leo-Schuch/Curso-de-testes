import {render, screen} from '@testing-library/react'
import Cabecalho from './index'

test('Renderizar o nome do usuario logado', () => {
    render(<Cabecalho/>)
    const nomeUsuario = screen.getByText('Joana Fonseca Gomes')
    expect(nomeUsuario).toBeInTheDocument();
});
