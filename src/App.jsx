import { Routes, Route } from "react-router";
import RootLayout from "./layout/RootLayout";
import Homepage from "./pages/Index";
import DetailArticle from "./layout/DetailArticle";

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/article/:id" element={<DetailArticle />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
