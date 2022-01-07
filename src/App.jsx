import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { HomeLinks } from './components/HomeLinks';

const App = () => {
  return (
    <Provider store={store}>
      <HomeLinks></HomeLinks>
    </Provider>
  );
};

export default App;