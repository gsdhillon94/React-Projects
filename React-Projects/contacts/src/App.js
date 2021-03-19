import { useEffect, useState } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard";
import ContactDetails from "./components/ContactDetails";

function App() {
  const [data, setdata] = useState([]);
  const [selected, setselected] = useState();
  const seeDetail = (id) => {
    data.length !== 0 &&
      data.forEach((d) => {
        if (d.id === id) {
          setselected(d);
        }
      });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((dat) => {
        setdata(dat);
      });
  }, []);
  return (
    <div className="App">
      <h2 className="header">Contacts</h2>
      <div className="contact-container">
        <div className="container-left">
          {data.length !== 0 &&
            data.map((con, i) => {
              return (
                <ContactCard
                  key={i}
                  data={con}
                  seeDetail={(id) => seeDetail(id)}
                ></ContactCard>
              );
            })}
        </div>
        <div className="container-right">
          {selected != null ? (
            <ContactDetails data={selected}></ContactDetails>
          ) : (
            <div>Select a Contact to View details</div>
          )}
        </div>
      </div>
      <div className="footer">
        Made by - Gurdayal Singh Dhillon / gsdhillon94@gmail.com
      </div>
    </div>
  );
}

export default App;
