import nodemailer from 'nodemailer';

async function sendEmail() {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vitto.medl@gmail.com',
            pass: 'VITO55555'
        }
    });

    let mailOptions = {
        from: 'vito.medlej@gmail.com',
        to: 'vito.medlej@gmail.com',
        subject: 'Hello',
        text: 'World!'
    };

    transporter.sendMail(mailOptions, function(error : any, info:any){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}



import client from '@/database/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'



const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "vitto.medl@gmail.com",
    // pass: "VITO55555",
  },
});
export  async function GET(req: NextRequest, res: NextApiResponse) {
  // const order = req?.body.get('order')
  // const {order} = await req.json()
  if (req.method === 'GET') {
   
    // sendEmail();
    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <vitto.medl@gmail.com>', // sender address
      to: "vitto.medl@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info?.messageId);
    return NextResponse.json({success:true});
}
return NextResponse.json({success:false});

}

