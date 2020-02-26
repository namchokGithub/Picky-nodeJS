const sql = require('../picky_connect')
const config = require('../config')

exports.insert_member_account = (req, res, next) => {
    sql.query(
        `   INSERT IN ${config.picky}.member_account (${config.picky}.member_account.AccId,
                                            ${config.picky}.member_account.UsId)
            VALUES (?,?)`, [
            req.params.AccId,
            req.params.UsId
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

exports.update_member_account = (req, res, next) => {
    sql.query(
        `   UPDATE ${config.picky}.member_account
            SET ${config.picky}.member_account.AccId = ?, 
                ${config.picky}.member_account.UsId = ?
            WHERE ${config.picky}.member_account.memAccId = ?;
        `, [
            req.params.AccId,
            req.params.UsId,
            req.params.memAccId
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

exports.delete_member_account = (req, res, next) => {
    sql.query(
        `   DELETE 
            FROM ${config.picky}.member_account 
            WHERE ${config.picky}.member_account.memAccId = ?;
        `, [
            req.params.memAccId
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

exports.get_member_account_by_id = (req, res, next) => {
    sql.query(
        `   SELECT *
            FROM ${config.picky}.member_account 
            WHERE ${config.picky}.member_account.memAccId = ?;
        `, [
            req.params.member_account
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