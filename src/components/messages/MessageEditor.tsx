import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon, Send } from "lucide-react";

export const MessageEditor = () => {
  return (
    <Card className="dashboard-card">
      <h3 className="text-lg font-semibold mb-4">Create Holiday Message</h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Subject</label>
          <Input placeholder="Enter message subject..." className="mt-1" />
        </div>
        <div>
          <label className="text-sm font-medium">Message Content</label>
          <Textarea 
            placeholder="Write your message here... Use {{name}} for client name"
            className="mt-1 min-h-[200px]"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ImageIcon className="h-4 w-4" />
          </Button>
          <Button className="ml-auto" type="submit">
            <Send className="h-4 w-4 mr-2" />
            Schedule Message
          </Button>
        </div>
      </div>
    </Card>
  );
};