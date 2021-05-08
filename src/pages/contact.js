import React from "react"
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from "react-netlify-forms"
import { useForm } from "react-hook-form"
import Layout from "../components/layout"
import Seo from "../components/seo"
import axios from "axios"
import * as qs from "query-string"
import "./contact.module.scss"

const ContactPage = props => {
  const { register, handleSubmit, reset, errors } = useForm({ mode: "onBlur" })
  const netlify = useNetlifyForm({
    name: "react-hook-form",
    action: "/thanks",
    honeypotName: "bot-field",
    onSuccess: (response, context) => {
      console.log("Successfully sent form data to Netlify Server")
    },
  })
  const onSubmit = data => netlify.handleSubmit(null, data)
  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i

  return (
    <div>
      <Layout>
        <Seo title="Contactez moi" />
        <h3>Contactez-moi pour un projet innovant.</h3>
        <NetlifyFormProvider {...netlify}>
          <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
            <Honeypot />
            {netlify.success && (
              <p sx={{ variant: "alerts.success", p: 3 }}>
                Thanks for contacting us!
              </p>
            )}
            {netlify.error && (
              <p sx={{ variant: "alerts.muted", p: 3 }}>
                Sorry, we could not reach servers. Because it only works on
                Netlify, our GitHub demo does not provide a response.
              </p>
            )}
            <div>
              <label htmlFor="email" sx={{ variant: "forms.label" }}>
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                ref={register({
                  required: "Email is required",
                  pattern: {
                    value: EMAIL_REGEX,
                    message: "Invalid email address",
                  },
                })}
                sx={{
                  variant: "forms.input",
                }}
              />
              {errors.email && (
                <div sx={{ variant: "text.error" }}>{errors.email.message}</div>
              )}
            </div>
            <div sx={{ pt: 3 }}>
              <button type="submit" sx={{ variant: "buttons.success" }}>
                Submit
              </button>
              <button
                type="reset"
                onClick={() => reset()}
                sx={{ variant: "buttons.danger" }}
              >
                Reset
              </button>
            </div>
          </NetlifyFormComponent>
        </NetlifyFormProvider>
        )
      </Layout>
    </div>
  )
}

export default ContactPage
