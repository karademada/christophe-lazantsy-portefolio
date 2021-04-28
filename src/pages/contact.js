import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Seo title="Contactez moi" />
        <h1>Contactez pour un projet.</h1>
        <form
          name="contact v1"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact v1" />
          <div hidden>
            <input name="bot-field" />
          </div>
          <div>
            <label htmlFor="nom">Nom</label>
            <br />
            <input id="nom" type="type" name="nom" />
          </div>
          <div>
            <label htmlFor="prenom">Prenom</label>
            <br />
            <input id="prenom" type="type" name="prenom" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input id="email" type="type" name="email" />
          </div>
          <div>
            <label htmlFor="commentaire">Commentaire</label>
            <br />
            <textarea
              id="commentaire"
              type="type"
              name="commentaire"
            ></textarea>
          </div>
          <br />
          <button>Envoyez les informations</button>
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
