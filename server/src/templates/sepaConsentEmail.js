// src/templates/sepaConsentEmail.js

const sepaConsentEmail = (fullName, sepaLink) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Complete Your SEPA Direct Debit Mandate</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0d9488, #14b8a6); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px;">SEPA Direct Debit Mandate</h1>
              <p style="color: #ccfbf1; margin: 10px 0 0; font-size: 16px;">Complete your payment setup</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="font-size: 16px; color: #333; line-height: 1.6;">
                Dear <strong>${fullName}</strong>,
              </p>
              
              <p style="font-size: 16px; color: #333; line-height: 1.6;">
                Great news! Your membership application has been reviewed and approved for the next step. 
                To complete your membership, we need you to set up your <strong>SEPA Direct Debit Mandate</strong> 
                for the annual membership fee payment.
              </p>

              <div style="background-color: #f0fdfa; border: 1px solid #99f6e4; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <h3 style="color: #0d9488; margin: 0 0 10px;">What you'll need:</h3>
                <ul style="color: #333; line-height: 1.8; margin: 0; padding-left: 20px;">
                  <li>Your IBAN (International Bank Account Number)</li>
                  <li>Account holder name</li>
                  <li>Bank name (optional)</li>
                  <li>Signed SEPA mandate form (download, sign, and upload)</li>
                </ul>
              </div>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="${sepaLink}" style="display: inline-block; background: linear-gradient(135deg, #0d9488, #14b8a6); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-size: 18px; font-weight: bold;">
                      Complete SEPA Mandate →
                    </a>
                  </td>
                </tr>
              </table>

              <p style="font-size: 14px; color: #666; text-align: center;">
                This link is valid for <strong>14 days</strong>.
              </p>

              <div style="border-top: 1px solid #e5e7eb; margin: 30px 0 0; padding: 20px 0 0;">
                <p style="font-size: 14px; color: #666; line-height: 1.6;">
                  <strong>About SEPA Direct Debit:</strong><br/>
                  The SEPA Direct Debit Mandate allows KITD to collect the annual membership fee 
                  directly from your bank account. You can cancel this mandate at any time by 
                  contacting us.
                </p>
                
                <p style="font-size: 14px; color: #666; line-height: 1.6;">
                  <strong>Membership Fees:</strong><br/>
                  • Active Member: €50/year<br/>
                  • Supporting Member: €75/year<br/>
                  • Youth Member: €25/year
                </p>
              </div>

              <p style="font-size: 14px; color: #999; margin: 20px 0 0;">
                If you have any questions, please contact us at 
                <a href="mailto:membership@kitd.de" style="color: #0d9488;">membership@kitd.de</a>
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

export default sepaConsentEmail;