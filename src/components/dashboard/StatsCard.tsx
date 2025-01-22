import { Card } from "@/components/ui/card";

interface StatsCardProps {
  value: string | number;
  label: string;
  icon: React.ReactNode;
}

export const StatsCard = ({ value, label, icon }: StatsCardProps) => {
  return (
    <Card className="dashboard-card">
      <div className="flex items-center justify-between">
        <div>
          <div className="stats-value">{value}</div>
          <div className="stats-label">{label}</div>
        </div>
        <div className="text-primary opacity-80">
          {icon}
        </div>
      </div>
    </Card>
  );
};