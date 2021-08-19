import { NextFunction, Request, Response } from "express";

export default async (req : Request, res : Response, next : NextFunction) => {
  const { description } = req.body;
  
  if(!description) {
    res.status(404).json({ error : "Description not found" });
    return;
  }

  next();
};