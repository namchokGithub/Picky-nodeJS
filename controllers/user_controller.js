const sql = require('../picky_connect')
const config = require('../config')

//online_testing
exports.insert_user = (req, res, next) => {
    sql.query(
        `   INSERT IN ${config.picky}.user (${config.picky}.user.usUsername,${config.picky}.user.usPassword,${config.picky}.user.usFirstname,${config.picky}.user.usLastname,${config.picky}.user.usEmail,${config.picky}.user.usTel)
            VALUES (?,?,?,?,?,?)`, [
            req.params.usUsername,
            req.params.usPassword,
            req.params.usFirstname,
            req.params.usLastname,
            req.params.usEmail,
            req.params.usTel
        ],
        (err, query) => {
            if (err) {
                console.log(err);
                console.log('insert error');
                res.json(err);
            } else {
                console.log('insert complete');
                res.json(query);
            }
        }
    )
}

exports.update_user = (req, res, next) => {
    sql.query(
        `   UPDATE ${config.picky}.user
            SET ${config.picky}.user.usUsername = ?, 
                ${config.picky}.user.usPassword = ?,
                ${config.picky}.user.usFirstname = ?,
                ${config.picky}.user.usLastname = ?,
                ${config.picky}.user.usEmail = ?,
                ${config.picky}.user,usTel = ?
            WHERE ${config.picky}.user.usId = ?;
        `, [
            req.params.usUsername,
            req.params.usPassword,
            req.params.usFirstname,
            req.params.usLastname,
            req.params.usEmail,
            req.params.usTel,
            req.params.usId
        ],
        (err, query) => {
            if (err) {
                console.log(err);
                console.log('update error');
                res.json(err);
            } else {
                console.log('update complete');
                res.json(query);
            }
        }
    )
}

exports.delete_user = (req, res, next) => {
    sql.query(
        `   DELETE 
            FROM ${config.picky}.user 
            WHERE ${config.picky}.user.usId = ?;
        `, [
            req.params.usId
        ],
        (err, query) => {
            if (err) {
                console.log(err);
                console.log('delete error');
                res.json(err);
            } else {
                console.log('delete complete');
                res.json(query);
            }
        }
    )
}

exports.get_user_by_id = (req, res, next) => {
    sql.query(
        `   SELECT *
            FROM ${config.picky}.user 
            WHERE ${config.picky}.user.usId = ?;
        `, [
            req.params.usId
        ],
        (err, query) => {
            if (err) {
                console.log(err);
                console.log('get all error');
                res.json(err);
            } else {
                console.log('get all complete');
                res.json(query);
            }
        }
    )
}