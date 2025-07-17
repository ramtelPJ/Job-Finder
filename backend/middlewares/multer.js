import multer from 'multer'

const storage=multer.memoryStorage();
export const singleUpload=multer({storage}).single("profileImage"); // Ensure the field name matches the request