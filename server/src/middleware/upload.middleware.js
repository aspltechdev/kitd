
import multer from "multer";
import path from "path";
import fs from "fs";

const storage = (folderName) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = path.join("src", "uploads", folderName);

      fs.mkdirSync(uploadPath, { recursive: true });

      cb(null, uploadPath);
    },

    filename: (req, file, cb) => {
      const uniqueName =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        path.extname(file.originalname);

      cb(null, uniqueName);
    },
  });

const fileFilter = (req, file, cb) => {
  const allowed = [
    // Images
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/webp",

    // Videos
    "video/mp4",
    "video/webm",
    "video/quicktime",

    // Documents
    "application/pdf",
  ];

  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file type."));
  }
};

export const upload = (folderName) =>
  multer({
    storage: storage(folderName),
    fileFilter,
    limits: {
      fileSize: 100 * 1024 * 1024, // 100 MB
    },
  });