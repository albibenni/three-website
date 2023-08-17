import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/page.tsx';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
