// import { render } from '@react-email/render';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

import client from '@/database/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'


export  async function GET(req: NextRequest, res: NextApiResponse) {
    const mailerSend = new MailerSend({
        apiKey: process.env.MAILERSEND_API_KEY || 'mlsn.a3ae51ff161c3aba5f2cbd7ff0c7e4f254d570c8a84f1261345260392215d556',
    });
    
    const emailHtml = `<div>hello 5ara</div>`;
    
    const sentFrom = new Sender("vito.medlej@gmail.com", "5ara name");
    const recipients = [
        new Recipient("rip.vitto@gmail.com", "Your Client 5ara ")
    ];
    
    const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setSubject("This is a Subject")
        .setHtml(emailHtml)
    
    mailerSend.email.send(emailParams);
    return NextResponse.json({success:false});
    

}