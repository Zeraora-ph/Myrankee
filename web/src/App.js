import { useState } from "react";
import './App.css';
import axios from 'axios';

function App() {
  const [nickDoLol, setNickDoLol] = useState('');
  const [response, setResponse] = useState(null);

  function primeiraLetraMaiuscula(palavra) {
    if (typeof palavra !== 'string') return ''
    return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
  }

  async function pegarOElo(e) {
    e.preventDefault();
    const response = await axios.get(`http://localhost:8000/summonername/${nickDoLol}`)
    setNickDoLol('');
    setResponse(response.data)

    console.log(nickDoLol);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-input">
          <form onSubmit={pegarOElo}>
            <input type="text" value={nickDoLol} onChange={event => setNickDoLol(event.target.value)} />
            <button type="submit">Meu Elo</button>
          </form>
        </div>
        <div>
          {response && (
            <table style={{
              marginTop: 20
            }}>
              <tr>
                <td>
                  <tr>
                    <td>
                      {response.summonerName}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {response.tier} {response.rank}
                    </td>
                  </tr>
                </td>
                <td>
                  <img src={`https://img.rankedboost.com/wp-content/uploads/2016/06/Season_2019_-_${primeiraLetraMaiuscula(response.tier)}_1.png`} alt={response.tier} />
                </td>
              </tr>
            </table>

          )}

        </div>
      </header>
    </div>
  );
}

export default App;
