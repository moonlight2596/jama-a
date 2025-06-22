# Arabic Plural API

This project aims to provide an API for looking up Arabic broken plurals (jama takseer).

## Data Sources
- Explore open datasets such as the CAMeL Tools morphological lexicon or other freely available lists on GitHub.
- If direct data is unavailable, plan to scrape from public dictionary sites (e.g. Wiktionary) or compile a manual list.

## API Plan
- Implement with **FastAPI**.
- Endpoint `/plural` will accept a JSON body with a `word` field and return known plural forms from the dataset.

## Testing
- Any tests should run using `python -m pytest`.
