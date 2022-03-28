import { useFormik } from "formik";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useState } from "react";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Requerido";
  } else if (values.name.length > 25) {
    errors.name = "El nombre no debe superar los 25 caracteres";
  }

  if (!values.phone) {
    errors.phone = "Requerido";
  }

  if (!values.email) {
    errors.email = "Requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Formato de Email Inválido";
  }

  return errors;
};

export const CartCheckout = () => {
  const [docRef, setDocRef] = useState("");
  const [error, setError] = useState("");
  const { productsIncorporated, totalPrice, clear } = useContext(CartContext);
  const [showForm, setShowForm] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validate,
    onSubmit: async (values) => {
      const newOrder = {
        buyer: {
          name: values.name,
          phone: values.phone,
          email: values.email,
        },
        items: productsIncorporated.map((item) => ({
          id: item.id,
          title: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        date: serverTimestamp(),
        total: totalPrice,
      };
      try {
        const data = await addDoc(collection(db, "cartOrders"), newOrder);
        setDocRef(data);
      } catch {
        setError(error);
        console.log(error);
      } finally {
        setShowForm(false);
        clear();
      }
    },
  });
  return (
    <div>
      {showForm ? (
        

        <div class="row d-flex justify-content-center">
          <h2 className="m-2">Ingresa tus datos para finalizar con tu pedido!</h2>
          <div class="col-4">
        <Form
          onSubmit={formik.handleSubmit}
          className="border rounded bg-light m-3"
        >
          <div class="row ">
            <Form.Group className="m-3">
              <div class="col-10">

                <Form.Label>Nombre y Apellido</Form.Label>
              
                <Form.Control
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Ingresa tu nombre y apellido"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                </div>
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-danger m-2">{formik.errors.name}</div>
                ) : null}
            
              
            </Form.Group>
          </div>

          <div class="row">
            <Form.Group className="m-3">
              <div class="col-10">
                <Form.Label>Celular</Form.Label>
             
                <Form.Control
                  id="phone"
                  name="phone"
                  type="tel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  placeholder="11-3333-4444"
                  pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
                />
              </div>
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-danger m-2">{formik.errors.phone}</div>
              ) : null}
            </Form.Group>
          </div>

          <div class="row">
            <Form.Group className="m-3">
          
              <div class="col-10">
                <Form.Label>Email</Form.Label>
              </div>

              <div class="col-10 m-0">
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="ejemplo@gmail.com"
                />
              </div>
     
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger m-2">{formik.errors.email}</div>
              ) : null}
            </Form.Group>
          </div>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
        </div>
        </div>

      ) : (
        <div>
          <p>Compra realizada!</p>
          <p>ID de seguimiento: {docRef.id}</p>

          <Link to="/tienda">
            <Button variant="secondary">Volver a la Tienda</Button>
          </Link>
        </div>
      )}
    </div>
  );
};
