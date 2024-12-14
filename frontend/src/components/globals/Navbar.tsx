"use client";
import {
    Container,
    Flex,
    useColorModeValue,
    Link as ChakraLink,
    HStack,
    chakra,
} from "@chakra-ui/react";

const Navbar = () => {
    const bgColor = useColorModeValue("gray.50", "gray.800");
    const textColor = useColorModeValue("gray.700", "gray.200");
    const hoverColor = "teal.500"; // Use teal.500 for hover color

    return (
        <chakra.header bg={bgColor} p={4}>
            <Container maxW="container.lg">
                <Flex align="center" justify="space-between">
                    <ChakraLink
                        href="/"
                        color={textColor}
                        _hover={{ color: hoverColor }}
                    >
                        Home
                    </ChakraLink>
                    <HStack spacing={4}>
                        <ChakraLink
                            href="/forms"
                            color={textColor}
                            _hover={{ color: hoverColor }}
                        >
                            My Forms
                        </ChakraLink>
                    </HStack>
                </Flex>
            </Container>
        </chakra.header>
    );
};

export default Navbar;
