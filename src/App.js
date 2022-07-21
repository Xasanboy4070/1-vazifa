import header_img from "./img/header.png";
import header_img2 from "./img/header2.png";

import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";

import about from "./img/about.png";

import product1 from "./img/product1.png";
import product2 from "./img/product2.png";
import product3 from "./img/product3.png";
import product4 from "./img/product4.png";

import "./App.css";

function App() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <h2>Plant</h2>
          </li>
        </ul>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Login</li>
          <button className="btn_login">Login</button>
        </ul>
      </nav>
      <header>
        <div className="title">
          <h1 className="title_header">
            Growing <br /> Beautiful Plants <br /> at Home
          </h1>
          <p className="p_header">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
            accusamus <br /> temporibus? Velit odit est consequatur minima enim
            sit pariatur culpa <br /> rerum mollitia libero molestias ex ullam
            dolore totam, blanditiis error.
          </p>
          <button className="btn_header">Learn More</button>
          <div className="numbers">
            <div className="num">
              <h1>2000+</h1>
              <h5 className="h5_header">Delivery</h5>
            </div>
            <div className="num">
              <h1>1200+</h1>
              <h5 className="h5_header">Delivery</h5>
            </div>
            <div className="num">
              <h1>1000+</h1>
              <h5 className="h5_header">Product</h5>
            </div>
          </div>
        </div>
        <img src={header_img} alt="" />
        <img className="img_header2" src={header_img2} alt="" />
      </header>
      <section className="images">
        <div className="title_img">
          <h1 className="h1_images">
            We have lots of plants <br /> collection for you and <br /> your
            family
          </h1>
          <p>See all collection -></p>
        </div>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </section>
      <section className="about">
        <div className="about_img">
          <img className="img_about" src={about} alt="" />
        </div>
        <div className="about_title">
          <p className="p_about">About Us</p>
          <h1 className="h1_about">
            Continue to Develop to <br /> Became Global Company
          </h1>
          <p className="p2_about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,{" "}
            <br />
            nemo ratione. Corrupti enim aspernatur error et tempora culpa <br />
            repellendus eligendi, sed consequatur ex rem, autem quam <br />{" "}
            praesentium ipsum deleniti placeat?
          </p>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            quaerat <br /> expedita earum ex sint aliquid neque eius dicta.
          </h5>
          <button className="btn_about">Read More</button>
        </div>
      </section>
      <section className="product">
        <div className="title_product">
          <h1 className="h1_product">Our Best Product</h1>
          <ul>
            <li>New Plants</li>
            <li>New Arrivals</li>
            <li>Sale</li>
          </ul>
        </div>
        <div className="product_images">
          <div className="product_img">
            <img src={product1} alt="" />
            <h3>Outdoor Plant</h3>
            <span>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </span>
            <p>$50.00</p>
          </div>
          <div className="product_img bgc2">
            <img src={product2} alt="" />
            <h3>Outdoor Plant</h3>
            <span>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </span>
            <p>$50.00</p>
          </div>
          <div className="product_img">
            <img src={product3} alt="" />
            <h3>Outdoor Plant</h3>
            <span>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </span>
            <p>$50.00</p>
          </div>
          <div className="product_img bgc4">
            <img src={product4} alt="" />
            <h3>Outdoor Plant</h3>
            <span>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </span>
            <p>$50.00</p>
          </div>
        </div>
        <button className="btn_product">View All</button>
      </section>
    </div>
  );
}

export default App;
