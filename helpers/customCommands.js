export async function waitForAlert(timeout = 5000) {
    const start = Date.now();

    while ((Date.now() - start) < timeout) {
        if (await browser.isAlertOpen()) {
            return true;
        }
        await browser.pause(500);
    }

    throw new Error('Alert was not displayed within the timeout period');
}
