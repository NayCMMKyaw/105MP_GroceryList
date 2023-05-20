module.exports = (req, res) => {
    const { item, itemId } = req.body;

    connection.query("UPDATE items SET name = ? WHERE id = ?", [item, itemId], (err, rows) => {
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
                        message: "Item updated"
                    },
                });
            }
        }
    });
}