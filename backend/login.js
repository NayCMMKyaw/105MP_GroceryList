const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = async( req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    var sql = mysql.format('SELECT * FROM users WHERE email = ?', [email]);
    connection.query(sql, async (err, rows) => {
        if (err) {
            return res.json({
                success: false,
                message: 'Internal Server error',
                error: err.message,
            });
        }
        numRows = rows.length;
        if(numRows == 0) {
            return res.json({
                success: false,
                message: 'User not found in the system',
            });
        } else {
            const valid = await bcrypt.compare(password, rows[0].password);
            if (valid) {
                const token = jwt.sign(
                    { userId: rows[0].id },
                    "my-secret-key",
                    { expiresIn: '7d'}
                );
                res.cookie('UserToken', token);
                res.json({
                    success: true,
                    message: 'User authorized',
                    data: rows[0],
                });
            } else {
                return res.status(401).json({
                    success: false,
                    message: 'Email or password is incorrect'
                  });
            }
        }
    })
}