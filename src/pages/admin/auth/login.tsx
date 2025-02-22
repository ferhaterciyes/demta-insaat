import React from 'react';
  import { useForm, SubmitHandler } from 'react-hook-form';
  import ControllerInput from '@/components/molecules/ControllerInput';
  import Button from '@/components/atoms/Button';

  interface IFormInput {
    username: string;
    password: string;
  }

  const Login: React.FC = () => {
    const { control, handleSubmit } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
      console.log(data);
      // Admin login işlemleri
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <ControllerInput name="username" control={control} label="Username"  />
        <ControllerInput name="password" control={control} label="Password" type="password" />
        <Button text="Login" type="submit" className="bg-blue-500 text-white p-2 rounded" />
      </form>
    );
  };

  export default Login;
