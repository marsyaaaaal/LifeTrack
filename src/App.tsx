import { RouterProvider } from "react-router-dom";
import NavBar from "./components/navbar";
import router from "./routes/routes";

function App() {
  return (
    <div>
      <NavBar />
      <RouterProvider router={router} />

      {/* <BrowserRouter>
        <Routes>  
          <Route index element={<Loading />} />
          <Route path="login" element={<Home />} />
          <Route path="signup" element={<Sign />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
