export default function WaferThumb({ id, onClick }: { id: string; onClick: () => void }) {
  return (
    <div className="border p-2 cursor-pointer" onClick={onClick}>
      Wafer {id}
    </div>
  );
}
