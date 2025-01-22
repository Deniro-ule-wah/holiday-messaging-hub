import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Christmas', sent: 400, opened: 300 },
  { name: 'New Year', sent: 300, opened: 250 },
  { name: 'Valentine', sent: 200, opened: 180 },
  { name: 'Easter', sent: 250, opened: 220 },
];

export const EngagementChart = () => {
  return (
    <Card className="dashboard-card h-[400px]">
      <h3 className="text-lg font-semibold mb-4">Message Engagement</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sent" fill="#dc2626" name="Sent" />
          <Bar dataKey="opened" fill="#166534" name="Opened" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};