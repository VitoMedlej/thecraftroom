"use client";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {AiOutlineArrowUp} from 'react-icons/ai';
import { Box } from '@mui/material';


const FAQs = [
  {
    "Q": "1. When will I get my order?",
    "A": "Soon! Most orders will ship the same business day, or the following. On the odd occasion our stock quantities may be slightly out and your order may be delayed. We will inform you if this is the case.\n\nMost deliveries are between 3-7 days to most cities and surrounding areas and for far areas estimate between 5-10 within Lebanon."
  },
  {
    "Q": "2. How do I check the status of my order?",
    "A": "Great question, on completion of your order you will be emailed a copy of your order number and your order.\n\nOnce we have marked your order as shipped, you will be automatically emailed about the status of your shipment, these occasionally end up in spam/junk folders so keep an eye out for it.\n\nIf you have misplaced this email or request it in another format you can call our support line or email our support. We will do our best to reply as soon as possible."
  },
  {
    "Q": "3. What are your shipping costs and terms?",
    "A": "Shipping is FREE! for all orders within Lebanon over the value of $45, for all orders under $45, shipping is $3."
  },
  {
    "Q": "4. What are your minimums?",
    "A": "On our website, each item description will state if there is a minimum or if you can purchase the items individually. Papers, cricut cards, and card stock are only sold in the pack sizes supplied by manufacturers (e.g., 10, 15, 20, and 25 papers per pack).\n\nPlease Note: there is no minimum order value."
  },
  {
    "Q": "6. Pricing",
    "A": "All prices are in US Dollars* and are inclusive of VAT and are subject to change without prior notice.\n\nShipping is Free for all orders over $45 within Lebanon, and is only $3 for orders under $45 regardless of size. At The Craft Room we aim to keep our prices as low as we can and pass all savings onto our customers.\n\nSale items may return to pre-sale prices after the sale has finished. Once again, the correct price will always be the one listed when you add the item to the cart."
  },
  {
    "Q": "7. Do you ship internationally?",
    "A": "TheCraftRoom is a Lebanese-owned company, and we ship to Middle Eastern and North African countries.\n\nYou can call or email us for the shipping rates."
  },
  {
    "Q": "8. Can I make a change to my order?",
    "A": "Unfortunately, once you've placed your order, we are unable to make any amendments. To avoid disappointments, we highly suggest that you review your cart and checkout details carefully before finalizing your order online."
  },
  {
    "Q": "9. Do you have a 'real' store or Showroom?",
    "A": "We are an online retail store with a warehouse distribution facility.\n\nYou can find the address of our showroom on the Contact Us Page.\n\nSince we are an online business, we make every attempt to make your experience at our online store as comprehensive and satisfying as possible."
  },
  {
    "Q": "10. Do you sell wholesale?",
    "A": "We do not sell wholesale. TheCraftRoom is a retailer and does not offer wholesale pricing. We do offer discounts on some bulk purchases. Contact Customer Support to see if this option is available for your particular purchase."
  },
  {
    "Q": "11. Is CraftOnline a secure site?",
    "A": "TheCraftRoom is very concerned about site security on the Internet today. That is why we have made sure that we have followed and surpassed all industry standards necessary for a secure site. These include encrypting all data that you give to us, processing your information in a safe and responsible manner, and not sharing any information that has been given to us by you, our customers.\n\nIn line with our strict security policy, we also offer a wide range of payment options, including Bank Transfer, Cheque, Money transfer through trusted channels, and even the option to 'Call us 'where you can finalize your order and call us with your way of payment.\n\nWe want you to feel confident when ordering from The Craft Room, and we are doing everything we can to continue to operate a secure site. If you have any other questions concerning site security, please feel free to email us at Customer Service."
  },
  {
    "Q": "12. What is your return policy?",
    "A": "Goods found to have manufacturing defects will be replaced at no charge. All claims must be approved for return prior to the return of the goods. Claims for faulty stock must be reported to TheCraftRoom within three (3) days of the receipt of the order. A copy of the relevant invoice must accompany returned items."
  },
  {
    "Q": "13. Where are you located?",
    "A": "We are located in The South of Lebanon.\n\nOur distribution and warehouse address is:\n\nTheCraftRoom\nSidon-Tyre highway\nAl Rawda Street."
  },
  {
    "Q": "14. Will I have to pay VAT on my order?",
    "A": "All prices shown on this website include Value-added Tax (VAT)."
  },
  {
    "Q": "15. Store Pickup",
    "A": "If you would like to have store pickup with no shipping, please select on checkout 'Call us'. Then please call us with your order number so we can have your order picked for you. This process allows us to hold your order ready for pick up.\n\nWe will contact you when your order is ready for collection. While we do our best to have the fastest services, during our busy and peak periods, orders may not be available for same-day pick up."
  },
  {
    "Q": "16. All About Cookies",
    "A": "Cookies are used to help customers navigate our website efficiently and perform certain functions.\n\nCookies don’t usually contain personal information or anything dangerous. Cookies cannot contain a virus and are often used by a web server as your ID or to remember what you looked at on your last visit. You get the cookie on your first visit to the site. After that, the site can read the cookie to identify a user.\n\nWhen you browse our website, the server needs to know who you are if you want to do things that require logging in or putting items in a virtual shopping cart or completing any other process that requires our site to remember information about you as you move from page to page."
  }
]

export default function FAQ() {
  return (
    <Box sx={{mt:3}}>
      {FAQs.map(qa=>{
        return <Accordion key={qa.Q} sx={{mt:0}}>
        <AccordionSummary
          expandIcon={<AiOutlineArrowUp />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{qa.Q}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {qa.A}
          </Typography>
        </AccordionDetails>
      </Accordion>
      })}

     
    </Box>
  );
}
