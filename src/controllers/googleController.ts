import express, { Request, Response } from "express";
import config from "../config";
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(config.googleCLIENTID);

const getGoogleUser = async (req: Request, res: Response) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: req.body.it
        });
        const payload = ticket.getPayload();
        const userid = payload['sub']; //21자리의 Google 회원 id 번호
        console.log(payload, userid);
    } catch (error) {
        console.log(error);
    }
};  

export default {
    getGoogleUser
};