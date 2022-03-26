import { useFormik } from 'formik';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useState } from 'react';
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";



const validate = values => {
    const errors = {};
  
    if (!values.name) {
      errors.name = 'Requerido';
    } else if (values.name.length > 25) {
      errors.name = 'El nombre no debe superar los 25 caracteres';
    }
  
    if (!values.phone) {
      errors.phone = 'Requerido';
    } 
  
    if (!values.email) {
      errors.email = 'Requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Formato de Email Inválido';
    }
  
    return errors;
  };

export const CartCheckout =  () => {

    const [docRef, setDocRef] = useState('');
    const [error, setError] = useState('');
    const { productsIncorporated, totalPrice, clear } = useContext(CartContext);
    const [showForm, setShowForm] = useState(true);

    const formik = useFormik({
        initialValues: {
          name: '',
          phone: '',
          email: '',
        },
        validate,
        onSubmit: async (values) => {
        
            const newOrder = {
                buyer:{
                name:values.name,
                phone:values.phone,
                email:values.email,
                },
                items: productsIncorporated.map((item) => ({
                    id: item.id,
                    title: item.name,
                    price: item.price,
                    quantity: item.quantity,
                })),
                date: serverTimestamp(),
                total: totalPrice,
            }
            try{
                const data = await addDoc(collection(db, "cartOrders"), newOrder);
                setDocRef(data);
            }catch{
                setError(error);
                console.log(error);
            }finally{
                setShowForm(false);
                clear();
            }
            
        },
    });
      return (

        <div>

            {showForm ? (

            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">First Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
            ) : null}
        
            <label htmlFor="phone">Last Name</label>
            <input
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
                <div>{formik.errors.phone}</div>
            ) : null}
        
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
        
            <button type="submit">Submit</button>
            </form>
       

            ):(
                <div>
                <p>Compra realizada!</p> 
                <p>ID de seguimiento: {docRef.id}</p>

                <Link to="/tienda">
                        <Button variant="secondary">Volver a la Tienda</Button>
                </Link>
               </div>
               
            )
        
        }
        </div>
        
      );
    
   
};
  