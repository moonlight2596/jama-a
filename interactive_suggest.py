import re
from prompt_toolkit import PromptSession
from prompt_toolkit.application import run_in_terminal
from prompt_toolkit.formatted_text import HTML


tokens = set()


def extract_tokens(line):
    for token in re.findall(r"[A-Za-z_][A-Za-z0-9_]*", line):
        tokens.add(token)


def bottom_toolbar():
    text = session.default_buffer.document.text_before_cursor
    if len(text) >= 3:
        suggestions = [w for w in sorted(tokens) if w.startswith(text) and w != text]
        if suggestions:
            return HTML('<skyblue>' + ' '.join(suggestions[:5]) + '</skyblue>')
    return ''


session = PromptSession(bottom_toolbar=bottom_toolbar)


def main():
    while True:
        try:
            line = session.prompt('>>> ', refresh_interval=0.5)
            if line.strip() in {'exit()', 'quit()'}:
                break
            extract_tokens(line)
        except (EOFError, KeyboardInterrupt):
            break


if __name__ == '__main__':
    main()
