import { Title } from "@mantine/core";
import NavBar from "../NavBar/NavBar";

export default function Header() {
    return (
        <header className="flex mb-2">
            <Title order={1} size="h3">Laundry Tools</Title>
            <NavBar />
        </header>
    );
}