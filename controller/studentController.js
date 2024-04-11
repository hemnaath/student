const Student = require('../model/studentModel');

const createStu = async(req, res)=>{
    const{username, email, age, city} = req.body;
    const exists = await Student.findOne({email});
    if(exists){
        return res.status(400).json('student exists');
    }else{
        const creator = await Student.create({username, email, age, city});
        return res.status(201).json({message:'student Created', creator});
    }
}

const updateStu = async(req, res)=>{
    const stuId = req.params.id;
    const{username, email, age, city} = req.body;
    const exists = await Student.findOne({_id:stuId});
    if(!exists){
        return res.status(404).json('student not exists');
    }else{
        const updater = await exists.updateOne({$set:{username, email, age, city}});
        return res.status(301).json({message:'student Updated', updater});
    }
}

const deleteStu = async(req, res)=>{
    const stuId = req.params.id;
    const exists = await Student.findOne({_id:stuId});
    if(!exists){
        return res.status(404).json('student not exists');
    }else{
        const deleter = await Student.deleteOne({_id:stuId});
        return res.status(200).json({message:'student Deleted', deleter});
    }
}

const getStu = async(req, res)=>{
    const exists = await Student.find();
    if(!exists){
        return res.status(404).json('student not exists');
    }else{
        return res.status(200).json(exists);
    }
}

module.exports = {
    createStu,
    updateStu,
    deleteStu,
    getStu,
}