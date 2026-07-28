const membershipEmail = (fullName) => {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Membership Application Received</title>
</head>

<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:40px 0;">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;">

<!-- Header -->
<tr>
<td style="background:#1d4ed8;padding:30px;text-align:center;">

<h1 style="color:#ffffff;margin:0;font-size:30px;">
KITD Germany
</h1>

<p style="color:#dbeafe;margin-top:10px;font-size:15px;">
Klassischer Indischer Tanz Deutschland
</p>

</td>
</tr>

<!-- Body -->

<tr>
<td style="padding:40px;">

<h2 style="color:#111827;">
Dear ${fullName},
</h2>

<p style="font-size:16px;color:#4b5563;line-height:1.8;">
Thank you for submitting your <strong>Membership Application</strong> to
KITD Germany.
</p>

<p style="font-size:16px;color:#4b5563;line-height:1.8;">
We have successfully received your application. Our membership committee
will carefully review your information and contact you regarding the next
steps.
</p>

<div style="background:#eff6ff;border-left:5px solid #2563eb;padding:20px;margin:30px 0;">

<h3 style="margin-top:0;color:#1e40af;">
What happens next?
</h3>

<ul style="color:#374151;line-height:2;">
<li>Your application has been recorded successfully.</li>
<li>Our team will review your submission.</li>
<li>You may be contacted for additional information if required.</li>
<li>You will receive another email once your membership status is updated.</li>
</ul>

</div>

<p style="font-size:16px;color:#4b5563;line-height:1.8;">
If you have any questions, please feel free to contact our team.
</p>

<p style="margin-top:35px;line-height:2;color:#374151;">

Kind Regards,<br>

<strong>KITD Germany</strong><br>

Klassischer Indischer Tanz Deutschland

</p>

</td>
</tr>

<!-- Footer -->

<tr>
<td style="background:#111827;color:#d1d5db;padding:25px;text-align:center;">

<p style="margin:0;font-size:14px;">
© ${new Date().getFullYear()} KITD Germany
</p>

<p style="margin-top:10px;font-size:13px;">
This is an automated email. Please do not reply directly to this message.
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

export default membershipEmail;