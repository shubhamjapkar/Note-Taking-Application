import { useGlobalContext } from "@/lib/context/GlobalContext";
import { ChangeEvent } from "react";

export function TextBox() {
    const { props: { text, changeText, ref } } = useGlobalContext();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        changeText(value);
    };

    return <input ref={ref} type="text" placeholder="Please Enter Text" value={text} onChange={handleChange} />
}