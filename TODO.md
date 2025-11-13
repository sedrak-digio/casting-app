# Casting App - Development TODO

## Current Status
- ✅ Mantine 8 + React 19 + Vite boilerplate
- ✅ Azure Functions API infrastructure
- ✅ Gemini AI service configured (US region deployment)
- ✅ Character input form with Textarea
- ✅ Actor results display with cards
- ✅ /api/match-actor endpoint with Gemini integration
- ✅ Frontend connected to backend API
- ✅ Deployed to Azure Static Web Apps (US)

---

## Completed Tasks ✅

### Frontend
- ✅ `refactor: remove counter demo code from App.tsx`
- ✅ `feat: create character input form with Mantine Textarea`
- ✅ `feat: add descriptive placeholder text and example prompts`
- ✅ `feat: style submit button for character analysis`
- ✅ `feat: create actor result card component`
- ✅ `feat: display actor name and reasoning`
- ✅ `feat: show match reasoning/explanation from LLM`
- ✅ `feat: add multiple actor results display (top 3 matches)`
- ✅ `feat: add header with app title and description`
- ✅ `feat: implement loading state during API call`

### Backend
- ✅ `feat: create /api/match-actor Azure Function`
- ✅ `feat: implement character description parsing`
- ✅ `feat: create prompt template for Gemini AI`
- ✅ `feat: return top 3 actor matches with reasoning`
- ✅ `feat: add request validation and error handling`

### Integration & Deployment
- ✅ `feat: connect frontend to /api/match-actor endpoint`
- ✅ `chore: configure environment variables in Azure`
- ✅ `chore: set up API keys (Gemini)`
- ✅ `ci: add GitHub Actions workflow for US deployment`
- ✅ `feat: deploy to Azure Static Web Apps`

---

## Remaining Tasks

### Actor Photos & IMDB Integration
- [ ] `feat: add actor photo display to results cards`
- [ ] `feat: add IMDB profile links that open in new tab`
- [ ] `feat: integrate TMDb API or ask LLM to provide IMDB URLs`
- [ ] `feat: handle missing photos gracefully with placeholder`

### UI Polish & UX
- [ ] `feat: add error handling with Mantine Notifications`
- [ ] `feat: create empty state with helpful examples`
- [ ] `style: add smooth transitions between states`
- [ ] `style: ensure mobile responsiveness`
- [ ] `style: improve layout spacing and typography`
- [ ] `style: enhance visual design with Mantine theme`

### Testing
- [ ] `test: test complete user flow`
- [ ] `test: test error scenarios (API failures, invalid input)`
- [ ] `test: test on mobile devices`

### Documentation
- [ ] `docs: update README with project description`
- [ ] `docs: add setup instructions`
- [ ] `docs: document API endpoints`

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
