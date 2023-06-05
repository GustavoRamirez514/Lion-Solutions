import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Fuego en los Ojos',
    description: 'Sea flexible y cree nuevas posibilidades. Si tienes la pasión y la dedicación adecuadas, serás muy creativo.',
  },
  {
    name: 'Clases de Ingles Gratis',
    description: 'Para aquellos que quieren trabajar en su nivel de inglés, tenemos varios grupos de inglés a los que podrán unirse en cualquier momento.',
  },
  {
    name: 'Haz tu Mejor Esfuerzo',
    description: 'Independientemente de los comentarios de los clientes, siempre haces todo lo posible para entregar tu trabajo lo mejor posible porque eres un profesional.',
  },
  {
    name: 'Recursos de Aprendizaje',
    description: 'Creemos en el poder y la alegría de aprender. Brindamos una gran cantidad de recursos de aprendizaje sobre diseño, animación, negocios y marketing que lo ayudarán a crecer.',
  },
  {
    name: 'La Gente Primero',
    description: 'En cualquier caso o toma de decisiones ponemos a nuestra gente en primer lugar.',
  },
  {
    name: 'Vacaciones y cobertura por enfermedad',
    description: 'Ofrecemos 21 días de vacaciones por año junto con hasta 14 días de enfermedad pagados.',
  },
  {
    name: 'Somos un Equipo',
    description: 'Tú sabes algunas cosas, nosotros sabemos algunas cosas. Juntos sabemos muchas cosas.',
  },
  {
    name: 'Amigos de los Animales',
    description: '¡Amamos a los animales! Si quieres traer a tus amiguitos peludos contigo, ¡no dudes en hacerlo!',
  },
]

export default function List() {
  return (
    <div className="bg-white pb-16">
      <div className="mx-auto max-w-full py-10 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-full">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Valores y Ventajas</h2>
          <p className="mt-4 text-lg text-gray-500">
          Hay algunas cosas que valoramos en nuestra gente. Y lo que esperamos de la gente nueva también.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-dorado-logo" aria-hidden="true" />
                <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}