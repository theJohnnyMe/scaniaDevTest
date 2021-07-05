function App() {
  return (
    <div className="app-container">
      <header>
        <p className="header-title">Fleet portal</p>
        <div className="header-logo" />
      </header>
      <div className="subheader">
        <p className="subheader-title">Driver evaluation</p>
      </div>
      <main>
        <div className="u-mb3">
          <my-dropdown placeholder="Distance"></my-dropdown>
        </div>
        <my-table></my-table>
      </main>
    </div>
  );
}

export default App;
