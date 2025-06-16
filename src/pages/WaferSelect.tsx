import { useParams, useNavigate } from 'react-router-dom';

export default function WaferSelect() {
  const { lotId } = useParams();
  const navigate = useNavigate();
  const wafers = Array.from({ length: 4 }, (_, i) => `0${i+1}`); // dummy
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Wafer Selection - Lot {lotId}</h1>
      <div className="grid grid-cols-2 gap-4">
        {wafers.map(w => (
          <div key={w} onClick={() => navigate(`/lot/${lotId}/wafer/${w}`)} className="cursor-pointer border p-4">Wafer {w}</div>
        ))}
      </div>
    </div>
  );
}
