import './App.css';
import Componen from './tugas-componen/componen-function';
import ComponenClass from './tugas-componen/componen-class';

function App() {
  const paragraf = `tugas react js membuat componen`
  const aLink = `Profile`

  const clickButton = () => alert(`tombol telah di click`)
  const h1Heder = () => <h1>Componen ini terbuat dari class</h1>

  return (
    <div className="App">
      <ComponenClass aLink={aLink} h1Heder={h1Heder} />
      <Componen paragraf={paragraf} clickButton={clickButton} />
    </div>
  );
}

export default App;
