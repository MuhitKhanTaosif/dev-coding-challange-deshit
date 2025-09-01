import NavBar from "./components/NavBar";
import SocialProof from "./components/SocialProof";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <NavBar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <SocialProof />
      <Footer />
    </>
  );
}
