import { Container } from "react-bootstrap"
  
import Header from "./components/Header"
import Footer from './components/Footer'
import HomeScreen from './screens/HomeSreen'

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container >
          {/* <h1>My Sahi Pasal</h1> */}
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}  

export default App;
