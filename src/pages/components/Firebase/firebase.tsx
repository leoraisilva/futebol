import { useEffect, useState } from "react";


interface Data {
    time: string;
    adversario: string;
}

function Firebase({time, adversario}: Data) {
    const [data, setData] = useState<any>([])


    useEffect(()=>{
    fetch('http://127.0.0.1:5000/api/v1/ultimos/brasileirao/'+ time +'/' + adversario, {
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
    }, [time, adversario])

    


    return (
        <>
        <h4>Previsão da Partida</h4>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Indicador</th>
                    <th scope="col">Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Vitorias Confronto Direto</td>
                    <td>{data.vitoria} ({(parseInt(data.vitoria)/(parseInt(data.vitoria) + parseInt(data.empate) + parseInt(data.derrota))*100).toFixed(2)}%)</td>
                    </tr>
                    <tr>
                    <td>Derrotas Confronto Direto</td>
                    <td>{data.derrota} ({(parseInt(data.derrota)/(parseInt(data.vitoria) + parseInt(data.empate) + parseInt(data.derrota))*100).toFixed(2)}%)</td>
                    </tr>
                    <tr>
                    <td>Empates Confronto Direto</td>
                    <td>{data.empate} ({(parseInt(data.empate)/(parseInt(data.vitoria) + parseInt(data.empate) + parseInt(data.derrota))*100).toFixed(2)}%)</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Firebase;