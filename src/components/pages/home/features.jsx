'use client'

import Features from '../../../jsons/features.json'
import SectionHeader from '../../shared/section-header'
import detailThree from '../../../jsons/details-set-4.json'
import MiniSlider from '../../shared/mini-slider'

export default function FeaturesSection() {
  const unit2 = detailThree?.unit2
  const unit3 = detailThree?.unit3

  return (
    <section id="d2c_features">
      <div className="container">
        <SectionHeader
          subheading="Estrutura e cuidado"
          heading="Ambientes preparados e suporte em cada etapa"
          className="lg:w-[80%] xl:w-[60%]"
        />

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {Features.map((item, index) => (
            <div
              key={index}
              className={`col-span-12 md:col-span-6 lg:col-span-4 space-y-7 d2c_card p-3 ${
                index === 2 ? 'md:col-start-4' : ''
              }`}
              data-aos="fade-slide-up"
              data-aos-delay={item.delay}
            >
              <div className="space-y-3 text-center md:text-left xl:px-4 pt-4">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              <div>
                <img
                  src={item.img}
                  width={600}
                  height={400}
                  className="w-full h-[200px] 2xl:h-[300px] object-cover rounded-xl"
                  alt={item.title}
                />
              </div>
            </div>
          ))}

          {/* Bloco final */}
          <div
            className="col-span-12 d2c_card overflow-hidden"
            data-aos="fade-slide-up"
            data-aos-delay="600"
          >
            <div className="grid lg:grid-cols-2 gap-4 md:gap-20">
              {/* Onde era "Clinic That Understands..." -> Unidade 2 */}
              <div className="space-y-4 xl:space-y-5">
                <div className="space-y-2 text-center lg:text-left">
                  <h3>{unit2?.title || 'Unidade 2'}</h3>
                  <p className="text-base md:text-lg">{unit2?.description || ''}</p>
                </div>

                <MiniSlider images={unit2?.slider?.images || []} autoPlay={true} interval={3500} />
              </div>

              {/* Onde era Pediatric/Doctor-led -> Unidade 2 e Unidade 3 lado a lado */}
              <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">
                <div className="col-span-12 md:col-span-6 space-y-3">
                  <div className="space-y-2 text-center md:text-left">
                    <h4>{unit2?.title || 'Unidade 2'}</h4>
                    <p className="text-base">{unit2?.description || ''}</p>
                  </div>

                  <MiniSlider images={unit2?.slider?.images || []} autoPlay={true} interval={3800} />
                </div>

                <div className="col-span-12 md:col-span-6 space-y-3">
                  <div className="space-y-2 text-center md:text-left">
                    <h4>{unit3?.title || 'Unidade 3'}</h4>
                    <p className="text-base">{unit3?.description || ''}</p>
                  </div>

                  <MiniSlider images={unit3?.slider?.images || []} autoPlay={true} interval={3800} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
