import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { gql, useMutation } from '@apollo/client'

import { useForm } from '../util/hooks'
const REGISTER_USER = gql` 

    mutation register(
        $username:String!
        $email:String!
        $password:String!
        $confirmPassword:String!
    ) {
        register(
            registerInput:{
                username:$username
                password:$password
                email:$email
                confirmPassword:$confirmPassword
            }
        ){
            id email username createdAt token
        }
    }




`


export default function Register(props) {
    const [errors, setErrors] = useState({});

   

    const { handleChange, handleSubmit, values } = useForm(registerUser, {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',

    })
    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(_, result) {
            props.history.push('/')
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.errors)
        },
        variables: values
    })
    
    function registerUser(){
        addUser();
    }

    return (
        <div className="form-container">
            <Form onSubmit={handleSubmit} noValidate className={loading ? 'Loading' : ''}>
                <h1>Register</h1>
                <Form.Input
                    label="username"
                    placeholder="Username.."
                    name="username"
                    type="text"
                    value={values.username}
                    error={errors.username ? true : false}
                    onChange={handleChange} />
                <Form.Input
                    label="email"
                    placeholder="Email.."
                    name="email"
                    type="email"
                    value={values.email}
                    error={errors.email ? true : false}
                    onChange={handleChange} />
                <Form.Input
                    label="password"
                    placeholder="Password.."
                    name="password"
                    type="password"
                    error={errors.password ? true : false}
                    value={values.password}
                    onChange={handleChange} />
                <Form.Input
                    label="confirm password"
                    placeholder="Confirm Password.."
                    name="confirmPassword"
                    type="password"
                    value={values.confirmPassword}
                    error={errors.confirmPassword ? true : false}
                    onChange={handleChange} />
                <Button type="submit" primary>
                    Register
                    </Button>
            </Form>
            <div className="ui error message">
                <ul className="list">
                    {Object.values(errors).map((value) => (
                        <li key={value}>{value}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
