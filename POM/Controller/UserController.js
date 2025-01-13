import { request } from "express";
import prisma from "../DB/db.config.js";


export const fetchUsers = async(req, res) =>{
    const users = await prisma.user.findMany({});

    return res.json({status:200, data: users});
}

export const createUser = async(req , res) =>{
    const{name,email,password,contact, address,picode} = req.body

    const findUser = await prisma.user.findUnique({
        where:{
            email:email
        }
    });

    if(findUser){
        return res.json({status:400, message:"email already exists"})
    }

    const newUser = await prisma.user.create({
        data:{
            name: name,
            email:email,
            password:password,
            contact_no:contact,
             Address:address,
             picode:picode
        }
    });

    return res.json({status:200, data:newUser, msg:"user created"});
}

// show user 

export const showUser = async(req, res) => {
    const userId = request.params.id;
    const user = await prisma.user.findFirst({
        where:{
            id:Number(userId)
        }
    });

    return res.json({status:200 , data: user});
}

// update the user

export const updateUser = async (req, res) =>{
    const userId = req.params.id;
    const{name,email,password,contact, address,picode} =req.body;

    await prisma.user.update({
        where:{
            id: Number(userId)
        },
        data:{
            name,
            email,
            password,
            contact,
            address,
            picode
        }
    });

    return res.json({status:200 , message:"user updated"});
}

//delete user

export const deleteUser = async(req, res) =>{
    const userId = req.params.id;

    await prisma.user.delete({
        where:{
            id:Number(userId)
        }
    });

    return res.json({status:200, message: "user deleted"});
}