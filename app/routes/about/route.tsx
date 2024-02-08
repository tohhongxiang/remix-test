import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        {
            title: "About",
        },
    ];
};

export default function AboutPage() {
    return <div>About page</div>;
}
