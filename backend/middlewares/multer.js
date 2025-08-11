import multer from 'multer';

const storage = multer.memoryStorage();

// Base multer configuration with file filtering and limits
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
    files: 1 // Only allow 1 file at a time
  },
  fileFilter: (req, file, cb) => {
    console.log('File field name:', file.fieldname); // Debug log
    console.log('File mimetype:', file.mimetype); // Debug log
    
    // Define allowed file types based on field name
    if (file.fieldname === 'file') {
      // Generic file field - allow images and documents
      const allowedTypes = [
        'image/jpeg',
        'image/jpg', 
        'image/png',
        'image/webp',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error(`Invalid file type: ${file.mimetype}. Only images and documents allowed.`), false);
      }
    } 
    else if (file.fieldname === 'profilePicture') {
      // Profile picture - only images
      if (file.mimetype.startsWith('image/')) {
        cb(null, true);
      } else {
        cb(new Error('Only image files are allowed for profile picture'), false);
      }
    }
    else if (file.fieldname === 'resume') {
      // Resume - only documents
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Only PDF and DOC files are allowed for resume'), false);
      }
    }
    else {
      // Unexpected field
      cb(new Error(`Unexpected field: ${file.fieldname}. Expected: file, profilePicture, or resume`), false);
    }
  }
});

// Export different configurations for different use cases
export const singleUpload = upload.single("file"); // Generic file upload
export const profilePictureUpload = upload.single("profilePicture"); // For registration
export const resumeUpload = upload.single("resume"); // For profile updates

// Export the base upload for custom configurations
export default upload;