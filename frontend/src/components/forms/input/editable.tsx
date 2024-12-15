"use client";
import {
    Editable,
    EditablePreview,
    EditableInput,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface TextInputProps {
    initialValue?: string;
    onChange?: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ initialValue, onChange }) => {
    const [inputValue, setInputValue] = useState(initialValue || "..");
    const [text, useText] = useState("...");

    useEffect(() => {
        useText(inputValue);
    }, [inputValue, useText]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <Editable
            defaultValue={inputValue}
            onSubmit={(value) => setInputValue(value)}
            onChange={handleInputChange}
        >
            <EditablePreview />
            <EditableInput />
        </Editable>
    );
};

export default TextInput;
