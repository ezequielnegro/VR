import FormContactPage from "./FormContactPage";

const ContactPage = () => {
  return (
    <>
      <div className="flex justify-center mt-16">
        <h2  className="text-center text-2xl capitalize ">Contacto</h2>
        <hr />
      </div>
      <div className="flex justify-center m-16">
        <FormContactPage />
      </div>
    </>
  );
};

export default ContactPage;
