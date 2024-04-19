import { Title } from "@mantine/core";
import NavBar from "../NavBar/NavBar";

export default function Header() {
    return (
        <header className="flex w-full mb-2">
            <Title className="basis-1/5" order={1} size="h3">Laundry Tools</Title>
            <NavBar />
        </header>
    );
}