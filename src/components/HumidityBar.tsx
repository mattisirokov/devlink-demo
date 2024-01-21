interface HumidityBarProps {
  humidity: number;
}
export default function HumidityBar({ humidity }: HumidityBarProps) {
  return (
    <div className="h-full w-5 border border-gray-500 rounded flex flex-col-reverse">
      <div className="bg-green-500" style={{ height: `${humidity}%` }} />
    </div>
  );
}
