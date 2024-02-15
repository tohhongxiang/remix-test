import { Card, Text, Image, Button, Grid, Group } from "@mantine/core";
import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { IconArrowRight } from "@tabler/icons-react";

export async function loader({ params }: LoaderFunctionArgs) {
    return {
        wordsToReview: 72,
        chapters: [
            {
                id: "introducing-yourself",
                title: "Introducing Yourself",
                numberOfWords: 82,
                image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png",
            },
            {
                id: "possessive-pronouns",
                title: "Possessive Pronouns",
                numberOfWords: 82,
                image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",
            },
            {
                id: "genitiv",
                title: "Genitiv",
                numberOfWords: 82,
                image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png",
            },
            {
                id: "akkusativ",
                title: "Akkusativ",
                numberOfWords: 82,
                image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png",
            },
            {
                id: "verben-mit-praepositionen",
                title: "Verben mit Praepositionen",
                numberOfWords: 82,
                image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-11.png",
            },
            {
                id: "vegangenheit",
                title: "Vergangenheit",
                numberOfWords: 82,
                image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
            },
        ],
    };
}

export default function SpecificNotePage() {
    const { wordsToReview, chapters } = useLoaderData<typeof loader>();

    return (
        <div className="px-16 py-8 flex flex-col">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <div className="flex">
                    <div className="flex-1 flex flex-col">
                        <Text fw={700} size="xl">
                            Start your Daily Review!
                        </Text>
                        <Text size="sm" c="dimmed">
                            {wordsToReview} words to review
                        </Text>
                        <div className="mt-auto">
                            <Link to={`review`}>
                                <Button rightSection={<IconArrowRight />}>
                                    Start
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
                            width={256}
                            height={256}
                            className="object-cover"
                        />
                    </div>
                </div>
            </Card>
            <div className="p-8" />
            <Grid overflow="hidden">
                {chapters.map((chapter) => (
                    <Grid.Col span={4} key={chapter.id}>
                        <Card
                            shadow="sm"
                            padding="lg"
                            radius="md"
                            withBorder
                            className="h-full w-full"
                        >
                            <Card.Section className="h-full">
                                <Image
                                    src={chapter.image}
                                    height={160}
                                    alt={chapter.title}
                                />
                            </Card.Section>
                            <Group py="md">
                                <div className="w-full items-baseline flex justify-between">
                                    <Text fw={500} size="lg">
                                        {chapter.title}
                                    </Text>
                                    <Text size="sm" c="dimmed">
                                        {chapter.numberOfWords} words
                                    </Text>
                                </div>
                            </Group>
                            <Button color="blue" fullWidth mt="md" radius="md">
                                Start
                            </Button>
                        </Card>
                    </Grid.Col>
                ))}
            </Grid>
        </div>
    );
}
