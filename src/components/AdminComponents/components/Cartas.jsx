const data = {
  totalCollected: 5000,
  totalServices: 23,
  totalCustomers: 6,
};

export default function Cartitas() {
  return (
    <div className="flex space-x-4">
      <Card title="Colectado:" value={data.totalCollected} />
      <Card title="Total de Servicios dados:" value={data.totalServices} />
      <Card title="Total de Clientes:" value={data.totalCustomers} />
    </div>
  );
}

export function Card({ title, value }) {
  return (
    <div className="flex-1 rounded-xl bg-gray-50 p-2 shadow-sm mb-4">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
        {value}
      </p>
    </div>
  );
}
