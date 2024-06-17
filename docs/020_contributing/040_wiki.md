---
title: Wiki
---

# Contributing to the Wiki
Contributing to the Wiki is a straightforward process that allows individuals to expand and enhance the knowledge base collaboratively. 
The Wiki is built using [Docosaurus](https://docusaurus.io) and is stored in the [Valthrun wiki repository](https://github.com/Valthrun/wiki).
All the content within the Wiki can be located inside the `docs` folder,
and the content files are typically written in Markdown for ease of editing.


## Adding New Pages
To contribute by adding new pages to the Wiki, follow these steps:

1. Clone the Valthrun wiki repository to your local machine.
2. In the `docs` folder, create a new Markdown file (`.md`) with the appropriate content for your new page.
  

## Previewing Changes
To preview any changes you make to the Wiki pages before finalizing them, you can follow these steps:

1. Install yarn
   ```bash
   npm i yarn -g
   ```

2. Install project dependencies
   ```bash
   yarn install
   ```

3. Start the project in development mode
   ```bash
   yarn start
   ```
   
   :::note
   To work on a translation, you must specify so when starting the project:
   ```bash
   # yarn start --locale <local code>
   yarn start --locale zh-cn
   ```
   :::


Docosaurus will provide you with a URL that you can open in your web browser.   
Any changes you make to the content files will be immediately reflected on the live preview page, 
allowing you to see how your edits will appear to users.

This live preview feature provides a convenient way to review your
contributions and ensure that they are accurate and well-formatted before publishing them.
  

## More about Docosaurus
For more information about Docosaurus and its capabilities, you can refer to the official Docosaurus documentation: [Docosaurus Documentation](https://docusaurus.io/docs/docs-introduction). This resource offers detailed information and tips on using Docosaurus effectively for
building and maintaining Wikis and other documentation projects.
