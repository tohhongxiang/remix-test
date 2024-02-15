import { Card, Image, Text, Badge, Button, Group, Grid } from "@mantine/core";
import { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = () => {
    return {
        languages: [
            {
                id: "german",
                title: "German",
                wordsToReview: 32,
                chapters: 100,
                words: 200,
                image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
            },
            {
                id: "french",
                title: "French",
                wordsToReview: 23,
                chapters: 234,
                words: 124,
                image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
            },
            {
                id: "japanese",
                title: "Japanese",
                wordsToReview: 5,
                chapters: 67,
                words: 56,
                image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
            },
            {
                id: "spanish",
                title: "Spanish",
                wordsToReview: 234,
                chapters: 534,
                words: 20560,
                image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
            },
            {
                id: "italian",
                title: "Italian",
                wordsToReview: 32,
                chapters: 1,
                words: 323,
                image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
            },
        ],
    };
};

export default function NotesIndex() {
    const data = useLoaderData<typeof loader>();

    return (
        <>
            <Grid className="w-full p-8">
                {data.languages.map((language) => (
                    <Grid.Col span={3} key={language.title}>
                        <Link to={language.id}>
                            <Card
                                shadow="sm"
                                padding="lg"
                                radius="md"
                                withBorder
                                className="hover:scale-105 transition-all duration-75 h-full"
                            >
                                <Card.Section className="h-full">
                                    <Image
                                        src={language.image}
                                        height={160}
                                        alt={language.title}
                                    />
                                </Card.Section>
                                <Group py="md">
                                    <div className="w-full items-baseline flex justify-between">
                                        <Text fw={500} size="lg">
                                            {language.title}
                                        </Text>
                                        <Text size="sm" c="dimmed">
                                            {language.wordsToReview} words to
                                            review
                                        </Text>
                                    </div>
                                    <Text size="md">
                                        {language.chapters} chapters,{" "}
                                        {language.words} words
                                    </Text>
                                </Group>
                                <Button
                                    color="blue"
                                    fullWidth
                                    mt="md"
                                    radius="md"
                                >
                                    Review
                                </Button>
                            </Card>
                        </Link>
                    </Grid.Col>
                ))}
            </Grid>
        </>
    );
}
