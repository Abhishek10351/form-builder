"use client";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Box,
    Container,
    VStack,
    Text
} from "@chakra-ui/react";

import { NumberInputProps } from "@/types/input";


const NumInput = ({ label, placeholder, value, onChange }: NumberInputProps) => {
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
                            <strong>{label}:</strong>
                        </Text>
                        <NumberInput>
                            <NumberInputField placeholder={placeholder} value={value} onChange={onChange}/>
                            <NumberInputStepper>
                                {/* <NumberIncrementStepper /> */}
                                {/* <NumberDecrementStepper /> */}
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>
                </VStack>
            </Box>
        </Container>
    );
};

export default NumInput;
