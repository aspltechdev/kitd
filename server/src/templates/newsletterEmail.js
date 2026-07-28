const newsletterEmail = () => {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Welcome to the KITD Newsletter</title>
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
Welcome to Our Newsletter!
</h2>

<p style="font-size:16px;color:#4b5563;line-height:1.8;">
Thank you for subscribing to the <strong>KITD Germany Newsletter</strong>.
</p>

<p style="font-size:16px;color:#4b5563;line-height:1.8;">
You are now part of our growing community dedicated to promoting and celebrating Indian Classical Dance and cultural heritage in Germany.
</p>

<div style="background:#eff6ff;border-left:5px solid #2563eb;padding:20px;margin:30px 0;">

<h3 style="margin-top:0;color:#1e40af;">
What You'll Receive
</h3>

<ul style="color:#374151;line-height:2;">
<li>Latest News & Announcements</li>
<li>Upcoming Events & Festivals</li>
<li>Dance Workshops & Training Programs</li>
<li>Membership Updates</li>
<li>Volunteer Opportunities</li>
<li>Artist Spotlights & Community Stories</li>
</ul>

</div>

<p style="font-size:16px;color:#4b5563;line-height:1.8;">
We are excited to share our journey with you and keep you informed about our upcoming activities and initiatives.
</p>

<p style="font-size:16px;color:#4b5563;line-height:1.8;">
Thank you for being a part of the KITD community.
</p>

<p style="margin-top:35px;line-height:2;color:#374151;">

Warm Regards,<br>

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
You are receiving this email because you subscribed to the KITD Newsletter.
</p>

<p style="margin-top:8px;font-size:13px;">
If you no longer wish to receive these emails, you may unsubscribe at any time from future newsletters.
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

export default newsletterEmail;