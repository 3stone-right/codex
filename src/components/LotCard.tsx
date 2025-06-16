import { useNavigate } from 'react-router-dom';

export default function LotCard({ lot }: { lot: string }) {
  const navigate = useNavigate();
  return (
    <div className="border p-4 cursor-pointer" onClick={() => navigate(`/lot/${lot}`)}>
      <div className="text-lg font-semibold">Lot {lot}</div>
      <div className="text-sm text-gray-400">Created 2024-04-24</div>
    </div>
  );
}
