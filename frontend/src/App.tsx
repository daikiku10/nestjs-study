import ChipPathButton from "../components/ChipPathButton";

function App() {
  return (
    <div>
      <div>
        <h1>Cats 管理</h1>
      </div>
      <div className="flex items-center justify-center">
        <ChipPathButton />
      </div>

      <div className="flex items-center justify-center">
        <section className="section">
          <div className="section__item section__item--start">Content1</div>
          <div className="section__item">Content2</div>
        </section>
      </div>
    </div>
  );
}

export default App;
