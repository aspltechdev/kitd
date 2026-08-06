// import transporter from "../config/mailer.js";

// export const sendEmail = async ({
//   to,
//   subject,
//   html,
// }) => {
//   return transporter.sendMail({
//     from: process.env.EMAIL_FROM,
//     to,
//     subject,
//     html,
//   });
// };

import transporter from "../config/mailer.js";

export const sendEmail = async ({
  to,
  subject,
  html,
  attachments, // ✅ Add attachments parameter
}) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html,
  };

  // ✅ Add attachments if provided
  if (attachments && attachments.length > 0) {
    mailOptions.attachments = attachments;
  }

  return transporter.sendMail(mailOptions);
};