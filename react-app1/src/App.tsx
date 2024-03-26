import ListGroup from "./components/ListGroup";
import navbar from "./components/Navbar.js";
function App() {
  let items = ["New york", "Paris", "Milano", "Tokyo"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="City"
        onSelectItem={handleSelectedItem}
      ></ListGroup>
    </div>
  );
}
export default App;
