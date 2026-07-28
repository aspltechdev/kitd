const underReviewEmail = (name) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body style="font-family:Arial,sans-serif;color:#333;line-height:1.6;">
    <h2>Hello ${name},</h2>

    <p>Thank you for submitting your membership application to <strong>KITD Germany</strong>.</p>

    <p>Your application is now <strong>Under Review</strong> by our Membership Committee.</p>

    <p>We will notify you once the review has been completed.</p>

    <br>

    <p>Regards,</p>
    <strong>KITD Germany</strong>
</body>
</html>
`;

export default underReviewEmail;