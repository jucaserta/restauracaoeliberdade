import React from 'react'
import { useForm } from 'react-hook-form'
import Toast from 'react-hot-toast'

const WHATSAPP = 'https://wa.me/5511986843656'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const msg =
        `Novo contato pelo site:%0A` +
        `Nome: ${data.name}%0A` +
        `Telefone: ${data.phone}%0A` +
        `Contato: ${data.profile}%0A` +
        `Urgência: ${data.urgency}%0A` +
        `Mensagem: ${data.message}`

      window.open(`${WHATSAPP}?text=${msg}`, '_blank')
      Toast.success('Abrindo WhatsApp...')
      reset()
    } catch {
      Toast.error('Não consegui abrir o WhatsApp. Tente novamente.')
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="form-label">Nome completo</label>
        <input
          type="text"
          className="form-control"
          placeholder="Digite seu nome"
          {...register('name', { required: true })}
        />
        {errors.name && (
          <span className="mt-2 inline-block font-primary text-red-400 text-sm">
            Campo obrigatório
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-6">
        <div className="sm:col-span-3 lg:col-span-6 xl:col-span-3">
          <label className="form-label">Telefone / WhatsApp</label>
          <input
            type="tel"
            className="form-control"
            placeholder="(11) 99999-9999"
            {...register('phone', { required: true })}
          />
          {errors.phone && (
            <span className="mt-2 inline-block font-primary text-red-400 text-sm">
              Campo obrigatório
            </span>
          )}
        </div>

        <div className="sm:col-span-3 lg:col-span-6 xl:col-span-3">
          <label className="form-label">Quem está falando?</label>
          <select
            className="form-control"
            defaultValue=""
            {...register('profile', { required: true })}
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            <option value="Paciente">Paciente</option>
            <option value="Familiar">Familiar</option>
            <option value="Amigo(a)">Amigo(a)</option>
            <option value="Outro">Outro</option>
          </select>
          {errors.profile && (
            <span className="mt-2 inline-block font-primary text-red-400 text-sm">
              Campo obrigatório
            </span>
          )}
        </div>
      </div>

      <div>
        <label className="form-label">Urgência</label>
        <select
          className="form-control"
          defaultValue=""
          {...register('urgency', { required: true })}
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option value="Agora">Agora</option>
          <option value="Hoje">Hoje</option>
          <option value="Esta semana">Esta semana</option>
          <option value="Quero só tirar dúvidas">Quero só tirar dúvidas</option>
        </select>
        {errors.urgency && (
          <span className="mt-2 inline-block font-primary text-red-400 text-sm">
            Campo obrigatório
          </span>
        )}
      </div>

      <div data-aos="fade-up" data-aos-delay="1000">
        <label className="form-label">Mensagem</label>
        <textarea
          rows="4"
          className="form-control"
          placeholder="Conte em poucas linhas o que está acontecendo"
          {...register('message', { required: true })}
        />
        {errors.message && (
          <span className="mt-2 inline-block font-primary text-red-400 text-sm">
            Campo obrigatório
          </span>
        )}
      </div>

      <div data-aos="fade-up" data-aos-delay="600">
        <button
          type="submit"
          className="d2c_btn d2c_btn_primary w-full md:w-fit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Agora'}
        </button>
      </div>
    </form>
  )
}

