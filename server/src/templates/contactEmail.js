const contactEmail = (fullName) => {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>We've Received Your Enquiry</title>
</head>

<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:40px 0;">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;">

<!-- Header -->
<tr>
<td style="background:#1d4ed8;padding:30px;text-align:center;">

<h1 style="margin:0;color:#ffffff;font-size:30px;">
KITD Germany
</h1>

<p style="margin-top:10px;color:#dbeafe;font-size:15px;">
Klassischer Indischer Tanz Deutschland
</p>

</td>
</tr>

<!-- Body -->
<tr>
<td style="padding:40px;">

<h2 style="margin-top:0;color:#111827;">
Hello ${fullName},
</h2>

<p style="font-size:16px;color:#4b5563;line-height:1.8;">
Thank you for contacting <strong>KITD Germany</strong>.
</p>

<p style="font-size:16px;color:#4b5563;line-height:1.8;">
We have successfully received your enquiry. Our team will review your message and respond as soon as possible.
</p>

<div style="background:#eff6ff;border-left:5px solid #2563eb;padding:20px;margin:30px 0;">

<h3 style="margin-top:0;color:#1e40af;">
What happens next?
</h3>

<ul style="color:#374151;line-height:2;">
<li>Your enquiry has been successfully received.</li>
<li>Our support team is reviewing your message.</li>
<li>We'll contact you via email or phone if additional information is required.</li>
<li>Most enquiries receive a response within 1–3 business days.</li>
</ul>

</div>

<p style="font-size:16px;color:#4b5563;line-height:1.8;">
We appreciate your interest in KITD Germany and look forward to assisting you.
</p>

<p style="margin-top:35px;line-height:2;color:#374151;">

Kind Regards,<br>

<strong>KITD Germany</strong><br>

Support Team<br>

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
This is an automated acknowledgement email. Please do not reply directly to this message.
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

export default contactEmail;