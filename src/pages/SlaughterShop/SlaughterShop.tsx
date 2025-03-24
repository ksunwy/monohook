import Ads from "./components/Ads/Ads";
import Main from "./components/Main/Main";
import Rating from "./components/Rating/Rating";

const SlaughterShop = () => {
  return (
    <section className="w-full h-full flex gap-3">
      <Rating />
      <Main />
      <Ads />
    </section>
  )
}

export default SlaughterShop
