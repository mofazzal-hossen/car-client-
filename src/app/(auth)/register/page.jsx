"use client";

import { FcGoogle } from "react-icons/fc";
import { Card, Separator } from "@heroui/react";

import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const RegisterPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log(user)

        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image,
        });

        if (data) {
            redirect("/");
        }

        if (error) {
            alert("Error");
        }
    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google"
        })
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-10"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')",
            }}
        >

            {/* overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            <Card className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-8">

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white">
                        Create Account
                    </h1>

                    <p className="text-gray-300 mt-2">
                        Start your adventure with Wanderlust
                    </p>
                </div>

                <Form onSubmit={onSubmit} className="flex flex-col gap-5">

                    <TextField isRequired name="name" type="text">
                        <Label className="text-white">Name</Label>

                        <Input
                            placeholder="Enter your name"
                            className="rounded-xl"
                        />

                        <FieldError />
                    </TextField>

                    <TextField name="image" type="url">
                        <Label className="text-white">Image URL</Label>

                        <Input
                            placeholder="Image url"
                            className="rounded-xl"
                        />

                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-white">Email</Label>

                        <Input
                            placeholder="john@example.com"
                            className="rounded-xl"
                        />

                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-white">Password</Label>

                        <Input
                            placeholder="Enter your password"
                            className="rounded-xl"
                        />

                        <Description className="text-gray-300 text-xs">
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>

                        <FieldError />
                    </TextField>

                    <Button
                        className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-6 text-lg transition-all duration-300"
                        type="submit"
                    >
                        Create Account
                    </Button>
                </Form>

                <div className="flex justify-center items-center gap-3 my-6">
                    <Separator className="bg-white/20" />

                    <div className="whitespace-nowrap text-gray-300 text-sm">
                        Or sign up with
                    </div>

                    <Separator className="bg-white/20" />
                </div>

                <Button
                    onClick={handleGoogleSignin}
                    variant="bordered"
                    className="w-full rounded-xl border border-white/30 bg-white/10 text-white hover:bg-white/20 py-6 text-lg"
                >
                    <FcGoogle className="text-2xl" />
                    Sign in with Google
                </Button>

            </Card>
        </div>
    );
};

export default RegisterPage;