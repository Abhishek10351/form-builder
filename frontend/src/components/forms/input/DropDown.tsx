import { Select } from "@chakra-ui/react";

import { Box, Container, VStack, Text } from "@chakra-ui/react";

import { DropDownProps } from "@/types/input";

const DropDown = ({ label, placeholder, options, onChange }: DropDownProps) => {
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
                            <strong>{label}</strong>
                        </Text>
                        <Select
                            placeholder={placeholder || "Select an option"}
                            onChange={onChange}
                        >
                            {options.map((optionval, index) => (
                                <option key={index} value={optionval}>
                                    {optionval}
                                </option>
                            ))}
                        </Select>
                    </Box>
                </VStack>
            </Box>
        </Container>
    );
};

export default DropDown;
