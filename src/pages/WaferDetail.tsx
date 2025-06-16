import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Heatmap from '../components/Heatmap';
import { fetchAiComment } from '../api/comment';

export default function WaferDetail() {
  const { lotId, waferId } = useParams();
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchAiComment({ lot: lotId!, wafer: waferId!, param: '', device: '' }).then(setComment);
  }, [lotId, waferId]);

  return (
    <div className="p-4">
      <button onClick={() => navigate(-1)} className="mb-4">Back</button>
      <h1 className="text-2xl font-bold mb-4">Wafer {waferId}</h1>
      <Heatmap lot={lotId!} wafer={waferId!} onSelectChip={(c) => navigate(`/lot/${lotId}/wafer/${waferId}/chip/${c}`)} />
      <div className="mt-4 p-2 border">{comment}</div>
    </div>
  );
}
