"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsers = exports.putUsers = exports.postUsers = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: "Get users",
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "Get user",
    });
};
exports.getUser = getUser;
const postUsers = (req, res) => {
    const { body } = req;
    res.json({
        msg: "Post user",
        body: body,
    });
};
exports.postUsers = postUsers;
const putUsers = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: "Put user",
        id: id,
        body: body,
    });
};
exports.putUsers = putUsers;
const deleteUsers = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "Delete user",
        id: id,
    });
};
exports.deleteUsers = deleteUsers;
//# sourceMappingURL=users.js.map