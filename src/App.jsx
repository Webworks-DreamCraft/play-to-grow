import Footer from "./components/Footer"
import IntakeForm from "./components/IntakeForm"

const App = () => {

  return (
    <>
      <section className="md:container mx-auto bg-palm-leaf">
        <p className="text-wheat-field">Play to Grow</p>
      </section>
        <IntakeForm />
        <Footer />
    </>
  )
}

export default App
