module.exports = (req, res) => {
    const { id } = req.params;

    connection.query("DELETE FROM items WHERE id = ?", [id], (err, rows) => {
        if(err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        } else {
            if (rows) {
                res.json({
                    success: true,
                    message: "Item deleted"
                });
            }
        }
    });
}