import { createRoot } from 'react-dom/client';
import UserSearch from './refs/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  )
};

const root = createRoot(document.querySelector('#root')!);
root.render(<App />, );