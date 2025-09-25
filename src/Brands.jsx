export default function Brands() {
  const brands = [
    {
      name: "Ferrari",
      img: "https://logos-world.net/wp-content/uploads/2020/05/Ferrari-Logo.png",
      desc: "Italian luxury sports car manufacturer with a long racing heritage.",
      updated: "3 mins ago",
      link: "https://www.ferrari.com",
      country: "Italy",
      owner: "Ferrari N.V.",
    },
    {
      name: "BMW",
      img: "https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo.png",
      desc: "German automotive brand known for luxury, innovation, and performance.",
      updated: "10 mins ago",
      link: "https://www.bmw.com",
      country: "Germany",
      owner: "BMW Group",
    },
    {
      name: "Lamborghini",
      img: "https://i.pinimg.com/736x/ca/f4/ae/caf4ae9005bf95e8a5fa4d14396a7304.jpg",
      desc: "Italian brand famous for producing high-performance exotic supercars.",
      updated: "30 mins ago",
      link: "https://www.lamborghini.com",
      country: "Italy",
      owner: "Automobili Lamborghini S.p.A. (Volkswagen Group)",
    },
    {
      name: "Mercedes-Benz",
      img: "https://1000logos.net/wp-content/uploads/2018/04/Mercedes-Benz-Logo.png",
      desc: "German luxury automotive brand known for comfort, safety, and innovation.",
      updated: "5 mins ago",
      link: "https://www.mercedes-benz.com",
      country: "Germany",
      owner: "Mercedes-Benz Group",
    },
    {
      name: "Porsche",
      img: "https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png",
      desc: "Renowned German brand famous for high-performance sports cars like the 911.",
      updated: "15 mins ago",
      link: "https://www.porsche.com",
      country: "Germany",
      owner: "Volkswagen Group",
    },
    {
      name: "Audi",
      img: "https://w0.peakpx.com/wallpaper/337/544/HD-wallpaper-audi-logo.jpg",
      desc: "German luxury brand with the iconic four rings, focusing on technology and performance.",
      updated: "20 mins ago",
      link: "https://www.audi.com",
      country: "Germany",
      owner: "Volkswagen Group",
    },
    {
      name: "Bugatti",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_08ciSQd-un1arxTKe_xikyYood28bL6rOw&s",
      desc: "French high-performance brand, famous for producing some of the fastest cars in the world.",
      updated: "25 mins ago",
      link: "https://www.bugatti.com",
      country: "France",
      owner: "Volkswagen Group",
    },
    {
      name: "Rolls-Royce",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP81Bo5UjL3h4_-N89GU9WAzcnV-2tbGvVQA&s",
      desc: "British marque known for ultimate luxury, craftsmanship, and prestige.",
      updated: "40 mins ago",
      link: "https://www.rolls-roycemotorcars.com",
      country: "United Kingdom",
      owner: "BMW Group",
    },
    {
      name: "Aston Martin",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPDHTjaUbaE9d8I9mG_x-Gx6LFV_O42Zo4A&s",
      desc: "Iconic British brand, associated with James Bond, blending elegance and power.",
      updated: "1 hr ago",
      link: "https://www.astonmartin.com",
      country: "United Kingdom",
      owner: "Aston Martin Lagonda Global Holdings plc",
    },
  ];

  return (
    <div className="container" style={{ padding: "80px" }}>
      {Array.from({ length: Math.ceil(brands.length / 3) }).map(
        (_, rowIndex) => (
          <div className="row d-flex align-items-stretch" key={rowIndex}>
            {brands.slice(rowIndex * 3, rowIndex * 3 + 3).map((brand) => (
              <div className="col-md-4 mb-4" key={brand.name}>
                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="card h-100 brand-card d-flex">
                    <div className="row g-0">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          src={brand.img}
                          className="img-fluid p-2"
                          alt={brand.name}
                        />
                      </div>
                      <div className="col-8">
                        <div className="card-body d-flex flex-column">
                          <h5 className="card-title">{brand.name}</h5>
                          <p className="card-text">{brand.desc}</p>
                          <p className="card-text">
                            <strong>Origin:</strong> {brand.country} <br />
                            <strong>Owner:</strong> {brand.owner}
                          </p>
                          <p className="card-text mt-auto">
                            <small className="text-body-secondary">
                              Updated {brand.updated}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}
