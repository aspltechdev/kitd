const registrationInvitationEmail = (name, registrationLink) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body style="font-family:Arial,sans-serif;color:#333;line-height:1.6;">

<h2>Congratulations ${name}!</h2>

<p>Your membership enquiry has been reviewed successfully.</p>

<p>Please complete your registration using the button below.</p>

<p style="margin:30px 0;">
<a href="${registrationLink}"
style="
background:#0d6efd;
color:#fff;
padding:12px 24px;
text-decoration:none;
border-radius:6px;">
Complete Registration
</a>
</p>

<p>This registration link will expire in 7 days.</p>

<p>Regards,<br><strong>KITD Germany</strong></p>

</body>
</html>
`;

export default registrationInvitationEmail;