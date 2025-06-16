import { useParams, useNavigate } from 'react-router-dom';
import { fetchAiComment } from '../api/comment';
import { useEffect, useState } from 'react';
import Radar from '../components/Radar';

export default function ChipDetail() {
  const { lotId, waferId, chipId } = useParams();
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchAiComment({ lot: lotId!, wafer: waferId!, param: '', device: '' }).then(setComment);
  }, [lotId, waferId]);

  return (
    <div className="p-4">
      <button onClick={() => navigate(-1)} className="mb-4">Back</button>
      <h1 className="text-2xl font-bold mb-4">Chip {chipId}</h1>
      <Radar lot={lotId!} wafer={waferId!} chip={chipId!} />
      <div className="mt-4 p-2 border">{comment}</div>
    </div>
  );
}
