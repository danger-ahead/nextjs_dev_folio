# nextjs_dev_folio

## About

`nextjs_dev_folio` is a personal portfolio website built using Next.js. This project allows developers to showcase their skills, projects, and personal information in an organized and visually appealing manner. This repository is open for **Hactoberfest 2023!!**

## Getting Started

### Running Locally

To run the project locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/danger-ahead/nextjs_dev_folio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nextjs_dev_folio
   ```

3. Install the project dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm run dev
   ```

The application should now be accessible locally at `http://localhost:3000`.

### Requirements

To customize the portfolio and add your personal information, follow these steps:

1. Upload your picture to [imgur](https://imgur.com/).

2. Copy the link to the image.

3. Open the `public/data.json` file in your project and paste the image link at [data.json](https://github.com/danger-ahead/nextjs_dev_folio/blob/bcbe65c293f114242fcbb0585e397951b2f0dab6/public/data.json#L3).

4. Edit the content of mdx file in the static directory to change the content of the portfolio.

5. Copy the `.env.example` file to `.env.local` and update the values with your own configuration. 

### Tech Stack

Here's the technology stack used in this project:

- Next.js
- React
- CSS

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.

2. Clone your forked repository to your local machine.

3. Create a new branch for your feature or bug fix.

4. Make your changes and commit them with descriptive messages.

5. Push your changes to your GitHub repository.

6. Create a pull request to the original repository with a clear description of your changes.

7. Your pull request will be reviewed, and your changes may be merged into the main project.

## License

This project is licensed under the [MIT License](LICENSE), which means you are free to use, modify, and distribute it as per the terms of the license.
