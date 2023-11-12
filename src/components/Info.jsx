import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faDollarSign, faCar, faBus, faTaxi } from '@fortawesome/free-solid-svg-icons';

const stats = [
  { id: 1, name: 'Puedes ir todo el año, pero la mas adecuada para ver a las cotorras es en Marzo y Abril. Pero existen otras consideraciones', value: 'Cuándo ir?', icon: faClock },
  { id: 2, name: 'Por persona $50', value: 'Entrada', icon: faDollarSign },
  { id: 3, name: 'Existe muchas maneras para llegar, a continuación te mostramos algunas de ellas', value: 'Como llegar?', icon: faCar },
];

const comoLlegarInfo = {
  title: 'Cómo Llegar',
  content: [
    {
      method: 'Auto',
      icon: faTaxi,
      description: 'Para llegar a la Sima de las Cotorras, solo tienes que caminar unos pasos desde donde estacionas el auto. Desafortunadamente, no hay transporte público directo hasta la Sima.',
      details: [
        'Primero, llega a Ocozocoautla. Desde Tuxtla son aproximadamente 40 minutos. Luego, toma la terracería que te llevará hasta la Sima, otros 40 minutos.',
        'El camino es seguro y está en buenas condiciones. Si usas GPS, busca "Sima de las Cotorras" y asegúrate de cargar el mapa previamente, ya que en la carretera no hay señal.',
        'Dado su cercanía, puedes combinar la visita con la Cascada del Aguacero, otra joya de Chiapas que merece la pena conocer. Se encuentra aproximadamente a 1 hora de distancia.'
      ]
    },
    {
      method: 'Tour',
      icon: faBus,
      description: 'Existen diferentes agencias en la Plaza de la Marimba de Tuxtla y en los andadores turísticos de San Cristóbal que ofrecen tours colectivos a la Sima de las Cotorras.',
      details: [
        'Los tours salen todos los días y puedes reservar un día antes. Muchas agencias ofrecen paquetes que incluyen varios destinos en un solo día.',
        'Otra opción es considerar el alquiler de un taxi por todo el día. Por lo general, los conductores de taxis cobran una tarifa fija por hora, y puedes negociar el precio.'
      ]
    }
  ]
};

export default function Info() {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className=" mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex flex-col items-center gap-y-4">
                <FontAwesomeIcon icon={stat.icon} className="text-4xl text-gray-700" />
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-lime-800 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">{comoLlegarInfo.title}</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Descubre las diferentes formas de llegar a la Sima de las Cotorras.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            {comoLlegarInfo.content.map((method, index) => (
              <article key={index} className="flex flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <FontAwesomeIcon icon={method.icon} className="text-3xl text-gray-600" />
                  <p className="font-medium text-gray-500">{method.method}</p>
                </div>
                <div className="group relative mt-3">
                  <p className="text-lg font-semibold leading-6 text-red-600">
                    {method.description}
                  </p>
                  <ul className="mt-3 md:text-xl text-sm leading-6 text-gray-600">
                    {method.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}