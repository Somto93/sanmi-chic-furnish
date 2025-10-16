import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DiningCollection from "./pages/DiningCollection";
import LivingRoomCollection from "./pages/LivingRoomCollection";
import OfficeCollection from "./pages/OfficeCollection";
import BedroomCollection from "./pages/BedroomCollection";
import KitchenCollection from "./pages/KitchenCollection";
import DoorsCollection from "./pages/DoorsCollection";
import RoofingCollection from "./pages/RoofingCollection";
import WindowsCollection from "./pages/WindowsCollection";
import RenderingCollection from "./pages/RenderingCollection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dining" element={<DiningCollection />} />
          <Route path="/living-room" element={<LivingRoomCollection />} />
          <Route path="/office" element={<OfficeCollection />} />
          <Route path="/bedroom" element={<BedroomCollection />} />
          <Route path="/kitchen" element={<KitchenCollection />} />
          <Route path="/doors" element={<DoorsCollection />} />
          <Route path="/roofing" element={<RoofingCollection />} />
          <Route path="/windows" element={<WindowsCollection />} />
          <Route path="/rendering" element={<RenderingCollection />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
