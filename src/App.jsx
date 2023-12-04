import Footer from "./components/Footer"
import IntakeFormContainer from "./components/intakeForm/IntakeFormContainer"

const App = () => {

  return (
    <>
      <section className="md:container mx-auto flex justify-center bg-palm-leaf">
        <IntakeFormContainer />
      </section>
        <Footer />
    </>
  )
}

export default App
