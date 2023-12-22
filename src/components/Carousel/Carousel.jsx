import carousel from "/images/carousel.jpg"

const Carousel = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col justify-center">
<img src={carousel} alt="imagen de carteras" />
<h2 className="text-center uppercase text-xl text-slate-900">atrevete a vivir cómoda y con estilo</h2>

    </div>
  )
}

export default Carousel