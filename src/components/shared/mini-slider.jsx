import React, { useEffect, useMemo, useState } from "react";

export default function MiniSlider({ images = [], autoPlay = true, interval = 4500 }) {
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

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, interval, slides.length]);

  if (!hasSlides) {
    return (
      <div className="rounded-xl border border-light-green/20 bg-off-white p-6 text-center">
        <p className="text-darkgray">Sem imagens no slider.</p>
      </div>
    );
  }

  const current = slides[index];

  return (
    <div className="relative overflow-hidden rounded-xl border border-light-green/20">
      <img
        src={current.src}
        alt={current.alt || `Slide ${index + 1}`}
        className="h-[250px] md:h-[347px] w-full object-cover"
        loading="lazy"
      />

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-dark-green/60 backdrop-blur-md px-3 py-2 text-off-white"
            aria-label="Anterior"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-dark-green/60 backdrop-blur-md px-3 py-2 text-off-white"
            aria-label="Próximo"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full ${i === index ? "bg-primary" : "bg-off-white/70"}`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
