import { FunctionComponent, useState } from 'react';
import Header from './components/header.component';

interface AppProps {
  message?: string;
}

const App: FunctionComponent<AppProps> = ({ message }) => {
  const [name, setName] = useState('');

  return <Header />;
};

export default App;
