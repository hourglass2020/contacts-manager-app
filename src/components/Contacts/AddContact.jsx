import { useFormik } from "formik";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { Spinner } from "../";
import { COMMENT, GREEN, PURPLE } from "../../helpers/colors";
import { contactSchema } from "../../validations/contactValidation";
import { ContactContext } from "./../../context/contactContext";

const AddContact = () => {
  const {
    loading,
    contact,
    onContactChange: setContactInfo,
    groups,
    // errors,
    // createContact: createContactForm,
    createContact,
  } = useContext(ContactContext);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      photo: "",
      mobile: "",
      email: "",
      job: "",
      group: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      createContact(values);
    },
  });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="p-3">
            <img
              src={require("../../assets/man-taking-note.png")}
              height="400px"
              style={{
                position: "absolute",
                zIndex: "-1",
                top: "130px",
                left: "100px",
                opacity: "50%",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  <p
                    className="h4 fw-bold text-center"
                    style={{ color: GREEN }}
                  >
                    ساخت مخاطب جدید
                  </p>
                </div>
              </div>
              <hr style={{ backgroundColor: GREEN }} />
              <div className="row mt-5">
                <div className="col-md-4">
                  {/* {
                    errors?.map((error, index) => (
                      <p className="alert alert-danger" dir="ltr" key={index}>{error.message}</p>
                    ))
                  } */}
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mb-2">
                      <input
                        name="fullname"
                        type="text"
                        id="fullname"
                        // value={contact.fullname}
                        // onChange={setContactInfo}
                        value={formik.values.fullname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                        placeholder="نام و نام خانوادگی"
                      //required={true}
                      />
                      {formik.touched.fullname && formik.errors.fullname ? (
                        <p className="text-danger">{formik.errors.fullname}</p>
                      ) : null}
                    </div>
                    <div className="mb-2">
                      <input
                        name="photo"
                        type="text"
                        id="photo"
                        // value={contact.photo}
                        // onChange={setContactInfo}
                        value={formik.values.photo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        className="form-control"
                        //required={true}
                        placeholder="آدرس تصویر"
                      />
                      {formik.touched.photo && formik.errors.photo ? (
                        <p className="text-danger">{formik.errors.photo}</p>
                      ) : null}
                    </div>
                    <div className="mb-2">
                      <input
                        name="mobile"
                        type="number"
                        id="mobile"
                        // value={contact.mobile}
                        // onChange={setContactInfo}
                        value={formik.values.mobile}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        className="form-control"
                        //required={true}
                        placeholder="شماره موبایل"
                      />
                      {formik.touched.mobile && formik.errors.mobile ? (
                        <p className="text-danger">{formik.errors.mobile}</p>
                      ) : null}
                    </div>
                    <div className="mb-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        // value={contact.email}
                        // onChange={setContactInfo}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        className="form-control"
                        //required={true}
                        placeholder="آدرس ایمیل"
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <p className="text-danger">{formik.errors.email}</p>
                      ) : null}
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="job"
                        id="job"
                        // value={contact.job}
                        // onChange={setContactInfo}
                        value={formik.values.job}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        className="form-control"
                        //required={true}
                        placeholder="شغل"
                      />
                      {formik.touched.job && formik.errors.job ? (
                        <p className="text-danger">{formik.errors.job}</p>
                      ) : null}
                    </div>
                    <div className="mb-2">
                      <select
                        id="group"
                        name="group"
                        // value={contact.group}
                        // onChange={setContactInfo}
                        value={formik.values.group}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        //required={true}
                        className="form-control"
                      >
                        <option value="">انتخاب گروه</option>
                        {groups.length > 0 &&
                          groups.map((group) => (
                            <option key={group.id} value={group.id}>
                              {group.name}
                            </option>
                          ))}
                      </select>
                      {formik.touched.group && formik.errors.group ? (
                        <p className="text-danger">{formik.errors.group}</p>
                      ) : null}
                    </div>
                    <div className="mx-2">
                      <input
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: PURPLE }}
                        value="ساخت مخاطب"
                      />
                      <Link
                        to={"/contacts"}
                        className="btn mx-2"
                        style={{ backgroundColor: COMMENT }}
                      >
                        انصراف
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AddContact;
