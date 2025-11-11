import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { AIService } from "../utils/aiService";

interface MatchActorRequest {
    characterDescription: string;
}

interface ActorMatch {
    name: string;
    reasoning: string;
    notableRoles?: string[];
}

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('Match-actor function triggered');

    try {
        // Validate request method
        if (req.method !== 'POST') {
            context.res = {
                status: 405,
                body: { error: 'Method not allowed. Please use POST.' }
            };
            return;
        }

        // Parse and validate request body
        const { characterDescription }: MatchActorRequest = req.body;

        if (!characterDescription || typeof characterDescription !== 'string' || characterDescription.trim().length === 0) {
            context.res = {
                status: 400,
                body: { error: 'Missing or invalid characterDescription in request body.' }
            };
            return;
        }

        context.log(`Analyzing character: ${characterDescription.substring(0, 100)}...`);

        // Initialize AI service
        const aiService = new AIService();

        // Create the prompt for actor matching
        const systemInstruction = `You are an expert casting director with deep knowledge of actors, their performances, and their suitability for different roles.
Your task is to recommend 3 actors who would be perfect for a given character description.

For each actor, provide:
1. Their full name
2. A detailed explanation of why they'd be perfect for this role (consider their acting style, previous roles, range, and characteristics)
3. 2-3 notable roles that demonstrate their suitability

Return your response as a JSON array with this exact structure:
[
  {
    "name": "Actor Name",
    "reasoning": "Detailed explanation of why they fit...",
    "notableRoles": ["Role 1 in Movie/Show", "Role 2 in Movie/Show"]
  }
]

Be specific, insightful, and consider both obvious and surprising choices that would truly fit the character.`;

        const prompt = `Based on this character description, recommend 3 actors who would be perfect for the role:

${characterDescription}

Return ONLY the JSON array, no additional text.`;

        // Call AI API
        const response = await aiService.generateContent(prompt, systemInstruction);

        // Parse the response
        let actors: ActorMatch[];
        try {
            // Try to extract JSON from the response
            const jsonMatch = response.match(/\[[\s\S]*\]/);
            if (jsonMatch) {
                actors = JSON.parse(jsonMatch[0]);
            } else {
                throw new Error('No JSON array found in response');
            }
        } catch (parseError) {
            context.log.error('Failed to parse AI response:', parseError);
            context.log.error('Raw response:', response);

            // Fallback response
            actors = [{
                name: "Unable to parse response",
                reasoning: response.substring(0, 500),
                notableRoles: []
            }];
        }

        // Return successful response
        context.res = {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                characterDescription,
                recommendations: actors,
                timestamp: new Date().toISOString()
            }
        };

    } catch (error) {
        context.log.error('Error in match-actor function:', error);

        context.res = {
            status: 500,
            body: {
                error: 'An error occurred while processing your request.',
                message: error.message
            }
        };
    }
};

export default httpTrigger;