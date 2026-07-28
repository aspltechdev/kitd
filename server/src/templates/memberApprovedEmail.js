const memberApprovedEmail = (name, memberId) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body style="font-family:Arial,sans-serif;line-height:1.6;">

<h2>Congratulations ${name}! 🎉</h2>

<p>Your membership has been officially approved.</p>

<p><strong>Member ID:</strong> ${memberId}</p>

<p>Welcome to the KITD Germany community.</p>

<p>We look forward to your participation in our programs, events, and cultural initiatives.</p>

<p>Regards,<br><strong>KITD Germany</strong></p>

</body>
</html>
`;

export default memberApprovedEmail;