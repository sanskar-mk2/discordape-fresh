import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function Theme() {
    useEffect(() => {
        themeChange(false);
    }, []);
    return (
        <select data-choose-theme>
            <option value="garden">Default</option>
            <option value="cupcake">Cupcake</option>
            <option value="bumblebee">Bublebee</option>
            <option value="cyberpunk">Cyberpunk</option>
            <option value="black">Black</option>
        </select>
    );
}
