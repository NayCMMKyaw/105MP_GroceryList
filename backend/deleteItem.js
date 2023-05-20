module.exports = (req, res) => {
    const { itemId } = req.body;

    connection.query("DELETE FROM items WHERE id = ?", [itemId], (err, rows) => {
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
                    data: {
                        message: "Item deleted"
                    },
                });
            }
        }
    });
}