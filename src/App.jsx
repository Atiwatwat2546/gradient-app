import { useState } from "react";

export default function App() {
  const [color1, setColor1] = useState("#ff7eb3");
  const [color2, setColor2] = useState("#ff758c");
  const [angle, setAngle] = useState(90);
  const [height, setHeight] = useState(300);
  const [width, setWidth] = useState(600);

  const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

  return (
    <div className="min-h-screen flex">
      {/* Preview Section (Left) */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div
          style={{ background: gradient, width: `${width}px`, height: `${height}px` }}
          className="rounded-xl shadow-lg border"
        />
      </div>

      {/* Control Panel (Right) */}
      <div className="w-1/2 bg-white p-8 shadow-lg flex flex-col gap-4 sticky top-0 h-screen">
        <h1 className="text-3xl font-bold mb-6">Gradient Generator</h1>

        <label className="flex justify-between">
          Color 1: <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} />
        </label>
        <label className="flex justify-between">
          Color 2: <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} />
        </label>
        <label className="flex justify-between">
          Angle: {angle}°
          <input type="range" min="0" max="360" value={angle} onChange={(e) => setAngle(e.target.value)} />
        </label>
        <label className="flex justify-between">
          Width: {width}px
          <input type="range" min="100" max="1000" value={width} onChange={(e) => setWidth(e.target.value)} />
        </label>
        <label className="flex justify-between">
          Height: {height}px
          <input type="range" min="100" max="800" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>

        <textarea
          className="w-full p-2 border rounded-md text-sm"
          readOnly
          value={`background: ${gradient}; width: ${width}px; height: ${height}px;`}
        />
      </div>
    </div>
  );
}
