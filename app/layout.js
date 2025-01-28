// import Navbar from './components/Navbar'
import "./globals.css";
import Navigation from "./components/navigation";
import GetAQuote from "./components/getaquote";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { productSansRegular, avenirNext,
  productSansBold
 } from "./font/font";
import Whatsapp from "./components/styled/whatsapp";  
import Head from "next/head";

export const metadata = {
  title: "Confide Engineering",
  description:
    "Confide Engineering: Leading manufacturer and supplier in Zimbabwe, specializing in medical, catering, butchery, and bakery equipment, along with school and office furniture. Core strengths in welding and metal fabrication. Extensive hardware division offering window frames, door frames, paint, and related items. Serving diverse industries and clientele, including hospitals, educational institutions, corporations, contractors, and government agencies. Committed to superior quality and adherence to international standards. Providing innovative solutions for a better world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Confide Engineering</title>
        <meta
          name="keywords"
          content="Engineering solutions, Innovative products, Utilities, Metalworking, Metal processing, Fabrication services, Custom metalwork, Metal products, Metalworking tools, Metalworking equipment, Steel fabrication, Steel products, Steelworking, Steel processing, Industrial equipment, Manufacturing services, Metalworking machinery, Sheet metal, Metalworking techniques, Metalworking processes, Metalworking technology, Metalworking expertise, Quality engineering, Contemporary market needs, Market innovation, Global marketplace, Local marketplace, Steel frames, Custom metal fabrication, Industrial hardware, Medical supplies, Educational supplies, Commercial kitchen equipment, Food processing equipment, Metalworking capabilities, Metal finishing, Metal assembly, Metal cutting, Metal shaping, Metal design, Metal finishing techniques, Metal finishing processes, Metalworking craftsmanship, Custom metal design, Metalworking services, Metalworking expertise, Zimbabwe, Manufacturer, Supplier, Medical equipment, Catering equipment, Butchery equipment, Bakery equipment, Commercial trolleys, School furniture, Office furniture, Welding, Metal fabrication, Hardware, Window frames, Door frames, Paint, Hospitals, Educational institutions, Corporations, Contractors, Individual consumers, Municipal entities, Government agencies, International standards, Vision Statement, Mission Statement, Plasma Cutting, Metal Sheet Rolling, Metal Sheet Fabrication, Metal Sheet Bending, Round Tube Bending, Palisade Fence Punching, Spot Welding, Notching, Hole Punching on Metal Sheet (19mm, 25mm, 32mm, 38mm), Knockout Punching (19mm, 25mm), Hospital Equipment, School and Office Equipment, Catering & Butcher Equipment, Commercial Trolleys, Fencing, General Hardware Supplies."
        />
      </Head>
      <body
        className={` ${productSansRegular.variable} ${productSansBold.variable} ${avenirNext.variable} `}
      >
        <Navigation />
        {children}

        <Whatsapp />
        <GetAQuote />
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
