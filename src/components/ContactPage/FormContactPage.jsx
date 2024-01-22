import React from "react";
import { useForm } from "react-hook-form";

const FormContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log("errores", errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center flex-col gap-4 w-96"
    >
      <input
        type="text"
        className="bg-pink-100 border-2 border-pink-400"
        placeholder="Nombre"
        {...register("Nombre", {
          required: true,
          maxLength: 80,
        })}
      />
      <input
        type="text"
        className="bg-pink-100  border-2 border-pink-400"
        placeholder="Apellido"
        {...register("Apellido", { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        className="bg-pink-100  border-2 border-pink-400"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        className="bg-pink-100 border-2 border-pink-400"
        placeholder="Número de Teléfono"
        {...register("Número de Teléfono", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />
      <textarea
        className="bg-pink-100 border-2 border-pink-400"
        placeholder="Escriba su mensaje"
        {...register("Mensaje", { required: true, min: 4 })}
      />
      <input type="reset" value="Enviar" className="bg-pink-400 " />
    </form>
  );
};

export default FormContactPage;
