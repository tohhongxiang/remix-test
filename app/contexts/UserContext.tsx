import { createContext, useContext, useState } from "react";
import { User } from "~/types/User";

const UserContext = createContext<{
    user: User | null;
    setUser: (user: User | null) => void;
}>({ user: null, setUser: () => {} });

export default function UserProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useAuthenticatedUser() {
    const { user, setUser } = useContext(UserContext);

    return { user, setUser };
}
