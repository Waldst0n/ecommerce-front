import { FunctionComponent, useState } from 'react';

interface AppProps {
  message?: string;
}

const App: FunctionComponent<AppProps> = ({ message }) => {
  const [name, setName] = useState('');

  return <h1>Hello world</h1>;
};

export default App;
