import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { About } from "@/components/about"
import { Reviews } from "@/components/reviews"
import { Booking } from "@/components/booking"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Reviews />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
