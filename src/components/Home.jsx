import "../assets/css/Home.css";
import Header from './Header';
import CardPizza from './CardPizza';

const Home = ({ user }) => {
  return (
    <main>
      <Header />
      <div className="container my-4 d-flex gap-4 flex-wrap justify-content-center">
        <CardPizza 
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="/public/img/napolitana.jpg"
        />
        <CardPizza 
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="/public/img/espanola.jpg"
        />
        <CardPizza 
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="/public/img/peppe.jpg"
        />
      </div>
    </main>
  )
}

export default Home
