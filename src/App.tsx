import "@mantine/core/styles.css";
import {
  Button,
  Container,
  LoadingOverlay,
  MantineProvider,
  Stack,
  Text,
  Textarea,
  Title,
  Paper
} from "@mantine/core";
import { theme } from "./theme";
import { useState } from "react";

export default function App() {

  const [loading, setLoading] = useState(false);
  const [characterInput, setCharacterInput] = useState('');
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async () => {
    if (!characterInput.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/match-actor`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ characterDescription: characterInput })
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error fetching actor match:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MantineProvider theme={theme}>
      <Container size="md" py="xl">
        <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />

        <Stack gap="xl">
          <Stack gap="xs">
            <Title order={1}>AI Casting Director</Title>
            <Text size="lg" c="dimmed">
              Describe your character or story, and we'll find the perfect actor to bring them to life.
            </Text>
          </Stack>

          <Paper shadow="sm" p="md" radius="md" withBorder>
            <Stack gap="md">
              <Textarea
                label="Character Description"
                placeholder="Example: A witty, middle-aged detective with a troubled past who uses humor to cope with the darkness of their job. Think sharp dialogue, world-weary but hopeful..."
                value={characterInput}
                onChange={(event) => setCharacterInput(event.currentTarget.value)}
                minRows={6}
                autosize
                maxRows={12}
                size="md"
              />

              <Button
                onClick={handleSubmit}
                disabled={!characterInput.trim() || loading}
                size="md"
                fullWidth
              >
                Find Perfect Actor
              </Button>
            </Stack>
          </Paper>

          {result && (
            <Paper shadow="sm" p="md" radius="md" withBorder>
              <Text fw={500}>Results:</Text>
              <Text mt="sm">{JSON.stringify(result, null, 2)}</Text>
            </Paper>
          )}
        </Stack>
      </Container>
    </MantineProvider>
  );
}
