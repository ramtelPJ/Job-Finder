import multer from 'multer'

const storage=multer.memoryStorage();
export const singleUpload=multer({storage}).single("file"); // Ensure the field name matches the request