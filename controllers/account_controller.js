const sql = require('../picky_connect')
const config = require('../config')

exports.insert_account = (req, res, next) => {
    sql.query(
        `   INSERT IN ${config.picky}.account ( ${config.picky}.account.accTypeId,
                                                ${config.picky}.account.accTypeId,
                                                ${config.picky}.account.accTypeId)
            VALUES (?,?,?);`, [
            req.params.accTypeId,
            req.params.accTypeId,
            req.params.accTypeId
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

exports.update_account = (req, res, next) => {
    sql.query(
        `   UPDATE ${config.picky}.account
            SET ${config.picky}.account.accTypeId = ?, 
                ${config.picky}.account.accName = ?, 
                ${config.picky}.account.accAmount = ?
            WHERE accId = ?;
        `, [
            req.params.accTypeId,
            req.params.accTypeId,
            req.params.accTypeId,
            req.params.accId
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

exports.delete_account = (req, res, next) => {
    sql.query(
        `   DELETE 
            FROM ${config.picky}.account 
            WHERE ${config.picky}.account.accId = ?;
        `, [
            req.params.accId
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

exports.get_account_by_id = (req, res, next) => {
    sql.query(
        `   SELECT *
            FROM ${config.picky}.account 
            WHERE ${config.picky}.account.accId = ?;
        `, [
            req.params.accId
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