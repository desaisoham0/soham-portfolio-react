function Home() {
    return (
      <>
        <Header />
        <main className="py-8">
          <div className="bg-white/85 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 mb-8 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <About />
              </div>
              <div className="md:w-1/2 space-y-6">
                <Work />
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
  
  export default Home;