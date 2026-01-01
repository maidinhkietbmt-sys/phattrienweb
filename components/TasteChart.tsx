
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { TasteNotes } from '../types';

interface Props {
  notes: TasteNotes;
}

const TasteChart: React.FC<Props> = ({ notes }) => {
  const data = [
    { subject: 'Đắng', A: notes.bitterness, fullMark: 10 },
    { subject: 'Chua', A: notes.acidity, fullMark: 10 },
    { subject: 'Ngọt', A: notes.sweetness, fullMark: 10 },
    { subject: 'Thơm', A: notes.aroma, fullMark: 10 },
    { subject: 'Thể chất', A: notes.body, fullMark: 10 },
  ];

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#4E342E', fontSize: 12 }} />
          <Radar
            name="Coffee"
            dataKey="A"
            stroke="#4E342E"
            fill="#4E342E"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TasteChart;
