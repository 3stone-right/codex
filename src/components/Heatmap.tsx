interface Props {
  lot: string;
  wafer: string;
  onSelectChip: (chip: string) => void;
}
export default function Heatmap({ lot, wafer, onSelectChip }: Props) {
  const cells = Array.from({ length: 9 }, (_, i) => i + 1);
  return (
    <svg width={200} height={200} className="border">
      {cells.map(c => (
        <rect key={c} x={(c%3)*60} y={Math.floor(c/3)*60} width={50} height={50} fill="gray" onClick={() => onSelectChip(String(c))} />
      ))}
    </svg>
  );
}
