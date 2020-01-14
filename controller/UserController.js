var user = require('../model/User');
var con = require('../config/Database');
var logger = require('../config/logger');

exports.getAllUser = function(req, res) {
    var sql = 'SELECT * FROM FirstDatabase.crud';
    con.query(sql, function(err, result) {
        if (err) {
            logger.error(err);
            return res.status(404).send({
                'msg': err
            });
        } else {
            logger.info("Get all user success!");
            return res.status(200).send(result);
            // console.log(result);
        };
    });
};

exports.createUser = function(req, res) {
    logger.info("Request body: " + req.body);
    var data = req.body;
    var sql = "INSERT INTO FirstDatabase.crud VALUES (DEFAULT, '" + data.name + "', '" + data.email + "', '" + data.address + "')";
    logger.info(sql);
    con.query(sql, function(err, result) {
        if (err) {
            logger.error(err);
            return res.status(404).send({
                'msg': err
            });
        } else {
            logger.info("Created user success!");
            return res.status(200).send({
                'msg': "Created User!!!"
            });
        };
    });
}

exports.getUser = function(req, res) {
    logger.info("Request param: " + req.params.id);
    var id = req.params.id;
    var sql = 'SELECT * FROM FirstDatabase.crud WHERE id=' + id;
    con.query(sql, function(err, result) {
        if (err) {
            logger.error(err);
            return res.status(404).send({
                'msg': err
            });
        } else {
            if(result.length == 0) {
                logger.error("Not found this user in database.");
                return res.status(404).send({
                    'msg': "Not found this user in database."
                })
            }
            logger.info("Get 1 user success.");
            return res.status(200).send(result);
            // console.log(result);
        };
    });
}

exports.updateUser = function(req, res) {
    logger.info("Request param: " + req.params.id);
    var id = req.params.id;
    var sql = 'SELECT * FROM FirstDatabase.crud WHERE id=' + id;
    con.query(sql, function(err, result) {
        if (err) {
            logger.error(err);
            return res.status(404).send({
                'msg': err
            });
        } else {
            if(result.length == 0) {
                logger.error("Not found this user in database.");
                return res.status(404).send({
                    'msg': "Not found this user in database."
                })
            }
            logger.info(req.body);
            var data = req.body;
            var sql = "UPDATE FirstDatabase.crud SET `name` = '" + data.name + "', `email` = '" + data.email + "', `address` = '" + data.address + "' WHERE id=" + id;
            logger.info(sql);
            con.query(sql, function(err, result) {
                if (err) {
                    logger.error(err);
                    return res.status(404).send({
                        'msg': err
                    });
                } else {
                    logger.info("Updated user success.");
                    return res.status(200).send({
                        'msg': "Updated User!!!"
                    });
                };
            });        
        };
    });
}

exports.deleteUser = function(req, res) {
    logger.info("Request param: " + req.params.id);
    var id = req.params.id;
    var sql = 'SELECT * FROM FirstDatabase.crud WHERE id=' + id;
    con.query(sql, function(err, result) {
        if (err) {
            logger.error(err);
            return res.status(404).send({
                'msg': err
            });
        } else {
            if(result.length == 0) {
                logger.error("Not found this user in database.");
                return res.status(404).send({
                    'msg': "Not found this user in database."
                })
            }
            var sql = "DELETE FROM FirstDatabase.crud WHERE id=" + id;
            logger.info(sql);
            con.query(sql, function(err, result) {
                if (err) {
                    logger.error(err);
                    return res.status(404).send({
                        'msg': err
                    });
                } else {
                    console.log("Deleted user success.");
                    return res.status(200).send({
                        'msg': "Deleted User!!!"
                    });
                };
            });        
        };
    });
}