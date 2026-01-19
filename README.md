# Automated Email Outreach Engine

- **Pain Point:** Manually sending out personalized outreach emails is time-consuming. Third-party cold email applications are paid and often come with data limits.
- **Solution**: An Automated Email Outreach Engine that collects email details from a spreadsheet, autofills a standard email template accordingly and sends up to 1500 emails per day.
- **Tools:** Javascript and Google Workspace.
- **Result:** Saved around 7 hours/week of manual effort. Reduced dependency on third-party apps.


# 🚀 Features
This project is a reusable **Google Apps Script** template that sends **personalized HTML emails** to a list of recipients stored in a Google Sheet. It’s designed for outreach, onboarding, announcements, or internal communications using **Gmail + Google Sheets**. The script dynamically reads recipient data, personalizes each message, and sends emails safely within Gmail quota limits.

- ✅ Sends bulk emails via Gmail  
- ✅ Personalizes messages using recipient names  
- ✅ Reads data directly from Google Sheets  
- ✅ Uses HTML email formatting  
- ✅ Automatically detects column positions  
- ✅ Throttles sending to avoid quota limits  
- ✅ Easy to configure and reuse  

## 📋 Prerequisites

Before using this script, you’ll need:

- A Google account  
- Access to **Google Sheets**  
- Permission to use **Gmail** from Apps Script  

---

## 📄 Spreadsheet Setup

Your Google Sheet must include a **header row** with at least the following columns:

| Name | Email |
|------|-------|
| Jane Doe | jane@example.com |
| John Smith | john@example.com |

> ⚠️ Column names must be spelled exactly as `Name` and `Email`.

---

## ⚙️ Configuration

At the top of the script, update the configuration variables:

```javascript
const SHEET_NAME = "Sheet1";
const SPREADSHEET_URL = "PASTE_SHEET_URL";
const EMAIL_SUBJECT = "Your Email Subject";
const FROM_NAME = "Your Name or Company";
const DELAY_MS = 300;
