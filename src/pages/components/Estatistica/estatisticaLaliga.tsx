import { useEffect, useState } from "react";


interface Static {
    index: number;
}

function Estatistica({index}: Static) {
    const [data, setData] = useState<any>([])


    useEffect(()=>{
    fetch('http://127.0.0.1:5000/api/v1/la-liga/' + index, {
        method: 'GET',
        mode: 'cors'
      })
      .then(res => {
        if(!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json()
      })
      .then(data => {
        setData(data)
      })
      .catch(err => console.error(err))
    }, [index])

    


    return (
        <>
        <h4>Resumo da Temporada</h4>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Indicador</th>
                    <th scope="col">Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Vitorias</td>
                    <td>{data.vitorias} ({(parseInt(data.vitorias)/parseInt(data.jogos)*100).toFixed(2)}%)</td>
                    </tr>
                    <tr>
                    <td>Derrotas</td>
                    <td>{data.derrotas} ({(parseInt(data.derrotas)/parseInt(data.jogos)*100).toFixed(2)}%)</td>
                    </tr>
                    <tr>
                    <td>Empates</td>
                    <td>{data.empates} ({(parseInt(data.empates)/parseInt(data.jogos)*100).toFixed(2)}%)</td>
                    </tr>
                    <tr>
                    <td>Gol Contra</td>
                    <td>{(parseInt(data.gols_contra)/parseInt(data.jogos)).toFixed(2)} por jogo</td>
                    </tr>
                    <tr>
                    <td>Gol A Favor</td>
                    <td>{(parseInt(data.gols_pro)/parseInt(data.jogos)).toFixed(2)} por jogo</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Estatistica;