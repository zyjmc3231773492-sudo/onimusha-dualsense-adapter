# Onimusha DualSense Adapter landing page

This is the standalone, static GitHub Pages site for the Onimusha DualSense Adapter. It contains only public-facing HTML, CSS, JavaScript and artwork. The parent product workspace also contains development, seller and internal files and must stay separate.

## Deployment

The public repository is `zyjmc3231773492-sudo/onimusha-dualsense-adapter`. GitHub Pages publishes the `main` branch from `/(root)`. The entry page is `index.html`.

The site uses relative asset paths and needs no build command. To test locally, run `python -m http.server 8000` in this folder, then open `http://localhost:8000`.

## Before public launch

- The primary contact route is `zyjmc3231773492@gmail.com`; WeChat is secondary. Add a purchase link when the overseas checkout is ready.
- There is no installer download on the page. Add a verified public release URL only when the distribution and payment process is ready.
- If the installer changes, update the version, release date and SHA-256 displayed in `index.html`.
- The page references the Windows 2.1.0 release and the Steam PC game. Keep compatibility claims aligned with the product's release validation.
- The three game screenshots are loaded from the [official Steam store listing](https://store.steampowered.com/app/2638890/Onimusha_Way_of_the_Sword/) and credited to Capcom. Permission for using those images on a commercial third-party page has not been independently confirmed; replace or remove them if Capcom requires it. The controller art is a project asset.

Product facts were taken from `README.md`, `docs/USER_GUIDE_2.1.0_zh-CN.md` and `docs/RELEASE_QA_2.1.0.md` in the private product workspace.


