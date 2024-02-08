import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "Home page" }];

export default function IndexLayout() {
    return <div>This is the index layout</div>;
}
