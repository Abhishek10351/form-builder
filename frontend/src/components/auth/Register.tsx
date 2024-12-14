"use client";
import { useState } from "react";
import api from "@/config/api";
import {
    Container,
    Box,
    Button,
    Input,
    Text,
    Heading,
    Link,
} from "@chakra-ui/react";


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            await api.post("auth/register", {
                name: name,
                email: email,
                password: password,
            });

            setSuccess(true);
        } catch (error: any) {
            console.log(error);
            setError(error.response?.data.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container centerContent>
            <Box
                maxW="md"
                w="100%"
                mt={8}
                p={4}
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
            >
                <Heading as="h1" size="lg" mb={6} textAlign="center">
                    Register
                </Heading>
                <form onSubmit={handleSubmit}>
                    <Box mb={4}>
                        <Text>Name</Text>
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Box>
                    <Box mb={4}>
                        <Text>Email</Text>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Box mb={4}>
                        <Text>Password</Text>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Box>
                    <Box mb={4}>
                        <Text>Confirm Password</Text>
                        <Input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Box>
                    <Button type="submit" isLoading={loading} w="100%">
                        Register
                    </Button>
                    {error && (
                        <Text color="red.500" mt={4}>
                            {error}
                        </Text>
                    )}
                    {success && (
                        <Text color="green.500" mt={4}>
                            Registration successful! Please check your email.
                        </Text>
                    )}
                </form>
                <Text mt={4}>
                    Already have an account?
                    <Link color="teal.500" href="/auth/login">
                        Login
                    </Link>
                </Text>
            </Box>
        </Container>
    );
};

export default Register;
