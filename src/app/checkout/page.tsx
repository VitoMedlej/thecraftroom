"use client"
// import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import PaymentForm from './PaymentForm';
import { useEffect, useState } from 'react';
import AddressForm from '@/Components/checkoutComponents/AddressForm';
import ReviewForm from '@/Components/checkoutComponents/ReviewForm';
import { server } from '@/Utils/Server';
import { loadState, saveState } from '@/Utils/LocalstorageFn';
import { useCartLengthContext, useDiscountContext, usePromoContext } from '@/context/Contexts';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import totalCal from '@/Utils/totalCal';



const steps = ['Shipping address', 'Review your order'];

function getStepContent(step: number,setInfo:any,handleChange:any,info:any,setActiveStep:any) {
  switch (step) {
    case 0:
      return <AddressForm setInfo={setInfo} handleChange={handleChange} info={info} />;
    // case 1:
    //   return <PaymentForm />;
    case 1:
      return <ReviewForm setActiveStep={setActiveStep} />;
    default:
      throw new Error('Unknown step');
  }
}

// const theme = createTheme();

 function Index() {
  const [activeStep, setActiveStep] = useState(0);
  const {discountedPrice, setDiscountedPrice} = useDiscountContext();
  const {promoCode, setpromoCode} = usePromoContext();
  const searchParams = useSearchParams()
  const {setCartLength} = useCartLengthContext();
 
  const p = searchParams.get('p')
 

  
  
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [info,setInfo] = useState({
    firstName:'',
    checkbox:false,
    checkbox2:false,
    lastName:'',city:'',email:'',phone:'',address1:'',address2:''  })
    const handleChange = (e: any) => {
      setInfo({
        ...info,
        [e.target.name]:e.target.value
      })
    }

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleNext = () => {
      if (info?.checkbox2 && info?.checkbox && info && info.email && info.firstName && info.lastName && info.address1 && info.phone) {
        localStorage.setItem('24j1i2cj4io-dadxzazd213',JSON.stringify({...info, name : `${info.firstName} ${info.lastName}`}))
        saveState('order-bag',info)
        setActiveStep(activeStep + 1);
      
      } 
      
    };




    const saved = activeStep === steps.length


    const saveOrder = async () => {
      const products = loadState('shping-list')
 

      const total= totalCal(products) || 0; 
      console.log('total: ', total);
      if (products && info ) {

        // saveState('order',{info,products,total})
        const rawResponse = await fetch(`${server}/api/save-order`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({order:{info,products,total,discountedPrice,promoCode: promoCode? promoCode : null}})
        });
        setpromoCode(null)
  await rawResponse.json();
  saveState('order-bag',null)
  setDiscountedPrice(0)
  setpromoCode(null)
  saveState('shping-list',null)
  setCartLength(0)

}
  }

  const handlePromoChange = async (code:string) => {
    console.log('code: ', code);
    const cartItems = loadState('shping-list')
    const total= totalCal(cartItems) || 0; 
    console.log('total: ', total);
        if (!code || `${code}`?.length < 3 || !cartItems) {
            // setErr('Please Enter a valid Code!') 
            // setLoading(false)   
            
        setDiscountedPrice(0)
        setpromoCode(null)
            return
        } 
        let order = {code,total,cartItems}
        console.log('order: ', order);
        const rawResponse = await fetch(`${server}/api/use-promo`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({order})
        });

        const content = await rawResponse.json();
        console.log('content: ', content);
        if (!content?.success) {
        setDiscountedPrice(0)
        setpromoCode(null)


            return
        }
        setpromoCode(code)

        setDiscountedPrice(Number(content?.discountedPrice))
    }
  
  useEffect(() => {
    
    if (saved) {
      saveOrder()
    }
    
  }, [saved])
  useEffect(() => {
    
    if (p && p?.length > 1 && !promoCode || !discountedPrice) {
      handlePromoChange(`${p}`)
    }
   
  }, [p])
  
  return (
  <>

  {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
  
      <Container component="main" maxWidth="sm" sx={{ mt:20, mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number has been recorded! We will message you soon, so please stay alert.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep,setInfo,handleChange,info,setActiveStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} >
                    Back
                  </Button>
                )}
                <Button
                    type='submit'
                    disabled={
                      !info?.checkbox2 || !info?.checkbox
                      || !info?.email.match(regex) || !info.email || info.phone?.length < 6 || info.email?.length < 5 || !info?.firstName || info?.firstName.length < 2 || !info.phone }
                     form="myform"
                  // variant="contained"
                  onClick={handleNext}
                  // sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </Paper>
      </Container>
    {/* </ThemeProvider> */}
  </>

  );
}

export default Index