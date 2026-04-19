console.log("KEY_BASE64 exists:", !!process.env.FIREBASE_SERVICE_ACCOUNT_KEY_BASE64);
console.log("Admin UID Test:", (await admin.auth().getUserByEmail("your-email@gmail.com")).uid)
