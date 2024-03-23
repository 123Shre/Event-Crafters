import multer from "multer";

// Set up Multer storage for saving uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Generate a unique filename
  },
});

// Create the Multer upload instance
const upload = multer({ storage: storage });

export default upload;
