const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border p-4 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-lg font-bold tracking-widest">BALENCIAGA — DEMO STORE</h1>
          <p className="text-xs text-muted-foreground mt-1">
            Чистый HTML/CSS/JS · файлы лежат в <code>public/balenciaga/</code>
          </p>
        </div>
        <a
          href="/balenciaga/index.html"
          target="_blank"
          rel="noreferrer"
          className="text-xs tracking-widest border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
        >
          OPEN FULLSCREEN ↗
        </a>
      </div>
      <iframe
        src="/balenciaga/index.html"
        title="Balenciaga concept store"
        className="w-full"
        style={{ height: "calc(100vh - 73px)", border: "none" }}
      />
    </div>
  );
};

export default Index;
