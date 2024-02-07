import './App.css';
import { Book } from './Book.js';

function App() {

  const books = [
    {
        title : "Reach 1 Kid",
        description: "This is my book description",
        purchased_date: true
    },

    {
      title : "Reach Kid",
      description: "This is my book description",
      purchased_date: false
  },

  {
    title : "Reach 2 Kid",
    description: "This is my book description",
    purchased_date: true
  },

];

  return (
    <div className="App">
          {
             books.map((book , key) => !book.purchased_date &&
                 <Book key={key} title={ book.title } description={book.description} /> 
             )
          }
    </div>
  );
}


export default App;
