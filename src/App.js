import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Start Point</h1>
        <LoginForm />
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
}

export default App;
