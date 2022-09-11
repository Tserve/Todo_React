import { TodoLists } from '../components/organisms/TodoLists';
import { ResetStyle } from '../styles/reset';

function App() {
  return (
    <div className="App">
      <ResetStyle />
      <TodoLists />
    </div>
  );
}

export default App;
