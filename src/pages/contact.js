import React from "react"
import { useForm } from "react-hook-form"
import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from "axios"
import * as qs from "query-string"
import "./contact.module.scss"

const ContactPage = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    console.log(data);
    const axiosOptions = {
      url: props.location.pathname,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(data),
    }
    axios(axiosOptions)
    .then(response => {
      console.log(response);
    })
    .catch(err =>
      console.log(err)
    )
  }
  return (
    <div>
      <Layout>
        <Seo title="Contactez moi" />
        <h3>Contactez-moi pour un projet innovant.</h3>
        <form 
          name="contact v1"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="form-name" value="contact v1" />
          <div hidden>
            <input name="bot-field" />
          </div>
          <div>
            <label htmlFor="nom">Nom</label>
            <br />
            <input
              id="nom"
              type="type"
              name="nom"
              {...register("nom", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.nom?.type === "required" && (
              <span>Ce champ est requis!</span>
            )}
            {errors?.nom?.type === "maxLength" && (
              <span>Le nom ne doit pas depasser 20 charactere</span>
            )}
            {errors?.nom?.type === "pattern" && (
              <span>Charactère Alhpanumérique uniquement</span>
            )}
          </div>
          <div>
            <label htmlFor="prenom">Prénom</label>
            <br />
            <input
              id="prenom"
              type="type"
              name="prenom"
              {...register("prenom", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors?.prenom?.type === "required" && (
              <span>Le nom est requis!</span>
            )}
            {errors?.prenom?.type === "maxLength" && (
              <span>Le prénom ne doit pas depasser 20 charactere</span>
            )}
            {errors?.prenom?.type === "pattern" && (
              <span>Charactère Alhpanumérique uniquement</span>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              id="email"
              type="type"
              name="email"
              {...register("email", { 
                required: true,
                pattern:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              })}
            />
            {errors?.email?.type === "required" && (
              <span>Le email est requis!</span>
            )}
            {errors?.email?.type === "pattern" && (
              <span>Emaill invalide!</span>
            )}
          </div>
          <div>
            <label htmlFor="commentaire">Message</label>
            <br />
            <textarea
              id="commentaire"
              type="type"
              name="commentaire"
              {...register("commentaire", { 
                required: true })}
            ></textarea>
            {errors?.commentaire?.type === "required" && (
              <span>Le commentaire est requis!</span>
            )}
          </div>
          <br />
          <button>Envoyer</button>
        </form>
        <p>
          Contactez moi sur
          <a
            href="https://twitter.com/christophelazan"
            target="_blank"
            rel="noreferrer"
          >
            @Twitter
          </a>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
