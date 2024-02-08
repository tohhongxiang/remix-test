import { IconAlertTriangleFilled } from "@tabler/icons-react";

interface AlertProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    type: "info" | "danger" | "success" | "warning";
    title: string;
    children: React.ReactNode;
    titleIcon?: React.ReactNode;
}

const alertClassNames = {
    info: "text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400",
    danger: "text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400",
    success: "text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400",
    warning:
        "text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-400",
};

export default function Alert({
    type = "info",
    title,
    children,
    titleIcon,
}: AlertProps) {
    return (
        <div
            className={`p-4 mb-4 text-sm rounded-lg ${alertClassNames[type]}`}
            role="alert"
        >
            <p className="font-medium flex items-center gap-x-2">
                {titleIcon}
                {title}
            </p>
            {children}
        </div>
    );
}
