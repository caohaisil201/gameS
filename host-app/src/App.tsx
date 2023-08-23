import { Suspense, lazy } from 'react';
import './App.css';

const RemoteComponent = lazy(() => import('remoteApp/RemoteComponent'));

function App() {
  return (
    <>
      <div className="App">
        <header className="app-header">
          <Suspense fallback={<div>Loading Remote component</div>}>
            <RemoteComponent />
          </Suspense>
        </header>
      </div>
    </>
  );
}

export default App;
