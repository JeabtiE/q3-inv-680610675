import { ChartBarDecreasing, LayoutGrid } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview">
          <ChartBarDecreasing />
          Overview
        </TabsTrigger>
        <TabsTrigger value="category">
          <LayoutGrid />
          By Category
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <OverviewCards />
      </TabsContent>
      <TabsContent value="category">
        <CategoryCards />
      </TabsContent>
    </Tabs>
  );
}
