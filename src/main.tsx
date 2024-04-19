import ReactDOM from 'react-dom/client';
import AppRouter from './routes';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<AppRouter />);
