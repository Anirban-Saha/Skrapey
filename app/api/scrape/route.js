import puppeteer from 'puppeteer';
import { NextResponse } from 'next/server';

export async function GET() {
  let browser;
  try {
    browser = await puppeteer.launch();
    const [page] = await browser.pages();
    page.setDefaultNavigationTimeout(2 * 60 * 1000);
    await page.goto('https://twitter.com/home', { waitUntil: 'networkidle0' });
    const htmlContent = await page.evaluate(() => document.querySelector('*').outerHTML);
    console.log(htmlContent);
    // Return the HTML content as a response
    return new NextResponse(htmlContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (e) {
    console.error("Run Failed", e);
    // Return an error response
    return new NextResponse(JSON.stringify({ error: 'An error occurred during scraping' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}