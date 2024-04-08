/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { regexPatterns } from '../../../constraint/validator/RegexPattern';
import { useAuth } from '../../../redux/ducks/auth';
import { Button } from '../../component/Button';
import { ArrowLeft } from '../../component/icons/ArrowLeft';
import { Input } from '../../component/Input';

export const Signup = () => {
  const { handleSubmit, errors, register, getValues } = useForm({ mode: 'onBlur' });
  const { setLoginStatus } = useAuth();
  const {
    required,
    email: { message: emailErrorMessage, value: emailPattern },
  } = regexPatterns;
  const submit = (data) => {
    console.log(data);
  };

  return (


    <div className="flex items-center justify-center w-full dark:bg-gray-950">
      <div className="dark:bg-gray-900 shadow-md rounded-lg p-8  w-full form-auth-container">

        <div className="flex items-center mb-4">
          <Button variant="icon" className="my-0" onClick={() => setLoginStatus(true)}>
            <ArrowLeft className="w-6 blue-text" />
          </Button>
          <p className="text-md text-center blue-text ml-2">S'inscrire</p>
        </div>

        <form onSubmit={handleSubmit(submit)} className="flex flex-col register-form">
          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-4">
              <Input
                name="email"
                label="Adresse email"
                placeholder="abc@example.xyz"
                errors={errors}
                inputRef={register({
                  required,
                  validate: {
                    email: (value) => emailPattern.test(value) || emailErrorMessage,
                  },
                })}
              />
            </div>
            <div className="mb-4">
              <Input
                name="password"
                label="Mot de passe"
                type="password"
                errors={errors}
                inputRef={register({
                  required,
                  minLength: {
                    message: 'Le mot de passe doit être composé de 8 caractères minimum',
                    value: 8,
                  },
                })}
              />
            </div>
            <div className="mb-4">
              <Input
                name="passwordConfirm"
                label="Confirmation mot de passe"
                type="password"
                errors={errors}
                inputRef={register({
                  required,
                  validate: {
                    notTheSame: (value) =>
                      getValues('password') === value || 'Mot de passe non identique',
                  },
                })}
              />
            </div>
            <div className="flex items-center justify-center ">
              <Button type="submit" className="w-full primary-button">
                Créer mon compte
              </Button>
            </div>
          </form>
        </form>
      </div>
    </div >






    // <div>



    // </div>
  );
};
