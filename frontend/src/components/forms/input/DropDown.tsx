import { Select } from "@chakra-ui/react";

import { Box, Container, VStack, Text } from "@chakra-ui/react";

const DropDown = () => {
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
                            <strong>DropDown:</strong>
                        </Text>
                            <Select placeholder="Select option">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                    </Box>
                </VStack>
            </Box>
        </Container>
    );
};

export default DropDown;