import './Home.css';

function Home() {
  const categories = [
    { src: "veg.jpg", title: "Veg Items", desc: "Explore our wide range of fresh vegetables!" },
    { src: "nonveg.jpeg", title: "Non-Veg Items", desc: "Premium quality non-veg products for you." },
    { src: "sweet items.jpeg", title: "Sweet Products", desc: "Fresh sweet products delivered daily." },
    { src: "snacks.jpeg", title: "Snacks", desc: "Delicious and crispy snacks for your evening cravings." },
    { src: "fruits.jpeg", title: "Fruits", desc: "Enjoy seasonal and exotic fresh fruits every day." },
    { src: "juices.jpeg", title: "Juices", desc: "Refreshing fruit juices to keep you energized." },
    { src: "dairy.jpeg", title: "Dairy Products", desc: "Fresh milk, cheese, butter, and yogurt for daily nutrition." },
    { src: "bakery.jpeg", title: "Bakery Items", desc: "Freshly baked bread, cakes, and cookies just for you." },
    { src: "dryfruits.jpeg", title: "Dry Fruits", desc: "Healthy and tasty dry fruits for your daily boost." },
    { src: "spices.jpeg", title: "Spices", desc: "Authentic spices to add flavor to your meals." },
    { src: "grains.jpeg", title: "Grains & Pulses", desc: "Healthy grains, pulses, and lentils for a balanced diet." },
    { src: "https://i.ytimg.com/vi/pGb7cXVJARE/maxresdefault.jpg", title: "Chocolates", desc: "Delicious chocolates to satisfy your sweet cravings." }
  ];

  const marqueeItems = [
    { src: "https://th.bing.com/th/id/OIP.1LmtYXewveDP9mgdyUb73AHaFc?w=240&h=180", title: "Chicken" },
    { src: "https://th.bing.com/th/id/OIP.DUYTHDHpC-gmooG0Pawt8gHaD5?w=332&h=180", title: "Sweets" },
    { src: "https://th.bing.com/th/id/OIP.g_IOiHb9mx8R80T41Xq51QHaHa?w=156&h=180", title: "Mutton" },
    { src: "https://th.bing.com/th/id/OIP.WFFVQvpawt-ljhTlTFFe1QHaFi?w=245&h=183", title: "Fruits" },
    { src: "https://th.bing.com/th/id/OIP.T6pi12U2Vpa54RGmKIZt1QHaE7?w=221&h=180", title: "Grains" },
    { src: "https://th.bing.com/th/id/OIP.Zuvt_deT0BMVGkdi5Im-CgHaE8", title: "Juices" },
    { src: "https://i.pinimg.com/736x/fd/e8/68/fde8687d1479eb2d9846bf5b04b81ad8.jpg", title: "Vegetables" },
    { src: "https://th.bing.com/th/id/OIP.olBNlOUmxR5JbRL0B1ZlugHaEw?w=295&h=189", title: "Spices" },
    { src: "https://th.bing.com/th/id/OIP.mUQ3a14ZE7_A1V7kpwyHawHaEK?w=315&h=180", title: "Dry Fruits" },
    { src: "https://d161wrq7muokn7.cloudfront.net/images/product/500.500/Dairy-Milk-Silk-Combo.jpg", title: "Chocolates" }
  ];

  const offers = [
    {
      src: "/christmas.avif",
      title: "Christmas Cakes!",
      desc: "Special discounts Christmas Cakes"
    },
    {
      src: "/vegetables.jpg",
      title: "Exclusive Veg Discount",
      desc: "Get 20% off on all vegetable products."
    },
    {
      src: "/nonvegitems.webp",
      title: "Non-Veg Feast",
      desc: "Buy 2, Get 1 free on non-veg products."
    },
    {
      src: "/sweetitems.jpg",
      title: "Sweet Treat",
      desc: "Special discount on all sweet items."
    },
    {
      src: "/frootitems.jpg",
      title: "Fresh Fruits Deal",
      desc: "Get 15% off on seasonal fruits."
    },
    {
      src: "/juiceitems.jpg",
      title: "Juice Boost",
      desc: "Buy any 2 juices, get 1 free!"
    },
    {
      src: "/bakeryitems.jpg",
      title: "Bakery Extravaganza",
      desc: "Special discounts on freshly baked goodies."
    },
    {
      src: "/newyear.webp",
      title: "New Year Cakes!",
      desc: "Special discounts on New Year Cakes."
    }
  ];

  return (
    <>
      <section className="hero">
        <div>
          <h1 className="hero-title">Welcome to Our Store</h1>
          <p className="hero-subtitle">Freshness delivered to your doorstep</p>
        </div>
      </section>

      <section className="highlights">
        <h2>Popular Categories</h2>
        <div className="category-cards">
          {categories.map((item, index) => (
            <div className="category-card" key={index}>
              <img src={item.src} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-us">
        <h2>Why Choose Us?</h2>
        <p>We offer high-quality products, affordable prices, and fast delivery services. Your satisfaction is our priority!</p>
      </section>

      <section className="food-items-marquee">
        <h2>Special Food Items</h2>
        <div className="marquee-container">
          <marquee behavior="scroll" direction="left" scrollAmount="20">
            {marqueeItems.map((item, index) => (
              <div className="food-item" key={index}>
                <img src={item.src} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
            ))}
          </marquee>
        </div>
      </section>

      <section className="special-offers">
        <h2>Special Offers</h2>
        <div className="offer-cards">
          {offers.map((offer, index) => (
            <div className="offer-card" key={index}>
              <img src={offer.src} alt={offer.title} />
              <h3>{offer.title}</h3>
              <p>{offer.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
