interface Props {
  lot: string;
  wafer: string;
  chip: string;
}
export default function Radar({ lot, wafer, chip }: Props) {
  return (
    <div className="border p-4">Radar chart placeholder for chip {chip}</div>
  );
}
