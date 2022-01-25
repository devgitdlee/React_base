import * as React from 'react';
 
import { Profile } from './components/Profile';
import { Counter } from './components/Counter';
import { TodoList } from './components/TodoList';
 
const App = () => {
  return (
    <div className='App'>
      <Profile name='name' job='job' />
      <Counter />
      <TodoList />
    </div>
  );
};
 
export default App;