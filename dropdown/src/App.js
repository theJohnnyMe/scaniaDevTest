import "../../react-app/src/styles/App.css";

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
        <p>Stencil Component place</p>
        <my-dropdown placeholder="Distance"></my-dropdown>
        <br />
        <br />
        <br />
        <my-table></my-table>
      </main>
    </div>
  );
}

export default App;
