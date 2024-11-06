import { useEffect, useState } from 'react';
import '../components/modal.css'

interface ModalLaligaProps {
    titulo: string;
  }
  
  function ModalLaliga({ titulo }: ModalLaligaProps) {
  
    const [jogos, setJogos] = useState<any[]>([]);
  
    useEffect(() => {
      fetch('http://127.0.0.1:5000/api/v1/jogos/la-liga/', {
        method: 'GET',
        mode: 'cors',
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          setJogos(data); 
        })
        .catch((err) => console.error(err));
    }, []);
    
    const jogo = jogos.find((item) => 
      item.equipes.mandante.nome_popular === titulo || 
      item.equipes.visitante.nome_popular === titulo
    );
  
    if (!jogo) return <div>Carregando...</div>; 
  
    return (
      <>
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {titulo}
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
  
              <div className="modal-body">
                <div className='container-modal'> 
                  <div className='content-modal'>
                    <img src={jogo.equipes.mandante.escudo} alt="Escudo Mandante" />
                    <p>{jogo.equipes.mandante.nome_popular}</p>
                  </div>
                  <div className='content-modal-placar'>
                  <h2>{jogo.placar_oficial_mandante}</h2> 
                  X
                  <h2>{jogo.placar_oficial_visitante}</h2> 
                  </div>
                  <div className='content-modal'>
                    <img src={jogo.equipes.visitante.escudo} alt="Escudo Visitante" />
                    <p>{jogo.equipes.visitante.nome_popular}</p>
                  </div>
                </div>
              </div>
  
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default ModalLaliga;
  