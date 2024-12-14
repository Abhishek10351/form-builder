interface TextInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface NumberInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface DateInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface DropDownProps {
    label: string;
    placeholder: string;
    value: string;
    options: {
        label: string;
        value: string;
    }[];

    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface RadioButtonProps {
    label: string;
    placeholder: string;
    value: string;
    options: {
        label: string;
        value: string;
    }[];

    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CheckButtonProps {
    label: string;
    value: string;
    options: {
        label: string;
        value: string;
    }[];

    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}