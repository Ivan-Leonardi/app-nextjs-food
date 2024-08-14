import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const ProductsTab = () => {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList className="flex">
        <TabsTrigger className="flex-1" value="tab-1">
          Tab-1
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="tab-2">
          Tab-2
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1" className="mt-6">Conteudo 1</TabsContent>
      <TabsContent value="tab-2" className="mt-6">Conteudo 2</TabsContent>
    </Tabs>
  );
};
