// components/Carrossel.tsx
"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function Carrossel() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        <div>
          <img src="/image-carousel/img1.jpg" alt="Programação 1" />
          <p className="legend">Aula de Programação</p>
        </div>
        <div>
          <img src="/image-carousel/img2.jpg" alt="Programação 2" />
          <p className="legend">Estudos em Campo Verde</p>
        </div>
        <div>
          <img src="/image-carousel/img3.jpg" alt="Programação 3" />
          <p className="legend">Projeto MHS</p>
        </div>
      </Carousel>
    </div>
  );
}