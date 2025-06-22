# Repo Guidelines
- Use FastAPI for any API endpoints.
- Provide an endpoint `/plural` that accepts a word in Arabic and returns its Jama Takseer (broken plurals) if known.
- A data source is required. Prefer open resources like CAMeL Tools morphological lexicon, Wiktionary, or other open lists.
- If no dataset exists, document how to scrape or gather data in README.
- Tests should run `python -m pytest` if tests exist.
