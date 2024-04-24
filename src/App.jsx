import ChildForm from './components/button/ChildForm';

const App = () => {
  // Function to handle logging of input value
  const logInputValue = (inputValue) => {
    console.log('Input value:', inputValue);
  };

  return (
    <div>
      {/* Render ChildForm component and pass logInputValue function as a prop */}
      <ChildForm onSubmit={logInputValue} />
    </div>
  );
};

export default App;

