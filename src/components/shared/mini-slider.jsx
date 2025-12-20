import React, { useEffect, useMemo, useState } from 'react'

import Slide1 from '../../assets/images/hero_image_1.jpg'
import Slide2 from '../../assets/images/hero_image_2.jpg'
import Slide3 from '../../assets/images/about_img.jpg'

export default function MiniSlider({ interval = 4500 }) {
  const images = useMemo(() => [Slide1, Slide2, Slide3].filter(Boolean), [])
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const t = setInterval(() => setIdx((v) => (v + 1) % images.length), interval)
    return () => clearInterval(t)
  }, [images.length, interval])

  if (!images.length) return null

  return (
    <div className="relative overflow-hidden rounded-xl border border-light-green">
      <img
        src={images[idx].src}
        alt="Foto da clínica"
        className="w-full h-[220px] md:h-[260px] object-cover"
        width="900"
        height="520"
      />
      <div className="absolute inset-0 bg-[#0E1901]/20" />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => setIdx((v) => (v - 1 + images.length) % images.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 d2c_btn d2c_btn_secondary !px-4 !py-2 text-off-white border-light-green/20"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setIdx((v) => (v + 1) % images.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 d2c_btn d2c_btn_secondary !px-4 !py-2 text-off-white border-light-green/20"
            aria-label="Próximo"
          >
            ›
          </button>
        </>
      )}
    </div>
  )
}
