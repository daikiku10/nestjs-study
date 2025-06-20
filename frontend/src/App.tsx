import ChipPathButton from "../components/ChipPathButton";

function App() {
  return (
    <div>
      <header>
        <h1>Cats 管理</h1>
      </header>

      <main>
        <section>
          <div className="flex items-center justify-center">
            <ChipPathButton />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-center">
            <section className="section">
              <div className="section__item section__item--start">Content1</div>
              <div className="section__item">Content2</div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
