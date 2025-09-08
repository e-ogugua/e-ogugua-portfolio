import { Route, Router } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/hooks/use-theme";
import Home from "@/pages/home";
import { About } from "@/pages/about";
import Learn from "@/pages/learn";
import Blog from "@/pages/blog";
import { Development } from "@/pages/development";
import { Consulting } from "@/pages/consulting";
import { Training } from "@/pages/training";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/learn" component={Learn} />
          <Route path="/blog" component={Blog} />
          <Route path="/development" component={Development} />
          <Route path="/consulting" component={Consulting} />
          <Route path="/training" component={Training} />
          <Route path="*" component={NotFound} />
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
