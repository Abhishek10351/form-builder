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
import { useRouter } from "next/navigation";
const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await api.post("auth/login", {
                email: email,
                password: password,
            });

            setSuccess(true);
            router.push("/");
        } catch (error) {
            // setError((error as any).response?.data.message || "Something went wrong");
            if (error && typeof error === "object" && "response" in error) {
                setError(
                    (error as any).response.data.message ||
                        "Something went wrong"
                );
            } else {
                setError("Something went wrong");
            }
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
                    Login
                </Heading>
                <form onSubmit={handleSubmit}>
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
                    <Button type="submit" isLoading={loading} w="100%">
                        Login
                    </Button>
                    {error && (
                        <Text color="red.500" mt={4}>
                            {error}
                        </Text>
                    )}
                    {success && (
                        <Text color="green.500" mt={4}>
                            Login successful!
                        </Text>
                    )}
                </form>
                <Text mt={4}>
                    Don&apos;t have an account?{" "}
                    <Link color="teal.500" href="/auth/register">
                        Register
                    </Link>
                </Text>
            </Box>
        </Container>
    );
};

export default Login;
