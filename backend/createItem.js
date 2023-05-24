module.exports = (req, res) => {
    const { userId } = res.locals;
    const {item} = req.body;

    connection.query("INSERT INTO items (name, user_id) VALUES (?, ?)", [item, userId], (err, result) => {
        if(err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        } else {
            const newItem = {
                id: result.id,
                name: item,
                user_id: userId,
            }
                res.json({
                    success: true,
                    data: newItem,
                    message: "Item created",
                });
        }
    });
};