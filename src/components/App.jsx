import './App.scss';
import Menu from './Menu';
import menuList from '../mocks/plates';
import AddPeople from './AddPeople';
import Accounts from './Accounts';
import Pay from './Pay';

function App() {

  return (
    <section className="container">
      <section className="section">
        <h2 className="sr-only">Sección de menu y pedidos</h2>
        <Menu menuList={menuList} />
      </section>
      <section className="section">
        <h2 className="sr-only">Sección de pago</h2>
        <AddPeople />
        <Accounts />
        <Pay />
      </section>
    </section>
  );
}

export default App;
