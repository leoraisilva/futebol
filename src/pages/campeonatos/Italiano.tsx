import { useEffect, useState } from 'react';
import '../campeonatos/campeonato.css';

function Italiano() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/v1/serie-a/', {
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
      setData(data.sort((a: any, b: any) => Number(a.ordem) - Number(b.ordem)))
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <main className='container-table'>
      <div className='content-table'>
        <h1>Série A</h1>

        <table className="table table-striped table-bordered">
          <thead className='header-table'>
            <tr>
              <td>Clube</td>
              <td>Classificação</td>
              <td>Pontos</td>
              <td>Vitórias</td>
              <td>Empates</td>
              <td>Derrotas</td>
              <td>Gols Pró</td>
              <td>Gols Contra</td>
              <td>Saldo de Gols</td>
              <td>Aproveitamento</td>
            </tr>
          </thead>
          <tbody className='body-table'>
            {data.map((clube: any, index: any) => (
              <tr key={index}>
                <td><img src={clube.escudo} /> {clube.nome_popular} </td>
                <td>{clube.ordem}</td>
                <td>{clube.pontos}</td>
                <td>{clube.vitorias}</td>
                <td>{clube.empates}</td>
                <td>{clube.derrotas}</td>
                <td>{clube.gols_pro}</td>
                <td>{clube.gols_contra}</td>
                <td>{clube.saldo_gols}</td>
                <td>{clube.aproveitamento}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>

  );
}

export default Italiano;
