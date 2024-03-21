import Footer from "../components/footer";
import Navbar from "../components/navbar";



export default function NavFootLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer/>
    </div>
  );
}
