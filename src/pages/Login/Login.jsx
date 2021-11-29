import React, { useState } from "react"
import { useSignIn } from "react-auth-kit"
import { useHistory } from "react-router-dom"
import http from "../../services/axios"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
} from "@chakra-ui/react"
import { Formik, Field, Form } from "formik"

import "./Login.css"

const SignInComponent = () => {
  const signIn = useSignIn()
  const [formData, setFormData] = useState({ email: "", password: "" })
  let history = useHistory()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    http
      .post("/auth/sign-in", formData)
      .then((res) => {
        if (res.status === 200) {
          if (
            signIn({
              token: res.headers.authorization,
              tokenType: "Bearer",
              authState: res.data,
              expiresIn: 99999,
            })
          ) {
            setIsLoading(false)
            console.log(res)
            history.push("/")
            // Redirect or do-something
          } else {
            //Throw error
          }
        }
      })
      .catch((err) => {
        setIsLoading(false)
        // setFieldError('email', 'email is already used')
        console.log(err)
      })
  }

  function validateEmail(value) {
    let error
    if (!value) {
      error = "Email é obrigatório"
    }
    return error
  }
  function validatePassword(value) {
    let error
    if (!value) {
      error = "Senha é obrigatória"
    }
    return error
  }

  return (
    <div id="login_page">
      <div className="login-form">
        <Formik>
          {(props) => (
            <Form onSubmit={onSubmit}>
              <h1>
                <strong>ioasys</strong> Books
              </h1>

              <Field name="email" validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      {...field}
                      id="email"
                      // placeholder="Email"
                      variant="filled"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />

                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password" validate={validatePassword}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel htmlFor="password">Senha</FormLabel>
                    <div className="input-submit">
                      <Input
                        {...field}
                        id="password"
                        // placeholder="Password"
                        variant="filled"
                        type="password"
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                      />

                      <Button
                        mt={4}
                        colorScheme="teal"
                        isLoading={isLoading}
                        type="submit"
                      >
                        Entrar
                      </Button>
                    </div>
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Form>
          )}
        </Formik>
      </div>
      {/* <form onSubmit={onSubmit}>
        <Input
          type={"email"}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          type={"password"}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <Button
          isLoading={isLoading}
          colorScheme="blue"
          size="sm"
          type="submit"
        >
          Button
        </Button>
      </form> */}
    </div>
  )
}
export default SignInComponent
