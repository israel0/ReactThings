import logo from './logo.svg';
import './App.css';

const isPurchased = false;
function App() {
  return (
    <div className="App">
            <Book title="Rich Dad Poor Dad" description="This is a book from my finance hub" purchased_date={isPurchased ? "January 2" : ""} />
            <Book title="Rich Dad Poor Dad 2" description="This is a book from my finance hub" purchased_date={isPurchased ? "January 2" : ""}/>
            <Book title="Rich Dad Poor Dad 3" description="This is a book from my finance hub" purchased_date={isPurchased ? "January 2" : ""}/>
            <Book title="Rich Dad Poor Dad 4" description="This is a book from my finance hub" purchased_date={isPurchased ? "January 2" : ""}/>
    </div>
  );
}

const Book = (props) => {
  return (
         <>
             <h1 className={isPurchased ? "colorRed" : "Black"}>{props.title}</h1><p>{props.purchased_date}</p> <p style={{ color: "gold" }}>{props.description}</p> <button>{isPurchased ? "Read Now" : ""}</button>
         </>
  );
}

export default App;
