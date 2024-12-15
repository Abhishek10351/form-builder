"use client";
import {
    TextInput,
    NumberInput,
    DateInput,
    DropDown,
    CheckBox,
    RadioButton,
} from "../input";
import { useEffect, useState } from "react";
import { Container, Box, Button, Heading, Text } from "@chakra-ui/react";
import api from "@/config/api";

interface FormData {
    id: string;
    type: string;
    label: string;
    placeholder: string;
    name: string;
    value: string;
    options: string[];
}

const Form = ({ formId }: { formId: string }) => {
    const [formData, setFormData] = useState<FormData[]>([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const fetchFormFields = async () => {
            try {
                const response = await api.get(`/forms/${formId}`);
                const data = response.data.fields;

                setFormData(data);


                setName(response.data.name);
                setDescription(response.data.description);
            } catch (error) {
                console.error("Error fetching form fields:", error);
            }
        };

        fetchFormFields();
    });

    const handleInputChange = (id: string, value: string) => {
        const k = formData.map((prevData) => {
            if (prevData.id == id) {
                return { ...prevData, value: value };
            } else {
                return prevData;
            }
        });

        setFormData((prevfields) =>
            prevfields.map((field) =>
                field.id === id ? { ...field, [field.id]: value } : { ...field }
            )
        );
        setFormData(k);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const j = formData.map((field) => {
                // only keep values and convert it to form [field.id]: field.value
                return { [field.id]: field.value };
            });

            await api.post(`/forms/${formId}/`, { formData: j });
            alert("Form submitted successfully!");
            setFormData([]);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form. Please try again.");
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
                <Heading as="h1" size="md" mb={4}>
                    {name}
                </Heading>
                <Text mb={4}>{description}</Text>
                {/*  */}
                <form onSubmit={handleSubmit}>
                    {formData.map((field: FormData, index) => {
                        switch (field.type) {
                            case "text":
                                return (
                                    <TextInput
                                        key={index}
                                        label={field.label}
                                        placeholder={field.placeholder}
                                        value={field.value}
                                        onChange={(e) =>
                                            handleInputChange(
                                                field.id,
                                                e.target.value
                                            )
                                        }
                                    />
                                );
                            case "number":
                                return (
                                    <NumberInput
                                        key={index}
                                        label={field.label}
                                        placeholder={field.placeholder}
                                        value={field.value}
                                        onChange={(e) =>
                                            handleInputChange(
                                                field.id,
                                                e.target.value
                                            )
                                        }
                                    />
                                );
                            case "date":
                                return (
                                    <DateInput
                                        key={index}
                                        label={field.label}
                                        placeholder={field.placeholder}
                                        value={field.value || ""}
                                        onChange={(e) =>
                                            handleInputChange(
                                                field.id,
                                                e.target.value
                                            )
                                        }
                                    />
                                );
                            case "dropdown":
                                return (
                                    <DropDown
                                        key={index}
                                        label={field.label}
                                        placeholder={field.placeholder}
                                        options={field.options}
                                        value={field.value}
                                        onChange={(e) =>
                                            handleInputChange(
                                                field.id,
                                                e.target.value
                                            )
                                        }
                                    />
                                );
                            case "checkbox":
                                return (
                                    <CheckBox
                                        key={index}
                                        label={field.label}
                                        value={field.value}
                                        onChange={(e) =>
                                            handleInputChange(
                                                field.id,
                                                e.target.checked ? "Yes" : "No"
                                            )
                                        }
                                    />
                                );
                            case "radio":
                                return (
                                    <RadioButton
                                        key={index}
                                        label={field.label}
                                        value={field.value}
                                        options={field.options}
                                        onChange={(e) =>
                                            handleInputChange(field.id, e)
                                        }
                                    />
                                );

                            default:
                                return null;
                        }
                    })}
                    <Button mt={4} colorScheme="blue" type="submit">
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
    );
};
export default Form;
