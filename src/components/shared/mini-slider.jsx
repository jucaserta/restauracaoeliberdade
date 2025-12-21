import React, { useEffect, useMemo, useRef, useState } from "react";

export default function MiniSlider({
  images = [],
  autoPlay = true,
  interval = 3500,
  transitionMs = 450,
  pauseOnHover = true,
}) {
  const slides = useMemo(() => (Array.isArray(images) ? images : []), [images]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isHover, setIsHover] = useState(false);

  const timerRef = useRef(null);
  const lockRef = useRef(false);

  const hasSlides = slides.length > 0;

  const goTo = (nextIndex) => {
    if (!hasSlides) return;
    if (slides.length === 1) return;
    if (lockRef.current) return;

    lockRef.current = true;
    setPrevIndex(activeIndex);
    setActiveIndex(nextIndex);

    window.setTimeout(() => {
      setPrevIndex(null);
      lockRef.current = false;
    }, transitionMs);
  };

  const next = () => {
    const n = (activeIndex + 1) % slides.length;
    goTo(n);
  };

  const prev = () => {
    const p = (activeIndex - 1 + slides.length) % slides.length;
    goTo(p);
  };

  useEffect(() => {
    if (!autoPlay) return;
    if (!hasSlides || slides.length <= 1) return;
    if (pauseOnHover && isHover) return;

    timerRef.current = window.setInterval(() => {
      next();
    }, interval);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, hasSlides, slides.length, interval, isHover, activeIndex]);

  if (!hasSlides) {
    return (
      <div className="rounded-xl border border-light-green/20 bg-off-white p-6 text-center">
        <p className="text-darkgray">Sem imagens.</p>
      </div>
    );
  }

  const active = slides[activeIndex];
  const prevSlide = prevIndex !== null ? slides[prevIndex] : null;

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-light-green/20"
      onMouseEnter={() => pauseOnHover && setIsHover(true)}
      onMouseLeave={() => pauseOnHover && setIsHover(false)}
    >
      {/* camada anterior (faz o fade-out) */}
      {prevSlide && (
        <img
          src={prevSlide.src}
          alt={prevSlide.alt || "Slide anterior"}
          className="absolute inset-0 h-[280px] md:h-[347px] w-full object-cover opacity-0"
          style={{ transition: `opacity ${transitionMs}ms ease` }}
          draggable="false"
        />
      )}

      {/* camada atual (fade-in) */}
      <img
        key={active.src}
        src={active.src}
        alt={active.alt || `Slide ${activeIndex + 1}`}
        className="relative h-[280px] md:h-[347px] w-full object-cover opacity-100"
        style={{ transition: `opacity ${transitionMs}ms ease` }}
        loading="lazy"
        draggable="false"
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
