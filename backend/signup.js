const bcrypt = require('bcrypt');
const mysql = require('mysql2');

module.exports= async(req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const salt1 = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt1);
    //insert new user data into db
    var sql = mysql.format('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword] 
    );
    connection.query(sql, (err, rows) => {
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
                        message: "User is created"
                    }
                })
            }
        }
    })
}