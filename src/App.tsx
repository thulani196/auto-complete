import { useState } from 'react';
import AutoComplete from './components/AutoComplete';
import './css/main.css';

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  return (
    <div className="main-container">
      <header className='main-title'><p>Movie Title Auto-Complete</p></header>
      <AutoComplete searchTerm={searchTerm} onChange={setSearchTerm} />
    </div>
  );
}

export default App;
