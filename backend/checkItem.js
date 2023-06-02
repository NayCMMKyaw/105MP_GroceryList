module.exports = (req, res) => {
    const { bought, id } = req.body;

    connection.query("UPDATE items SET bought = ? WHERE id = ?", [bought, id], (err, rows) => {
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
                    data: rows[0],
                    message: "Item updated"  
                });
            }
        }
    });
}