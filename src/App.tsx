import Card from "./components/card";
import SideBar from "./components/sidebar";


function App() {
  return (
    <>
      <div className="flex flex-row flex-initial">
        <SideBar />
        <div>
          <h1 className="text-4xl underline italic">App.js</h1>
          <Card title="test" />
        </div>
      </div>
    </>
  );
}

export default App;
