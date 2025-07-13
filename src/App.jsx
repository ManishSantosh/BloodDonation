import Navbar from "./components/Navbar";
import BannerCarousel from "./components/BannerCarousal";
import DonationProcess from "./components/DonationProcess";
import WhyDonate from "./components/WhyDonate";
import AgeCalculator from "./components/AgeCalculator";
import JoinForm from "./components/JoinForm";

function App() {
  return (
    <>
      <Navbar />
      <BannerCarousel />
      <DonationProcess />
      <WhyDonate />
      <AgeCalculator />
      <JoinForm />
    </>
  );
}

export default App;
