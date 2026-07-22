export const validateRequired = (fields) => {
  return (req, res, next) => {
    const missing = [];

    fields.forEach((field) => {
      if (!req.body[field]) {
        missing.push(field);
      }
    });

    if (missing.length) {
      return res.status(400).json({
        success: false,
        message: `${missing.join(", ")} is required`,
      });
    }

    next();
  };
};