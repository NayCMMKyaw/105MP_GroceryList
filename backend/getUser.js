const mysql = require('mysql2');

module.exports = (req, res) => {
    // //verify token and authenticate user
    // const token = req.cookies.UserToken;
    // var decoded = jwt.verify(token, "my-secret-key");
    // console.log(decoded);

    const { userId } = res.locals;

    connection.query("SELECT * FROM users WHERE id = ?",[userId], (err,rows) => {
        if(err) {
            res.json({
                success: false,
                data: null,
                error: err.message,
            });
        } else {
            res.json({
                success: true,
                user: rows[0],
                error: null,
            });
        }
    });
}