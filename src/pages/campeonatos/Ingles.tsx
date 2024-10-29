import { useEffect, useState } from 'react';

function Ingles() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/v1/premier-league/', {
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
    <main>
      <h1>Premier League</h1>

      <table>
        <thead>
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
        <tbody>
          {data.map((clube: any, index: any) => (
            <tr key={index}>
              <td>{clube.nome_popular}</td>
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
    </main>

  );
}

export default Ingles;
