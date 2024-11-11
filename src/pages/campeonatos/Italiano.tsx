import { useEffect, useState } from 'react';
import '../campeonatos/campeonato.css';
import ModalSerieA from '../components/Modal/modalSerieA';

function Italiano() {
  const [modal, setModal] = useState('')
  const [index, setIndex] = useState('')
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
              <tr key={index} onClick={() => {setModal(clube.nome_popular); setIndex(index + 1)}}>
              <td><img src={clube.escudo} />
                <button type="button" className="btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                {clube.nome_popular}
              </button></td>
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
        <ModalSerieA titulo={modal} index={index} />
      </div>
    </main>

  );
}

export default Italiano;
