const adminRegistrationReceivedEmail = (name) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body style="font-family:Arial,sans-serif;line-height:1.6;">

<h2>New Membership Registration Received</h2>

<p>A new member registration has been submitted.</p>

<p><strong>Applicant:</strong> ${name}</p>

<p>Please review the registration from the Admin Dashboard.</p>

</body>
</html>
`;

export default adminRegistrationReceivedEmail;