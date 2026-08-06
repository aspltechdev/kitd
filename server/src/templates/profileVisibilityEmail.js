// templates/profileVisibilityEmail.js

const profileVisibilityEmail = (fullName, profileLink) => {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px;">
  <table style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden;">
    <tr>
      <td style="background: linear-gradient(135deg, #8B1E3F, #a83250); padding: 40px 30px; text-align: center;">
        <h1 style="color: #fff; margin: 0;">Complete Your Profile</h1>
        <p style="color: #fdf2f4; margin: 10px 0 0;">Make your presence known</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 40px 30px;">
        <p>Dear <strong>${fullName}</strong>,</p>
        <p>Your SEPA mandate has been received! 🎉</p>
        <p>Would you like your profile to be <strong>visible on the KITD website</strong>?</p>
        
        <div style="background: #fdf2f4; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <h3 style="color: #8B1E3F;">What you can do:</h3>
          <ul>
            <li>✅ Choose <strong>Public</strong> or <strong>Private</strong> profile</li>
            <li>📸 Upload your profile photo</li>
            <li>📝 Update your biography</li>
            <li>🌟 Appear in our Artists directory</li>
          </ul>
        </div>

        <div style="text-align: center; margin: 30px 0;">
          <a href="${profileLink}" style="display: inline-block; padding: 16px 40px; background: #8B1E3F; color: #fff; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: bold;">
            Complete Profile →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; text-align: center;">⏰ Link valid for <strong>14 days</strong>.</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
};

export default profileVisibilityEmail;