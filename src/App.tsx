import MotionLazyContainer from "./common/components/animate/MotionLazyContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./App.css";
import Router from "./common/routes";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <MotionLazyContainer>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </MotionLazyContainer>
  );
}

export default App;
