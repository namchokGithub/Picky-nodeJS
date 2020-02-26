const sql = require('../picky_connect')
const config = require('../config')

//online_testing
exports.insert_list_transaction = (req, res, next) => {
    sql.query(
        `   INSERT IN ${config.picky}.list_transaction (${config.picky}.list_transaction.ListMemAccId,
                                                        ${config.picky}.list_transaction.ListTsId,
                                                        ${config.picky}.list_transaction.create_list)
            VALUES (?,?,?)    `, [
            req.params.ListMemAccId,
            req.params.ListTsId,
            req.params.create_list
        ],
        (err, query) => {
            if (err) {
                console.log(err);
                console.log('select all error');
                res.json(err);
            } else {
                console.log('select all complete');
                res.json(query);
            }
        }
    )
}

exports.update_list_transaction = (req, res, next) => {
    sql.query(
        `   UPDATE ${config.picky}.list_transaction
            SET ${config.picky}.list_transaction.ListMemAccId = ?, 
                ${config.picky}.list_transaction.ListTsId = ?, 
                ${config.picky}.list_transaction.create_list = ?
            WHERE ${config.picky}.list_transaction.ListId = ?;
        `, [
            req.params.accTypeId,
            req.params.accTypeId,
            req.params.accTypeId,
            req.params.ListId
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

exports.delete_list_transaction = (req, res, next) => {
    sql.query(
        `   DELETE 
            FROM ${config.picky}.list_transaction 
            WHERE ${config.picky}.list_transaction.ListId = ?;
        `, [
            req.params.ListId
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

exports.get_list_transaction_by_id = (req, res, next) => {
    sql.query(
        `   SELECT *
            FROM ${config.picky}.list_transaction 
            WHERE ${config.picky}.list_transaction.ListId = ?;
        `, [
            req.params.ListId
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