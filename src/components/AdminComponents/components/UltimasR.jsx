import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const reservationsData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', amount: '$120' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', amount: '$80' },
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', amount: '$120' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', amount: '$80' },
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', amount: '$120' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', amount: '$80' },
  
];

export default function LatestReservations() {
  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-4 mb-4">
      <h2 className="mb-4 text-xl md:text-2xl font-semibold">
        Últimas Reservaciones
      </h2>
      <div className="flex flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {reservationsData.map((reservation, i) => (
            <div
              key={reservation.id}
              className={`flex flex-row items-center justify-between py-4 ${i !== 0 ? 'border-t' : ''}`}
            >
              <div className="flex items-center">
                <FontAwesomeIcon icon={faUser} className="mr-4 text-gray-700" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {reservation.name}
                  </p>
                  <p className="hidden text-sm text-gray-500 sm:block">
                    {reservation.email}
                  </p>
                </div>
              </div>
              <p className="truncate text-sm font-medium md:text-base">
                {reservation.amount}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <span className="h-5 w-5 text-gray-500">&#8594;</span>
          <h3 className="ml-2 text-sm text-gray-500">Actualizado justo ahora</h3>
        </div>
      </div>
    </div>
  );
}
