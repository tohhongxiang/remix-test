import {
    ActionIcon,
    AppShell,
    Burger,
    useMantineColorScheme,
    NavLink as MantineNavLink,
} from "@mantine/core";
import Navbar from "./Navbar";

const links = [
    { href: "/", label: "Home" },
    { href: "/notes", label: "Notes" },
    { href: "/login", label: "Login" },
    { href: "/about", label: "About" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-full">
            <Navbar links={links} />
            <main className="w-full h-full">{children}</main>
        </div>
    );
}
