import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { Header } from './cmps/Header';

function App() {
  return (
    <div className="app">
      <Header/>
      <main>
        <Routes>
          {routes.map(route => <Route key={route.path} exact element={route.component} path={route.path} />)}
        </Routes>
      </main>
    </div>
  );
}

export default App;
