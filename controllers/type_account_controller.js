const sql = require('../picky_connect')
const config = require('../config')

exports.get_all_type_account = (req, res, next) => {
    sql.query(
        `   SELECT *
            FROM ${config.picky}.type_account; `,
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