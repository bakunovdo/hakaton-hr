import * as ReactDOM from 'react-dom/client';

import { Application } from './app';

const root = document.getElementById('root');

if (!root) {
  throw Error('Root not find');
}

ReactDOM.createRoot(root).render(<Application />);
