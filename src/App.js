import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='flex flex-col container max-w-md mx-auto md:pt-8'>
      <TodoList />
    </div>
  );
}

export default App;
