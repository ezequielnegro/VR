import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {collection,addDoc}  from "firebase/firestore"
import { db } from "../../firebase/config"

const FormContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const[commentsId, setCommentsId] = useState()
const commentsRef = collection(db, 'comments')

  const onSubmit = (data) => { 
    const comments = {
      ...data,
      fecha:new Date()
    }
    addDoc(commentsRef , comments)
    .then(doc => setCommentsId(doc.id)) 
  } 
   
  if (commentsId) {
    return(
      <>
      <div>Comentario enviado</div>
      </>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center flex-col gap-4 w-72"
    >
      <input
        type="text"
        className="bg-pink-100 border-b-2 border-pink-400"
        placeholder="Nombre"
        {...register("nombre", {
          required: true,
          maxLength: 80,
        })}
      />
      <input
        type="text"
        className="bg-pink-100  border-b-2 border-pink-400"
        placeholder="Apellido"
        {...register("apellido", { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        className="bg-pink-100  border-b-2 border-pink-400"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        className="bg-pink-100 border-b-2 border-pink-400"
        placeholder="Número de Teléfono"
        {...register("telefono", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />
      <textarea
        className="bg-pink-100 border-b-2 border-pink-400"
        placeholder="Escriba su mensaje"
        {...register("mensaje", { required: true, min: 4 })}
      />
      <input type="submit" value="Enviar" className="bg-pink-400 " />
    </form>
  );
};

export default FormContactPage;
