import { User } from "~/types/User";
import Navbar from "./Navbar";

const links = [
    { href: "/", label: "Home" },
    // { href: "/notes", label: "Notes" },
    // { href: "/login", label: "Login" },
    // { href: "/signup", label: "Signup" },
    { href: "/about", label: "About" },
];

export default function Layout({
    children,
    user,
}: {
    children: React.ReactNode;
    user?: User | null;
}) {
    return (
        <div className="w-screen h-screen flex flex-col">
            <Navbar links={links} />
            <main className="flex flex-col flex-1">{children}</main>
        </div>
    );
}
