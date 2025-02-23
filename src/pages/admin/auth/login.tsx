import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import ControllerInput from '@/components/molecules/ControllerInput';
import Button from '@/components/atoms/Button';
import {LoginValidationSchema} from "@/pages/admin/auth/validation/LoginValidation";
import {zodResolver} from '@hookform/resolvers/zod';
import {IFormInput} from "@/pages/admin/auth/types/loginTypes";
import {FcGoogle} from "react-icons/fc";
import Image from "next/image";

const Login: React.FC = () => {
    const {control, handleSubmit} = useForm<IFormInput>({
        resolver: zodResolver(LoginValidationSchema),
        shouldFocusError: false,
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
       <div className="flex flex-col md:flex-row w-full h-full bg-[#16202a] box-animate">
            <div className=" text-white flex items-center justify-center flex-col w-full md:w-1/2 p-4">
                <div className="my-4 w-full max-w-md">
                    <h1 className="text-3xl font-semibold text-center">Login</h1>
                    <p className="text-xs mt-2 text-slate-400 text-center">Welcome to the Admin Panel. Please log in to manage your engineering projects.</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-4">
                        <button className="flex items-center justify-center w-full gap-4 my-4 px-12 bg-transparent rounded-full border border-white py-2">
                            <FcGoogle/>
                            <span>Sign in with Google</span>
                        </button>
                        <ControllerInput
                            name="username"
                            control={control}
                            label="Username"
                            className="mt-2 mb-4 bg-transparent rounded-full py-2 px-4 border border-white"
                            placeholder="Username"
                        />
                        <ControllerInput
                            name="password"
                            control={control}
                            label="Password"
                            type="password"
                            className="mt-2 mb-4 bg-transparent rounded-full py-2 px-4 border border-white"
                            placeholder="Password"
                        />
                        <Button text="Login" type="submit" className="w-full mt-6 rounded-full bg-indigo-600 hover:bg-indigo-700 py-2 px-4 transition-colors"/>
                    </form>
                    <p className="mt-4 text-xs text-slate-200 text-center">@2025 Engineering Project Management</p>
                </div>
            </div>
            <div className="relative hidden md:block md:w-1/2 bg-[#16202a]">
                <Image
                    src="/bg-image.jpg"
                    alt="Background Image"
                    fill={true}
                    className="opacity-50"
                />
            </div>
        </div>
    );
};

export default Login;
