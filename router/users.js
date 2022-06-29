const express = require('express');
const router = express.Router();
const {User} = require('../models');

router.post('/',(req, res)=>{
    const {userName, userAge, userGender} = req.body;
    console.log(userName, userAge, userGender);

    const createUser = () =>{
        User.create({
            user_name : userName,
            user_age : userAge,
            user_gender : userGender
        })
            .then((res)=>{
                
            })
            .catch((err)=>{
                res.send(err);
            });
        res.send("유저 저장 성공")
    }
    createUser();
});

router.get('/',(req, res)=>{
   User.findAll({})
       .then(data => {
           res.send(data);
       })
       .catch(err => {
           res.send(err);
       })
});

router.get('/:userId',(req, res)=>{
    const userId = req.params.userId;
    User.findByPk(userId)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
});

router.put('/:userId',(res, req)=>{
    const userId = req.params.userId;
    const {userName, userAge, userGender} = req.body;
    User.update({user_name : userName, user_age : userAge, user_gender: userGender},
        {where : {id : userId}})
        .then(res=>{

        })
        .catch(err => {
            res.send(err);
        });
    res.send('유저 업데이트 성공');
})

router.delete('/:userId',(req, res) => {
    const userId = req.params.userId;

    User.destroy({where : {id : userId}})
        .then(res => {
        })
        .catch(err => {
            res.send('유저 업데이트 성공');
        });
    res.send('유저 삭제 성공');
});

module.exports = router;