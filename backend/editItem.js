module.exports = (req, res) => {
    const { name, id } = req.body;

    connection.query("UPDATE items SET name = ? WHERE id = ?", [name, id], (err, rows) => {
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