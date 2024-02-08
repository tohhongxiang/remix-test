import { MetaFunction, NavLink, Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => [
    {
        title: "Note",
    },
];

const links = [{ href: "/notes", label: "Notes" }];

export default function Notes() {
    return (
        <div className="flex h-full">
            <ul className="flex flex-col w-[300px] border-r border-gray-600/10">
                {links.map((link) => (
                    <NavLink
                        to={link.href}
                        className={({ isActive }) =>
                            `${isActive ? "font-bold" : ""}`
                        }
                        key={link.href}
                    >
                        <li className="p-4 hover:bg-gray-400/10">
                            {link.label}
                        </li>
                    </NavLink>
                ))}
            </ul>
            <div className="grow">
                <Outlet />
            </div>
        </div>
    );
}
