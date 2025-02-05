const User = require('../models/userModel');

module.exports = (roles) => {
    return async (req, res, next) => {
        try {
            const userId = req.header('X-User-ID'); // Ambil user ID dari header
            if (!userId) {
                return res.status(400).json({ message: "User ID is required in the header" });
            }

            const user = await User.getById(userId);
            
            if (!user) {
                return res.status(403).json({ message: "User not found" });
            }

            if (!roles.includes(user.role)) {
                return res.status(403).json({ message: "Access denied" });
            }

            req.user = user;
            next();
        } catch (error) {
            console.error("Error in roleMiddleware:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    };
};