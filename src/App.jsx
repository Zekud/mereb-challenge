import { useQuery } from "react-query";
import "./App.css";
import NavBar from "./components/NavBar";
import AllRoutes from "./router/AllRoutes";
import axios from "axios";

function App() {
  const fetchData = async () => {
    const response = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://loripsum.net/api/4"
    );
    return response.data.split("</p>").map((p) => p + "</p>"); // Split into paragraphs
  };

  const { data, isLoading, isError } = useQuery("data", fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <AllRoutes data={data} />
    </div>
  );
}

export default App;
