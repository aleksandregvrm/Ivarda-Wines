// import Logo_2 from "../media/ivarda_logo2.jpg";
// import dark_bottles from "../media/bottles_in_dark.jpg";
import Featured from "../components/FeaturedWine";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="home">
      <article className="first-center section-center">
        <div className="home-images" id="home">
          {/* <img src={Logo_2} alt="" srcset="" className="first-image" /> */}
          {/* <img src={dark_bottles} alt="" srcset="" className="second-image" /> */}
        </div>
        <p>
          Welcome to Ivarda Wines, your ultimate destination for exquisite
          wines. At Ivarda, we pride ourselves on crafting exceptional red,
          white, rosé, and kvevri wines that embody the artistry and passion of
          winemaking. Indulge in the rich flavors and aromas that our red wines
          have to offer. Each bottle is meticulously crafted to capture the
          essence of the grapes, resulting in a symphony of bold and complex
          notes that will delight your palate. Experience the elegance and
          crispness of our white wines, carefully fermented to preserve their
          vibrant flavors. From refreshing citrus undertones to luscious
          tropical fruit nuances, our white wines offer a delightful journey
          with every sip. For those seeking a touch of sophistication, our rosé
          wines deliver a harmonious balance between fruitiness and floral
          undertones. These captivating wines are perfect for any occasion, from
          intimate gatherings to celebratory moments. Immerse yourself in the
          ancient winemaking tradition with our kvevri wines. Crafted in
          traditional clay vessels, these wines showcase unique textures and
          distinct flavors that pay homage to centuries of Georgian winemaking.
          At Ivarda Wines, we invite you to explore our exceptional collection
          and embark on a memorable journey through the world of fine wines.
          Whether you're a connoisseur or a curious wine enthusiast, we
          guarantee an unparalleled experience that will leave a lasting
          impression. Cheers to the art of wine!
        </p>
      </article>
      <article className="featured section-center">
        <Featured />
      </article>
      <article className="others-center section-center">
        <div className="others-header">
        <h2>Check Out other products</h2>
        <Link to="products">
          <button className="btn">Products</button>
        </Link>
        </div>
        <div className="bottles">
          <div className="wine-bottle"></div>
          <div className="wine-bottle bottle-2"></div>
          <div className="wine-bottle bottle-3"></div>
          <div className="wine-bottle"></div>
        </div>
      </article>
    </section>
  );
};

export default HomePage;
