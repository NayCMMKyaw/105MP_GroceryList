module.exports = (req, res) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 1 * 1000),
        httpOnly: true,
    })
    res
        .status(200)
        .json({ success: true, message: 'User logged out successfully' })
}