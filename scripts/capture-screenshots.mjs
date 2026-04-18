
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = path.join(process.cwd(), 'public', 'assets', 'screenshots');
const BASE_URL = 'http://localhost:3000';

async function capture() {
    console.log('Ensure the server is running on http://localhost:3000');

    if (!fs.existsSync(SCREENSHOT_DIR)) {
        console.log(`Creating directory: ${SCREENSHOT_DIR}`);
        fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
    }

    const browser = await puppeteer.launch({
        headless: "new",
        defaultViewport: { width: 1920, height: 1080 }
    });
    const page = await browser.newPage();

    try {
        // Hero Section
        console.log('Navigating to Home...');
        await page.goto(BASE_URL, { waitUntil: 'networkidle0' });

        // Wait for animations to settle
        await new Promise(r => setTimeout(r, 2000));

        console.log('Capturing Home (Hero)...');
        await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'home-hero.png') });

        // Projects Section
        // Scroll down to projects if possible, or just capturing the page. 
        // Assuming single page scroll or navigation.
        // Let's capture the full page as well maybe? Or specific sections.

        // Let's try to find the projects section if it exists, or just capture a scrolled view
        // Assuming the user might want a "Projects" view.
        // If there is a /projects route, we can go there. 
        // Based on conversations, there might be a /projects page.

        console.log('Navigating to Projects...');
        // Try to navigate to /projects just in case, otherwise scroll.
        // The previous conversation mentioned creating {root}/projects.
        // Let's try to visit /projects.
        const projectsResponse = await page.goto(`${BASE_URL}/projects`, { waitUntil: 'networkidle0' });

        if (projectsResponse.ok()) {
            await new Promise(r => setTimeout(r, 1000));
            console.log('Capturing Projects Page...');
            await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'projects-page.png') });
        } else {
            console.log('/projects not found, scrolling on home page...');
            await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
            // Scroll down
            await page.evaluate(() => window.scrollBy(0, 800));
            await new Promise(r => setTimeout(r, 1000));
            await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'home-scrolled.png') });
        }

    } catch (err) {
        console.error('Error identifying elements or navigating:', err);
    } finally {
        await browser.close();
        console.log('Done!');
    }
}

capture();
