import { Formik } from "formik";
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
    createContact,
  } = useContext(ContactContext);

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

                  <Formik
                    initialValues={{
                      fullname: "",
                      photo: "",
                      mobile: "",
                      email: "",
                      job: "",
                      group: "",
                    }}
                    validationSchema={contactSchema}
                    onSubmit={(values) => {
                      createContact(values);
                    }}>

                    <form onSubmit={formik.handleSubmit}>
                      <div className="mb-2">
                        <input
                          id="fullname"
                          type="text"
                          // value={formik.values.fullname}
                          // onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}
                          {...formik.getFieldProps('fullname')}
                          className="form-control"
                          placeholder="نام و نام خانوادگی"
                        />
                        {formik.touched.fullname && formik.errors.fullname ? (
                          <p className="text-danger">{formik.errors.fullname}</p>
                        ) : null}
                      </div>
                      <div className="mb-2">
                        <input
                          id="photo"
                          type="text"
                          {...formik.getFieldProps('photo')}
                          className="form-control"
                          placeholder="آدرس تصویر"
                        />
                        {formik.touched.photo && formik.errors.photo ? (
                          <p className="text-danger">{formik.errors.photo}</p>
                        ) : null}
                      </div>
                      <div className="mb-2">
                        <input
                          type="number"
                          id="mobile"
                          {...formik.getFieldProps('mobile')}
                          className="form-control"
                          placeholder="شماره موبایل"
                        />
                        {formik.touched.mobile && formik.errors.mobile ? (
                          <p className="text-danger">{formik.errors.mobile}</p>
                        ) : null}
                      </div>
                      <div className="mb-2">
                        <input
                          id="email"
                          type="email"
                          {...formik.getFieldProps('email')}
                          className="form-control"
                          placeholder="آدرس ایمیل"
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <p className="text-danger">{formik.errors.email}</p>
                        ) : null}
                      </div>
                      <div className="mb-2">
                        <input
                          id="job"
                          type="text"
                          {...formik.getFieldProps('job')}
                          className="form-control"
                          placeholder="شغل"
                        />
                        {formik.touched.job && formik.errors.job ? (
                          <p className="text-danger">{formik.errors.job}</p>
                        ) : null}
                      </div>
                      <div className="mb-2">
                        <select
                          id="group"
                          {...formik.getFieldProps('group')}
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
                  </Formik>
                </div>
              </div>
            </div>
          </section>
        </>
      )
      }
    </>
  );
};

export default AddContact;
