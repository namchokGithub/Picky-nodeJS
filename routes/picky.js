var express = require('express');
var router = express.Router();

const account = require('../controllers/account_controller')
const detail_tarnsection = require('../controllers/detail_tarnsection_controller')
const list_transection = require('../controllers/list_transection_controller')
const member_account = require('../controllers/member_account_controller')
const transection = require('../controllers/transection_controller')
const type_account = require('../controllers/type_account_controller')
const user = require('../controllers/user_controller')

/* table account*/
router.put('insert_account', account.insert_account)
router.put('update_account', account.update_account)
router.delete('delete_account', account.delete_account)
router.get('get_account_by_id', account.get_account_by_id)

/* table detail_tarnsection */
router.get('/get_detail_tarnsection', detail_tarnsection.get_all_detail_tarnsection)

/* table list_transection */
router.put('/insert_list_transection', list_transection.insert_list_transaction)
router.put('update_list_transection', list_transection.update_list_transaction)
router.delete('delete_list_transection', list_transection.delete_list_transaction)
router.get('get_list_transection_by_id', list_transection.get_list_transaction_by_id)

/* table member_account*/
router.put('insert_member_account', member_account.insert_member_account)
router.put('update_member_account', member_account.update_member_account)
router.delete('delete_member_account', member_account.delete_member_account)
router.get('get_member_account_by_id', member_account.get_member_account_by_id)

/* table transection*/
router.put('/insert_transection', transection.insert_transection);
router.put('update_transection', transection.update_transection)
router.delete('delete_transection', transection.delete_transection)
router.get('get_transection_by_id', transection.get_transection_by_id)

/* table type_account */
router.get('/get_type_account', type_account.get_all_type_account)

/* table user */
router.put('/insert_user', user.insert_user);
router.put('update_user', user.update_user)
router.delete('delete_user', user.delete_user)
router.get('get_user_by_id', user.get_user_by_id)

module.exports = router;