const sql = require('../picky_connect')
const config = require('../config')

exports.insert_transection = (req, res, next) => {
    sql.query(
        `   INSERT IN ${config.picky}.transection ( ${config.picky}.transection.detail_transection,
                                                    ${config.picky}.transection.tsType,
                                                    ${config.picky}.transection.tsAmount)
            VALUES (?,?,?)`, [
            req.params.detail_transection,
            req.params.tsType,
            req.params.tsAmount
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

exports.update_transection = (req, res, next) => {
    sql.query(
        `   UPDATE ${config.picky}.transection
            SET ${config.picky}.transection.detail_transection = ?, 
                ${config.picky}.transection.tsType = ?,
                ${config.picky}.transection.tsAmount = ?
            WHERE ${config.picky}.member_account.tsId = ?;
        `, [
            req.params.detail_transection,
            req.params.tsType,
            req.params.tsAmount,
            req.params.tsId
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

exports.delete_transection = (req, res, next) => {
    sql.query(
        `   DELETE 
            FROM ${config.picky}.transection 
            WHERE ${config.picky}.transection.tsId = ?;
        `, [
            req.params.tsId
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

exports.get_transection_by_id = (req, res, next) => {
    sql.query(
        `   SELECT *
            FROM ${config.picky}.transection 
            WHERE ${config.picky}.transection.tsId = ?;
        `, [
            req.params.tsId
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