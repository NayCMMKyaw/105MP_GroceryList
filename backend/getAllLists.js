
module.exports = (req, res) => {
    const {userId} = res.locals;

    connection.query("SELECT * FROM items WHERE user_id = ?", [userId], ( err, rows) => {
        if (err) {
            return res.json({
                success: false,
                data: null,
                message: err.message,
            }); 
        } else {
            res.json({
                success: true,
                items: rows,
                message: 'Items fetched',
            });
        }
    });
};