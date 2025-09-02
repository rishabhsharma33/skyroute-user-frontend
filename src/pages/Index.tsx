import FlightSearch from "../components/FlightSearch";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">      
      <main className="flex-1 bg-gradient-hero">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Your Perfect Flight
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Search and compare flights from hundreds of airlines to get the best deals for your next journey
            </p>
          </div>
          
          <FlightSearch />
        </div>
      </main>
    </div>
  );
};

export default Index;