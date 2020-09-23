import React from "react";
import "./App.css";
import "./style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import productData from "./components/products/productList";
import Products from "./components/products/Products";

function App() {
  const contacts = [
    {
      name: "Gurdayal",
      imgurl:
        "https://i.pinimg.com/originals/1d/1b/0c/1d1b0c04d7dc90255d751c2dc8513589.jpg",
      phone: "9723236862",
      email: "guri@gmaoil.com",
    },
    {
      name: "jp",
      imgurl: "https://www.colourbox.com/preview/8687825-tiger.jpg",
      phone: "3845154",
      email: "jp@gmaoil.com",
    },
    {
      name: "Lalwnai",
      imgurl: "https://live.staticflickr.com/3565/3523618363_f8eba67d80_n.jpg",
      phone: "724678324",
      email: "lalwani@gmaoil.com",
    },
  ];

  const contactComponent = contacts.map((con) => (
    <Contact key={con.phone} contact={con} />
  ));

  //products
  const productComponent = productData.map((item) => (
    <Products key={item.id} products={item} />
  ));

  return (
    <div>
      <Header />
      <Main />
      {contactComponent}
      {productComponent}
      <Footer />
    </div>
  );
}

export default App;
