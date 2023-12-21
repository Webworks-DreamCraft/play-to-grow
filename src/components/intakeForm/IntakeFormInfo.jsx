const IntakeFormInfo = () => (
      <section className="md:pr-8 text-lg font-prata">
        <h2 className="font-patua text-4xl text-center md:text-6xl md:text-start pt-16 pb-3">
          Reach Out To Us
        </h2>
        <p className="text-center md:text-start pb-9">
          Once you fill out the intake and contact form, I will reach out to you
          via email within 3-to-5 business days. From there, we can decide if
          Play to Grow is the right fit for your child.
        </p>
        <section className="hidden md:block">
          <section className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>

            <p className="pl-4 pb-4">katiegonzalez@playtogrowgainesville.com</p>
          </section>
          <section className="flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0002 1.99951C8.00619 1.99951 4.7569 5.24881 4.7569 9.24271C4.7569 14.1993 11.2389 21.4758 11.5149 21.7831C11.7741 22.0718 12.2267 22.0713 12.4855 21.7831C12.7614 21.4758 19.2434 14.1993 19.2434 9.24271C19.2433 5.24881 15.9941 1.99951 12.0002 1.99951ZM12.0002 12.887C9.99068 12.887 8.35592 11.2522 8.35592 9.24271C8.35592 7.23326 9.99072 5.59849 12.0002 5.59849C14.0096 5.59849 15.6444 7.2333 15.6444 9.24275C15.6444 11.2522 14.0096 12.887 12.0002 12.887Z"
                fill="#3D1B0B"
              />
            </svg>
            <p className="pl-4">Gainesville, Florida</p>
          </section>
        </section>
        <section className="hidden md:flex pt-80">
            <img src="logo.png" width="421" height="431"/>
        </section>
      </section>
)

export default IntakeFormInfo;