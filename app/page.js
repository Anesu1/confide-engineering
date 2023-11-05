import Banner  from "./components/banner";
import Gallery from "./components/gallery";

import Pic from "./components/pic";
import Carousel from "./components/styled/carousel";
import WhatWeMake from "./components/whatwemake";
import WhatWeOffer from "./components/whatweoffer";

export default function Home() {
  return (
    <main>
     
     <Banner />
     <WhatWeMake />
     <Pic />
     <WhatWeOffer />
   
   
    </main>
  )
}
