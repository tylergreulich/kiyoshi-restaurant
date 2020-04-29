import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../../../store/actions/authActions'
import { MyTextField } from '../../../utils/MyTexField'
import { loginValidationSchema } from './LoginForm.validation'

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#e8151b'
  }
}))
export const LoginForm = () => {
  const dispatch = useDispatch()

  const history = useHistory()

  const classes = useStyles()

  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <Formik
            validateOnChange={true}
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={loginValidationSchema}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true)

              dispatch(login(data))

              setSubmitting(false)
            }}
          >
            {({ values, isSubmitting }) => {
              const isDisabled =
                values.email.length === 0 ||
                values.password.length === 0 ||
                isSubmitting

              return (
                <Form>
                  <Grid container>
                    <Grid item xs={12} sm={12} lg={12} xl={12}>
                      <MyTextField
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={values.email}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={12} xl={12}>
                      <MyTextField
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={values.password}
                      />
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      disabled={isDisabled}
                    >
                      {isSubmitting ? 'Signing In...' : 'Sign In'}
                    </Button>
                  </Grid>
                </Form>
              )
            }}
          </Formik>
        </div>
      </Container>
    </>
  )
}
