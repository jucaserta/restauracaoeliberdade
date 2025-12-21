import React, { useMemo, useState } from "react";

export default function MiniSlider({ images = [] }) {
  const slides = useMemo(() => (Array.isArray(images) ? images : []), [images]);
  const [index, setIndex] = useState(0);

  const hasSlides = slides.length > 0;

  const next = () => {
    if (!hasSlides) return;
    setIndex((i) => (i + 1) % slides.length);
  };

  const prev = () => {
    if (!hasSlides) return;
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  if (!hasSlides) {
    return (
      <div className="rounded-xl border border-light-green/20 bg-off-white p-6 text-center">
        <p className="text-darkgray">Sem imagens.</p>
      </div>
    );
  }

  const current = slides[index];

  return (
    <div className="relative overflow-hidden rounded-xl border border-light-green/20">
      <img
        src={current.src}
        alt={current.alt || `Slide ${index + 1}`}
        className="h-[260px] md:h-[347px] w-full object-cover select-none"
        draggable="false"
        loading="lazy"
      />

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-dark-green/60 backdrop-blur-md px-3 py-2 text-off-white"
            aria-label="Anterior"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-dark-green/60 backdrop-blur-md px-3 py-2 text-off-white"
            aria-label="Próximo"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
