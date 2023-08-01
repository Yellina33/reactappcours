import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const FormUser = () => {

    const initialValues = {
        gender: "",
        firstName: "",
        lastName: "",
        birthDay: "",
        address: {
            number: "",
            road: "",
            city: "",
            zipCode: ""
        },
        phone: "",
        email: "",

    };

    const schemaValidation = yup.object().shape({
        gender: yup.string().required("Field required"),
        firstName: yup.string().required("Field required").min(3, "Field too short").max(40, "Field to big"),
        lastName: yup.string().required("Field required"),
        address: yup.object().shape( {
        birthDay: yup.date().required("Field required").max(new Date()),
        number: yup.number().required("Field required"),
        road: yup.string().required("Field required"),
        city: yup.string().required("Field required"),
        zipCode: yup
        .string()
        .required("Field required")
        .matches(/\b\d{5}\b/g, "Wrong format"), 
        }),
        phone: yup.string().required("Field required").length(10, "Wrong format"),
        email: yup.string().required("Field required").email("Wrong format").max(50, "Max 50"),

    });

    const submit = (values, {resetForm}) => {
        // alert (json to string values )
        alert(JSON.stringgify(values, null, 2));
        //appel from backend simulation et reset apres 2 secondes
        setTimeout 
          
    };

    
    
    return (
        <Formik
            initialValues={initialValues}
            onSumbit={submit}
            validationSchema={schemaValidation}
        >
        { ({ isSubmitting }) => (

<form className="bg-light opacity-75 rounded-3 shadow p-5 text-dark w-auto">
            <h4>Informations</h4>

  

        <div className="mt-1">

            <div className="form-check form-check-inline">
            <label className="form-check-label">
                <Field
                className="form-check-input"
                type="radio"
                name="gender"
                value="mr"
             />
             Mr.
            </label>
            </div>
            <div className="form-check form-check-inline">
                <label className="form-check-label">
                <Field
                className="form-check-input"
                type="radio"
                name="gender"
                value="Ms"
             />
               Ms.
            </label>
            </div>
            <div className="form-check form-check-inline">
            
            <label className="form-check-label">
                <Field
                className="form-check-input"
                type="radio"
                name="gender"
                value="no-communicated"
             />
                N/C
            </label>
            </div>
            
       </div>
       <ErrorMessage name="gender" />

       <div className="d-flex gap-2 mb-3">
        
            <div className="col-6 d-flex flex-column gap-3 position-relative">

                <label className="form-check-label fw-bold text-primary">User</label>
                <Field type="text" name="firstName" placeholder="First name..." className="form-control"/>
                <ErrorMessage name="firstName" component="small" className="position-absolute top-100 text-danger" />
                <Field type="text" name="lastName" placeholder="Last name..." className="form-control"/>
                <ErrorMessage name="lastName" component="small" className="position-absolute top-100 text-danger" />
                <label htmlFor="birthDay">Birthday</label>
                <Field type="date" name="birthDay" placeholder="yyyy-mm-dd" className="form-control"/>
                <ErrorMessage name="birthDay" component="small" className="position-absolute top-100 text-danger" />
            </div>

            <div className="col-6 d-flex flex-column gap-3">
                <label className="form-check-label fw-bold text-primary">Address</label>
                <Field type="string" name="address.number" placeholder="Number..." className="form-control"/>
                <Field type="text" name="address.road" placeholder="Road..." className="form-control"/>
                <Field type="text" name="address.city" placeholder="City" className="form-control"/>
                <Field type="string" name="address.zipCode" placeholder="Zipcode" className="form-control"/>
                <ErrorMessage
                style={{ position: "absolute" }}
                name="address.zipCode"
                component="small"
                className="text-danger"
                />
            </div>
    
</div>

            <div className=" d-flex flex-column justify-content-start mb-4">
                <div>
                <label htmlFor="contact" className="">Contact</label>
                </div>
                
                <div className="d-flex flex-row gap-2 position-relative">
                <Field type="phone" name="phone" placeholder="Phone" className="col-6" />
                <ErrorMessage name="phone" component="small" className="position-absolute top-100 text-danger" />
                <Field type="email" name="email" placeholder="Email" className="col-6" />
                <ErrorMessage name="email" component="small" className="position-absolute top-100 start-50 text-danger ps-2" />
                </div>
            </div>
        

     <button type="submit" className="btn btn-warning rounded-2 w-100 border-0 mx-auto" disabled={isSubmitting} >
     Submit
     </button>
          

        </form>
      )}

        </Formik>


    );

};

export default FormUser;