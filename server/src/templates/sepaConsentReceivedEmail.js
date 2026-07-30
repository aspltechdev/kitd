// src/templates/sepaConsentReceivedEmail.js

const sepaConsentReceivedEmail = (fullName) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SEPA Mandate Received</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #059669, #10b981); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px;">✅ SEPA Mandate Received!</h1>
              <p style="color: #d1fae5; margin: 10px 0 0; font-size: 16px;">Your payment setup is complete</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="font-size: 16px; color: #333; line-height: 1.6;">
                Dear <strong>${fullName}</strong>,
              </p>
              
              <p style="font-size: 16px; color: #333; line-height: 1.6;">
                Thank you! We have successfully received your <strong>SEPA Direct Debit Mandate</strong>. 
                Your payment information has been securely stored.
              </p>

              <div style="background-color: #ecfdf5; border: 1px solid #6ee7b7; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center;">
                <h3 style="color: #059669; margin: 0 0 10px;">What happens next?</h3>
                <p style="color: #333; line-height: 1.8; margin: 0;">
                  Our team will review your SEPA mandate and give <strong>final approval</strong> 
                  to your membership. You will receive a confirmation email with your 
                  <strong>Member ID</strong> shortly.
                </p>
              </div>

              <div style="border-top: 1px solid #e5e7eb; margin: 30px 0 0; padding: 20px 0 0;">
                <p style="font-size: 14px; color: #666; line-height: 1.6;">
                  <strong>Timeline:</strong><br/>
                  • SEPA mandate review: 1-2 business days<br/>
                  • Final approval: 2-3 business days<br/>
                  • Annual fee will be collected after approval
                </p>
              </div>

              <p style="font-size: 14px; color: #999; margin: 20px 0 0;">
                Questions? Contact us at 
                <a href="mailto:membership@kitd.de" style="color: #059669;">membership@kitd.de</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #999; font-size: 12px; margin: 0;">
                KITD - Germany | Indian Classical Dance
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

export default sepaConsentReceivedEmail;