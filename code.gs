/**
 * Sends personalized emails using data from a Google Sheet.
 * Designed as a reusable template for outreach, onboarding, or notifications.
 */

function sendEmails() {
  // ========= CONFIGURATION =========
  const SHEET_NAME = "Sheet1";                 // Name of the sheet with recipient data
  const SPREADSHEET_URL = "PASTE_SHEET_URL";   // Google Sheet URL
  const EMAIL_SUBJECT = "Your Email Subject";
  const FROM_NAME = "Your Name or Company";
  const DELAY_MS = 300;                        // Delay between sends (quota safety)
  // =================================

  // Open spreadsheet and get data
  const spreadsheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues(); // Includes header row

  // Identify column indexes from header row
  const headers = data[0];
  const emailColumn = headers.indexOf("Email");
  const nameColumn = headers.indexOf("Name");

  if (emailColumn === -1 || nameColumn === -1) {
    throw new Error("Required columns 'Email' or 'Name' not found.");
  }

  // Loop through each recipient (skip header row)
  for (let i = 1; i < data.length; i++) {
    const email = data[i][emailColumn];
    const fullName = data[i][nameColumn];

    if (!email) continue;

    // Extract first name for personalization
    const firstName = fullName ? fullName.split(" ")[0] : "";

    // Build HTML email body
    const htmlBody = `
      <p>Hello ${firstName},</p>

      <p>
        We wanted to share an update and invite you to explore our latest offering.
        This message is sent automatically using Google Apps Script and Gmail.
      </p>

      <p>
        <a href="https://example.com">View Demo</a>
      </p>

      <p>
        Your feedback is valuable. If you have time, please:
      </p>

      <ul>
        <li>Complete a short survey</li>
        <li>Schedule a follow-up conversation</li>
      </ul>

      <p>
        If you have any questions, feel free to reply directly.
      </p>

      <p>
        Best regards,<br>
        ${FROM_NAME}
      </p>
    `;

    // Send email
    GmailApp.sendEmail(email, EMAIL_SUBJECT, "", {
      name: FROM_NAME,
      htmlBody: htmlBody
    });

    // Pause to avoid hitting Gmail quotas
    Utilities.sleep(DELAY_MS);
  }

  // Notify user when complete
  spreadsheet.toast("Email campaign completed successfully.");
}
