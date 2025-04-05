import { LineChart, Line, Scatter, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const accuracyPruningData = [
  { pruning: 0.3, weightsPruned: 40, accuracy: 90 },
  { pruning: 0.5, weightsPruned: 60, accuracy: 89 },
  { pruning: 0.7, weightsPruned: 75, accuracy: 87 },
  { pruning: 0.9, weightsPruned: 90, accuracy: 85 },
];

const speedupData = [
  { type: 'Filter pruning', VGG16: 1.1, ResNet56: 1.12, ResNet110: 1.15 },
  { type: 'Weight pruning', VGG16: 1.05, ResNet56: 1.08, ResNet110: 1.1 },
  { type: 'Channel pruning', VGG16: 1.15, ResNet56: 1.18, ResNet110: 1.2 },
  { type: 'Filter + Weight', VGG16: 1.12, ResNet56: 1.14, ResNet110: 1.18 },
];

export function AccuracyVsPruningGraph() {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={accuracyPruningData}>
          <XAxis dataKey="pruning" />
          <YAxis yAxisId="left" domain={[30, 100]} label={{ value: '% of weights pruned', angle: -90, position: 'insideLeft' }} />
          <YAxis yAxisId="right" orientation="right" domain={[80, 95]} label={{ value: '% accuracy', angle: -90, position: 'insideRight' }} />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="weightsPruned" stroke="#4F46E5" />
          <Scatter yAxisId="right" dataKey="accuracy" fill="#E53E3E" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SpeedupComparisonGraph() {
  return (
    <div className="w-full mt-2 h-80">
      <ResponsiveContainer width="90%" height="90%">
        <BarChart data={speedupData}>
          <XAxis dataKey="type" />
          <YAxis domain={[0, 1.2]} label={{ value: 'Speedups', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="VGG16" fill="#000000" />
          <Bar dataKey="ResNet56" fill="#808080" />
          <Bar dataKey="ResNet110" fill="#d3d3d3" stroke="#000" /> {/* Changed fill to light gray */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
