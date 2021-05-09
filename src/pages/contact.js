import React, { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { minMaxLength, validEmail } from "../utils/validations"
import * as contactStyles from "./contact.module.scss"

const ContactPage = () => {
  const [contact, setContact] = useState({})
  const [formErrors, setFormErrors] = useState({})

  function handleChange(e) {
    e.preventDefault()
    const { name, value } = e.target
    switch (name) {
      case "nom":
      case "prenom":
        if (minMaxLength(value, 3)) {
          setFormErrors({
            ...formErrors,

            [name]: `${name} doit avoir minimum 3 caractères !`,
          })
        } else {
          delete formErrors[name]
        }
        break
      case "message":
        if (minMaxLength(value, 30, 300)) {
          setFormErrors({
            ...formErrors,

            [name]: `${name} doit avoir minimum 30 caractères !`,
          })
        } else {
          delete formErrors[name]
        }
        break
      case "email":
        if (!value || validEmail(value)) {
          setFormErrors({
            ...formErrors,
            [name]: `l'adresse Email est invalide!`,
          })
        } else {
          delete formErrors[name]
        }
        break

      default:
        break
    }

    setContact({ ...contact, [name]: value })
    console.log(contact)
    console.log(formErrors)
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
          onSubmit="submit"
          noValidate
        >
          <input type="hidden" name="form-name" value="contact v1" />
          <div hidden>
            <input name="bot-field" />
          </div>
          <div>
            <label htmlFor="nom">Nom</label>
            <br />
            <input
              type="type"
              name="nom"
              placeholder="Nom"
              required
              onBlur={handleChange}
            />
            {formErrors && formErrors.nom ? (
              <span class>{formErrors["nom"]}</span>
            ) : (
              ""
            )}
          </div>
          <div>
            <label htmlFor="prenom">Prénom</label>
            <br />
            <input
              type="type"
              name="prenom"
              placeholder="Prénom"
              required
              onBlur={handleChange}
            />
            {formErrors && formErrors.prenom ? (
              <span class>{formErrors["prenom"]}</span>
            ) : (
              ""
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              id="email"
              type="type"
              name="email"
              placeholder="Email"
              required
              onBlur={handleChange}
            />
            {formErrors && formErrors.email ? (
              <span class>{formErrors["email"]}</span>
            ) : (
              ""
            )}
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              id="message"
              type="type"
              name="message"
              placeholder="Message"
              required
              onBlur={handleChange}
            ></textarea>
            {formErrors && formErrors.message ? (
              <span class>{formErrors["message"]}</span>
            ) : (
              ""
            )}
          </div>
          <br />
          <button type="submit" disabled={Object.entries(formErrors || {}).length > 0}>Envoyer</button>
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
