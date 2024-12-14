"use client";
import {
    TextInput,
    NumberInput,
    DateInput
} from "../input";

import { Container, Box } from "@chakra-ui/react";
interface FormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
}

interface FormData {
    type: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const Form = ({ formId }: {formId: string}) => {
    const formData : FormData[] = [
        {
            type: "text",
            label: "Name",
            placeholder: "Enter your name",
            value: "",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                console.log(e.target.value),
        },
        {
            type: "number",
            label: "Age",
            placeholder: "Enter your age",
            value: "",
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                console.log(e.target.value),
        }
    ];
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
                <form>
                    {formData.map((field, index) => {
                        switch (field.type) {
                            case "text":
                                return (
                                    <TextInput
                                        key={index}
                                        label={field.label}
                                        placeholder={field.placeholder}
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                );
                            case "number":
                                return (
                                    <NumberInput
                                        key={index}
                                        label={field.label}
                                        placeholder={field.placeholder}
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                );
                            default:
                                return null;
                        }
                    })}
                </form>
            </Box>
        </Container>
    );
};


export default Form;