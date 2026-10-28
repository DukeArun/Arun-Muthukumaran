# Publish the portfolio with GitHub Pages

The portfolio is a static site, so it does not need a server or a build step. GitHub Pages can publish the HTML, CSS, JavaScript and image files directly from a repository.

## Publish it

1. Sign in to GitHub and create a **public** repository. For the cleanest link, name it `YOUR-USERNAME.github.io`. A repository named `arun-portfolio` also works, but its link includes `/arun-portfolio/`.
2. Download and unzip `M-Arun-Portfolio.zip` on your computer.
3. Upload the **contents** of the unzipped folder to the top level of the repository. Make sure `index.html` is at the repository root beside `styles.css`, `main.js`, and the `assets` folder.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**. Select branch `main` and folder `/(root)`, then save.
6. Once GitHub finishes publishing, the site link will be `https://YOUR-USERNAME.github.io/` (or `https://YOUR-USERNAME.github.io/arun-portfolio/` if you used that repository name).

GitHub Pages may take a few minutes to publish after setup. Its sites are public, so the phone number and email shown on the portfolio will be visible to anyone who has the link.

For current setup details, see [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart) and [GitHub's publishing-source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
