import { useEffect, useState } from 'react';
import { loadCsv, lotStats } from '../utils/wat';
import LotCard from '../components/LotCard';

export default function Home() {
  const [lots, setLots] = useState<any[]>([]);
  useEffect(() => {
    loadCsv().then(records => {
      const stats = lotStats(records);
      setLots(Object.keys(stats));
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">SELECT WAFER LOT</h1>
      <div className="grid gap-4">
        {lots.map(lot => (
          <LotCard key={lot} lot={lot} />
        ))}
      </div>
    </div>
  );
}
