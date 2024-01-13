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
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "contact@onbeirut.com",
    pass: "rbFIAhVPsNtJSQRH",
  },
});


export  async function GET(req: NextRequest, res: NextApiResponse) {
  // const order = req?.body.get('order')
  // const {order} = await req.json()
  if (req.method === 'GET') {
    try {

        
        // sendEmail();
        const info = await transporter.sendMail({
            from: '"The Craft Room" <sales@thecraftroom-lb.com>', // sender address
            to: "vito.medlej@gmail.com", // list of receivers
            subject: "Order Placement Email Testing", // Subject line
            text: "Order Placement Email Testing", // plain text body
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Your Order Confirmation</title>
                <style>
                    body {
                        font-family: 'Arial', sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                        text-align: center;
                    }
            
                    .container {
                        max-width: 600px;
                        margin: 20px auto;
                        background-color: #fff;
                        padding: 30px;
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
            
                    .icon {
                        font-size: 40px;
                        color: #28a745;
                        margin-bottom: 20px;
                    }
            
                    h1 {
                        color: #333;
                    }
                    footer {
                        background-color: #333;
                        color: white;
                        padding: 20px;
                        text-align: center;
                      }
                  
                      footer a {
                        color: white;
                        text-decoration: none;
                      }
                    p {
                        color: #666;
                        font-size: 16px;
                        margin-top: 10px;
                    }
            
                    .btn {
                        display: inline-block;
                        padding: 10px 20px;
                        margin-top: 20px;
                        background-color: #28a745;
                        color: #fff;
                        text-decoration: none;
                        border-radius: 5px;
                        transition: background-color 0.3s ease;
                    }
            
                    .btn:hover {
                        background-color: #218838;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="icon">&#10003;</div>
                    <h1>Your Order Has Been Placed</h1>
                    <p>Thank you for shopping with us! Your order is confirmed and will be processed shortly.</p>
                    <a href="#" class="btn">Track Your Order</a>
                </div>
            </body>
            <footer>
            <p>Contact us at: <a href="mailto:sales@thecraftroom-lb.com">sales@thecraftroom-lb.com</a></p>
            <p>Whatsapp: +961 03874743</p>
          </footer>
            </html>
            `, // html body
        });
        
        console.log("Message sent: %s", info?.messageId);
        return NextResponse.json({success:true});
    }
    catch(e){
        console.log('e: ', e);

        return NextResponse.json({success:false});
    }    
    
}
return NextResponse.json({success:false});

}

