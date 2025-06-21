const authorizeRole = (...allowedRoles) => {
    return (req, res, next) =>{
        if (!req.user || !allowedRoles.includes(req.user.role)){
            return res.status(401).json({ message: "Access denied: insufficient role"})
        }
        next()
    }
}
module.exports = authorizeRole