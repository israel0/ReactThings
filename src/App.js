import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
            <Book title="Rich Dad Poor Dad" description="This is a book from my finance hub" />
            <Book title="Rich Dad Poor Dad 2" description="This is a book from my finance hub" />
            <Book title="Rich Dad Poor Dad 3" description="This is a book from my finance hub" />
            <Book title="Rich Dad Poor Dad 4" description="This is a book from my finance hub" />
    </div>
  );
}

const Book = (props) => {
  return (
         <>
             <h1>{props.title}</h1><p>{props.description}</p>
         </>
  );
}

export default App;
