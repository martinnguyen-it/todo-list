import TodoHeader from './components/TodoHeader';
import TodoSections from './components/TodoSections';

function App() {
  return (
    <div className='flex flex-col container max-w-md mx-auto md:pt-8'>
      <div className="flex flex-col bg-gray-200 rounded shadow-lg">
        <TodoHeader />
        <TodoSections />
      </div>
    </div>
  );
}

export default App;
