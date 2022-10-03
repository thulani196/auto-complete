import { useState } from 'react';
import AutoComplete from './components/AutoComplete';
import './css/main.css';

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  return (
    <div className="main-container">
      <header className='main-title'><p>Auto-Complete Async</p></header>
      <AutoComplete searchTerm={searchTerm} onChange={setSearchTerm} />
    </div>
  );
}

export default App;
