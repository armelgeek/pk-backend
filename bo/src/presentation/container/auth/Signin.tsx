import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useCustomSnackbar } from '../../../common/hooks/Snackbar';

import { regexPatterns } from '../../../constraint/validator/RegexPattern';
import { useAuth } from '../../../redux/ducks/auth';
import { Button } from '../../component/Button';
import { Input } from '../../component/Input';

export const Signin = () => {
  const { handleSubmit, setValue, control } = useForm({ mode: 'onBlur' });
  const { signin } = useAuth();
  const [openSnackbar] = useCustomSnackbar();
  const [loading, setLoading] = React.useState(false);
  const submit = async (data) => {
    setLoading(true);
    try {
      await signin(data);
    } catch (error) {
      openSnackbar(error?.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    setValue('email', 'pockerapps@gmail.com');
    setValue('password', 'PockerApp#123');
  }, []);

  return (
    <div className="flex items-center justify-center w-full dark:bg-gray-950">
      <div className="dark:bg-gray-900 shadow-md rounded-lg p-8  w-full form-auth-container">
        <h1 className=" mb-4  text-md  text-center blue-text">Se connecter</h1>
        <form onSubmit={handleSubmit(submit)} className="flex flex-col form-auth">
          <div className="mb-4">
            <Controller
              control={control}
              render={({
                field: { onChange, onBlur, value }, // onChange, onBlur, value
                formState: { },//errors
              }) => <Input
                  value={value}
                  onChange={onChange}
                  name="email"
                  label="Identifiant"
                  placeholder="Votre adresse mail"
                  required
                />}
              name="email"
            />
          </div>
          <div className="mb-4">
            <Controller
              control={control}
              render={({
                field: { onChange, onBlur, value }, //onChange, onBlur, value
                formState: { },//errors
              }) => <Input
                  value={value}
                  name="password"
                  label="Mot de passe"
                  type="password"
                  onChange={onChange}
                  required
                />}
              name="password"
            />
          </div>
          <div className="flex items-center justify-center ">
            <Button type="submit" className="w-full primary-button" loading={loading}>
              Se connecter
            </Button>
          </div>

        </form>
      </div>
    </div >
  );
};
