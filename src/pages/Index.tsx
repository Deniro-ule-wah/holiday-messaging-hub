import { Mail, Users, Calendar, CheckCircle } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { EngagementChart } from "@/components/dashboard/EngagementChart";
import { MessageEditor } from "@/components/messages/MessageEditor";
import { ClientList } from "@/components/clients/ClientList";

const Index = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Holiday Messaging System</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard value="1,234" label="Total Messages" icon={<Mail className="h-6 w-6" />} />
        <StatsCard value="856" label="Active Clients" icon={<Users className="h-6 w-6" />} />
        <StatsCard value="12" label="Scheduled" icon={<Calendar className="h-6 w-6" />} />
        <StatsCard value="98%" label="Delivery Rate" icon={<CheckCircle className="h-6 w-6" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <EngagementChart />
        <MessageEditor />
      </div>

      <div className="mb-8">
        <ClientList />
      </div>
    </div>
  );
};

export default Index;