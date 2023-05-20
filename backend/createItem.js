module.exports = (req, res) => {
    const { userId } = res.locals;
    const {item} = req.body;

    connection.query("INSERT INTO items (name, user_id) VALUES (?, ?)", [item, userId], (err, rows) => {
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
                        message: "Item created"
                    },
                });
            }
        }
    });
};