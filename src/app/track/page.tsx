"use client"
import Btn from '@/Components/Btn/Btn';
import React, { useState } from 'react'

const Page = () => {
    const [orderNumber, setOrderNumber] = useState('0')
    console.log('orderNumber: ', orderNumber);
    async function fetchData() {
        const url = "https://manager.takkelb.com/shopintegration/show";
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJUYWtrZTI1NiJ9.eyJ1c2VyX2lkIjoiNDI1In0.9b1ZpGJlfW_w0F9HyiQWAtXVNKgkwQBGOYCR_VdjfEQ"; // replace with your actual token
        const formData = new FormData();
        formData.append('order_number', orderNumber);
        try {
          const response = await fetch(url, {
            method: "POST", // or 'POST'
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
              'token' : token // assuming the token is a Bearer token
            },
            body: formData
          });
      
          console.log('response: ', response);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      }
      
      
      
  
    return (
    <div>
        <input type="text" value={orderNumber} onChange={(e : any)=>setOrderNumber(e?.target?.value)} />
        <Btn onClick={()=>fetchData()}>
                try fetch
        </Btn>
    </div>
  )
}

export default Page