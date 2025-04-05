import Banner from "../../components/banner/Banner"



const Home = () => {
  return (
    <>
      <Banner
        headline="Conocé TURY en Argentina"
        title="Tecnología Brasilera para tu auto"
        body="Tury llega con soluciones inteligentes para mejorar tu experiencia al volante."
        buttonText="CONSULTÁ STOCK DISPONIBLE"
        buttonLink="/products"
        buttonVariant="red"
        backgroundImage="/images/banner-image.jpg"
      />
      <section id="about-us" className="about-us-section">
        <div className="container">
          <div className="col">
            <div className="texts">
              <h5 className="subhead animate-on-scroll fade-down">NOSOTROS</h5>
              <span className="display-2 animate-on-scroll fade-down">
                Somos una <span className="black-color">empresa brasileña</span> comprometida en ofrecer accesorios{' '}
                <div className="key-image">
                  <img src='/images/key.png' alt="Llave" />
                </div>
                y soluciones de seguridad con la{' '}
                <span className="red-color">mejor calidad.</span>
              </span>
            </div>
            <img src='/images/about-us-car.png' alt="Auto" className="car" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
