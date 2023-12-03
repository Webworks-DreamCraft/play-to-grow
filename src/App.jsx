import Footer from "./components/Footer"
import IntakeForm from "./components/IntakeForm"

const App = () => {

  return (
    <>
      <section className="md:container mx-auto flex justify-center bg-palm-leaf">
        <IntakeForm />
      </section>
        <Footer />
    </>
  )
}

export default App
