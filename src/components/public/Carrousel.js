import React from "react";

export const Carrousel = () => {
  return (
    <div>
      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            src="rm1.jpeg"
            />
            
            <div class="container">
              <div class="carousel-caption text-start">
                <h1 className="text-light bg-dark">Tengan pensamiento independiente, no sean ovejas.</h1>
                <p>
                  <a class="btn btn-lg btn-success" href="#">
                  En todo momento, sigue tus propios sueños.
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <img
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            src="rm4.jpeg"
            />
            <div class="container">
              <div class="carousel-caption">
                <h1 className="text-light bg-dark">Pero los discursos son para hacer campaña. Ahora es el momento para la acción.</h1>
            
                <p>
                  <a class="btn btn-lg btn-success" href="#">
                  Hay ocasiones en que necesitamos actuar, a pesar de cualquier plan armado.
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <img
            class="bd-placeholder-img"
            width="100%"
            height="100%"
            src="rm3.jpeg"
            />
            <div class="container">
              <div class="carousel-caption text-end">
                <h1 className="text-light bg-dark">Lo siento, pero tu opinión significa muy poco para mí.</h1>
                <p>
                  <a class="btn btn-lg btn-success" href="#">
                  Las opiniones ajenas deben ser solo eso, opiniones que no nos afecten.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
