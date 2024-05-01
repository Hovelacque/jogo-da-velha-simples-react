import { useState } from "react"
import './index.css'

export default ({ current, change }) => {
    const [jogadorDaVez, setJogadorDaVez] = useState('X')
    const [gameover, setGameover] = useState(false);
    const [jogadas, setJogadas] = useState([
        '', '', '',
        '', '', '',
        '', '', ''
    ])

    function verificaCelulas(c1, c2, c3) {
        const ganhou = (
            jogadas[c1] != '' &&
            jogadas[c2] != '' &&
            jogadas[c3] != '' &&
            jogadas[c1] == jogadas[c2] &&
            jogadas[c2] == jogadas[c3]
        );

        // if (ganhou) {
        //     game.children[c1].style = 'background-color:#331436;';
        //     game.children[c2].style = 'background-color:#331436;';
        //     game.children[c3].style = 'background-color:#331436;';
        // }

        return ganhou;
    }

    function verificaGanhador() {
        if (
            verificaCelulas(0, 1, 2) || //linha1
            verificaCelulas(3, 4, 5) || //linha2
            verificaCelulas(6, 7, 8) || //linha3

            verificaCelulas(0, 3, 6) || //coluna1
            verificaCelulas(1, 4, 7) || //coluna2
            verificaCelulas(2, 5, 8) || //coluna3

            verificaCelulas(0, 4, 8) || //diagonal1
            verificaCelulas(2, 4, 6)    //diagonal2
        ) {
            setGameover(true);
        }

        const totalDeJogadas = jogadas.filter(x => x != '').length;
        if (totalDeJogadas == 9)
            setGameover(true);
    }

    const click = (index) => {
        const newJogadas = [...jogadas]
        newJogadas[index] = jogadorDaVez
        setJogadas(newJogadas);
        setJogadorDaVez(jogadorDaVez == 'X' ? 'O' : 'X')
        verificaGanhador();
        change(index);
    }

    return (
        <div className={!current ? "container" : "container velhaCorrente"}>
            <div className="game">
                {jogadas.map((item, index) => (
                    <button key={index.toString()}
                        className="buttonGame"
                        onClick={() => click(index)}>
                        {item}
                    </button>
                ))}
            </div>
        </div >
    )
}