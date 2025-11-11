# Casting App - Development TODO

## Current Status
- ✅ Mantine 8 + React 19 + Vite boilerplate
- ✅ Azure Functions API infrastructure
- ✅ Gemini AI service configured
- ✅ Cosmos DB integration ready

---

## Frontend Tasks (Mantine UI)

### Replace Counter Demo with Casting Interface
- [ ] `refactor: remove counter demo code from App.tsx`
- [ ] `feat: create character input form with Mantine Textarea`
- [ ] `feat: add descriptive placeholder text and example prompts`
- [ ] `feat: style submit button for character analysis`

### Actor Results Display
- [ ] `feat: create actor result card component with Mantine Card`
- [ ] `feat: display actor name, photo, and description`
- [ ] `feat: show match reasoning/explanation from LLM`
- [ ] `feat: add multiple actor results display (top 3 matches)`

### Loading & Error States
- [ ] `feat: implement loading state during API call`
- [ ] `feat: add error handling with Mantine Notifications`
- [ ] `feat: create empty state with helpful examples`
- [ ] `style: add smooth transitions between states`

### Polish & Responsive Design
- [ ] `style: improve layout spacing and typography`
- [ ] `style: ensure mobile responsiveness`
- [ ] `feat: add header with app title and description`
- [ ] `style: enhance visual design with Mantine theme`

---

## Backend Tasks (API)

### IMDB Data Integration
- [ ] `feat: research IMDB data source (IMDb API, TMDb API, or OMDb API)`
- [ ] `feat: create IMDB service utility in api/utils/`
- [ ] `feat: implement actor search and data fetching`
- [ ] `feat: add actor data caching strategy`

### Actor Matching API Endpoint
- [ ] `feat: create /api/match-actor Azure Function`
- [ ] `feat: implement character description parsing`
- [ ] `feat: create prompt template for Gemini AI`
- [ ] `feat: integrate IMDB data with LLM analysis`
- [ ] `feat: return top 3 actor matches with reasoning`
- [ ] `feat: add request validation and error handling`

### Database Integration (Optional)
- [ ] `feat: store search queries in Cosmos DB`
- [ ] `feat: cache actor recommendations`
- [ ] `feat: add analytics tracking`

### API Testing
- [ ] `test: add unit tests for IMDB service`
- [ ] `test: add unit tests for match-actor endpoint`
- [ ] `test: test end-to-end flow locally`

---

## Integration & Testing

- [ ] `feat: connect frontend to /api/match-actor endpoint`
- [ ] `test: test complete user flow`
- [ ] `fix: handle edge cases and errors`
- [ ] `docs: update README with project description`

---

## Deployment

- [ ] `chore: configure environment variables in Azure`
- [ ] `chore: set up API keys (Gemini, IMDB)`
- [ ] `ci: verify GitHub Actions workflow`
- [ ] `feat: deploy to Azure Static Web Apps`

---

## Future Enhancements

- [ ] `feat: add actor filtering (age, gender, genre)`
- [ ] `feat: implement search history`
- [ ] `feat: add social sharing`
- [ ] `feat: support character image uploads for visual matching`
- [ ] `perf: optimize API response times`
- [ ] `feat: add user favorites/bookmarking`

---

## Notes
- Start with frontend first to get the UI working with mock data
- Then implement backend API with real IMDB integration
- Use conventional commit format for all commits
- Gemini AI is already configured and ready to use
