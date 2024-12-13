"use client";
import { Input, Box, Container, VStack, Text } from "@chakra-ui/react";

const TextInput = () => {
    return (
        <Container>
            <Box p={4}>
                <VStack>
                    <Box
                        key={1}
                        p={4}
                        borderWidth={1}
                        borderRadius="md"
                        w="100%"
                    >
                        <Text>
                            <strong>Email:</strong>
                        </Text>
                        <Input type="text" placeholder="Email" />
                    </Box>
                </VStack>
            </Box>
        </Container>
    );
};

export default TextInput;
