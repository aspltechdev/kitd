const changesRequestedEmail = (name, remarks) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body style="font-family:Arial,sans-serif;line-height:1.6;">

<h2>Hello ${name},</h2>

<p>Your membership registration requires some corrections before approval.</p>

<h3>Remarks</h3>

<p>${remarks}</p>

<p>Please update the requested information and submit again.</p>

<p>Regards,<br><strong>KITD Germany</strong></p>

</body>
</html>
`;

export default changesRequestedEmail;