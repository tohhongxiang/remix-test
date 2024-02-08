import {
    ActionIcon,
    Button,
    Drawer,
    NavLink as MantineNavLink,
    useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Form, Link, useLocation } from "@remix-run/react";
import { IconMenu2, IconMoon, IconSun } from "@tabler/icons-react";
import { NavLink } from "@remix-run/react";
import { useEffect } from "react";
import { User } from "~/types/User";
import { useAuthenticatedUser } from "~/contexts/UserContext";

export default function Navbar({
    links,
}: {
    links: { href: string; label: string }[];
}) {
    const [opened, { open, close }] = useDisclosure(false);

    const { pathname } = useLocation();
    useEffect(() => {
        close();
    }, [pathname]);

    const { user } = useAuthenticatedUser();

    const { setColorScheme, colorScheme } = useMantineColorScheme();
    return (
        <nav className="p-4 shadow-sm flex">
            <div>
                <Link to="/">
                    <strong>Language Learner</strong>
                </Link>
            </div>
            <div className="grow" />
            <div>
                <ul className="gap-x-4 hidden md:flex md:items-center">
                    {links.map((link) => (
                        <li key={link.href}>
                            <NavLink
                                to={link.href}
                                className={({ isActive }) =>
                                    isActive ? "font-bold" : ""
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                    {!user ? (
                        <>
                            <li>
                                <NavLink
                                    to={"/login"}
                                    className={({ isActive }) =>
                                        isActive ? "font-bold" : ""
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/signup"}
                                    className={({ isActive }) =>
                                        isActive ? "font-bold" : ""
                                    }
                                >
                                    Sign Up
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <li>
                            <NavLink
                                to={"/logout"}
                                className={({ isActive }) =>
                                    isActive ? "font-bold" : ""
                                }
                            >
                                Log Out
                            </NavLink>
                        </li>
                    )}
                    <li className="flex items-center justify-center">
                        <ActionIcon
                            variant="subtle"
                            aria-label="Change color scheme"
                            color="gray"
                            onClick={() =>
                                setColorScheme(
                                    colorScheme === "dark" ? "light" : "dark"
                                )
                            }
                        >
                            {colorScheme === "dark" ? (
                                <IconMoon />
                            ) : (
                                <IconSun />
                            )}
                        </ActionIcon>
                    </li>
                </ul>
                <div className="md:hidden">
                    <ActionIcon variant="subtle" color="gray" onClick={open}>
                        <IconMenu2 />
                    </ActionIcon>
                    <Drawer
                        opened={opened}
                        onClose={close}
                        title="Links"
                        position="right"
                    >
                        <ul>
                            {links.map((link) => (
                                <NavLink
                                    className={({ isActive }) =>
                                        `${isActive ? "font-bold" : ""}`
                                    }
                                    to={link.href}
                                    key={link.href}
                                >
                                    <li className="px-4 py-2 hover:bg-gray-600/10">
                                        {link.label}
                                    </li>
                                </NavLink>
                            ))}
                        </ul>
                    </Drawer>
                </div>
            </div>
        </nav>
    );
}
