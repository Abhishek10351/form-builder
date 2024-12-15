import React from "react";

export interface TextInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface NumberInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface DateInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DropDownProps {
    label: string;
    placeholder: string;
    value: string;
    options: string[];
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
}
export interface RadioButtonProps {
    label: string;
    value: string;
    options: string[];
    onChange: (e: string) => void;
}

export interface CheckBoxProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
