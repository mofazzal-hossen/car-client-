"use client";

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
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        });

        console.log(data, error)

        if (data) {
            redirect('/')
        }

        if (error) {
            alert("Error");
        }
    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-10 relative"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop')",
            }}
        >

            {/* overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            <Card className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-8">

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white">
                        Welcome Back
                    </h1>

                    <p className="text-gray-300 mt-2">
                        Login and continue your adventure
                    </p>
                </div>

                <Form onSubmit={onSubmit} className="flex flex-col gap-5">

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
                        Login
                    </Button>
                </Form>

                <div className="flex justify-center items-center gap-3 my-6">
                    <Separator className="bg-white/20" />

                    <div className="whitespace-nowrap text-gray-300 text-sm">
                        Or continue with
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

export default Login;