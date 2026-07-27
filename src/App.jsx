import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      {/* The rest of the sections will go here! */}
      <main className="container mx-auto px-8 py-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
          Status: Online
        </h1>
        <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Dark Mode & Navigation <br /> <span className="text-primary">Successfully Initialized.</span>
        </h2>
      </main>
    </div>
  );
}

export default App;