import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import { string, object } from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  selectGrade: "",
  gender: null,
};

const StudentFormSchema = object({
  name: string()
    .required("*Full name is required")
    .min(8, "*Name must be 8 charaters long"),
  email: string().required("*Email is required").email("*Invalid email"),
  password: string()
    .required("*Password is required")
    .min(8, "*Password must be 8 characters long"),
  selectGrade: string().required("*Grade is required"),
  gender: string().required("*Select gender is required"),
});

function StudentForm() {
  const handleStudentFromData = useFormik({
    initialValues,
    validationSchema: StudentFormSchema,
    onSubmit: (values, resetAction) => {
      console.log(values);
      resetAction.resetForm();
    },
  });


  {console.log(handleStudentFromData)}

  return (
    <div>
      <div className="container">
        <h1 style={{ textAlign: "center", margin: "10px" }}>STUDENT FORM</h1>
        <div style={{ width: "50%", margin: "auto" }}>
          <Form
            style={{
              border: "1px solid grey",
              padding: "20px",
              borderRadius: "30px",
            }}
            onSubmit={handleStudentFromData.handleSubmit}
          >
            <Row className="mb-3">
              <Form.Group as={Col} xs={12}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={handleStudentFromData.values.name}
                  onChange={handleStudentFromData.handleChange}
                />

                {handleStudentFromData.touched.name &&
                  handleStudentFromData.errors.name && (
                    <p style={{ color: "red" }}>
                      {handleStudentFromData.errors.name}
                    </p>
                  )}
              </Form.Group>
              <Form.Group as={Col} xs={12}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={handleStudentFromData.values.email}
                  onChange={handleStudentFromData.handleChange}
                />
              </Form.Group>
              {handleStudentFromData.touched.email &&
                handleStudentFromData.errors.email && (
                  <p style={{ color: "red" }}>
                    {handleStudentFromData.errors.email}
                  </p>
                )}

              <Form.Group as={Col} xs={12}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={handleStudentFromData.values.password}
                  onChange={handleStudentFromData.handleChange}
                />
              </Form.Group>
              {handleStudentFromData.touched.password &&
                handleStudentFromData.errors.password && (
                  <p style={{ color: "red" }}>
                    {handleStudentFromData.errors.password}
                  </p>
                )}
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Grade Selection</Form.Label>
                <Form.Select
                  name="selectGrade"
                  value={handleStudentFromData.values.selectGrade}
                  onChange={handleStudentFromData.handleChange}
                >
                  <option>Select</option>
                  <option>Freshman</option>
                  <option>Sophomore</option>
                  <option>Junior</option>
                  <option>Senior</option>
                </Form.Select>
              </Form.Group>
              {handleStudentFromData.touched.selectGrade &&
                handleStudentFromData.errors.selectGrade && (
                  <p style={{ color: "red" }}>
                    {handleStudentFromData.errors.selectGrade}
                  </p>
                )}
              <Form.Group as={Row} className="mb-3 mt-3">
                <Form.Label>Gender</Form.Label>
                <Col
                  style={{ display: "flex" }}
                  value={handleStudentFromData.values.gender}
                  onChange={handleStudentFromData.handleChange}
                >
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="gender"
                    value="male"
                  />
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="gender"
                    value="female"
                  />
                  <Form.Check
                    type="radio"
                    label="Other"
                    name="gender"
                    value="other"
                  />
                </Col>
              </Form.Group>
              {handleStudentFromData.touched.gender &&
                handleStudentFromData.errors.gender && (
                  <p style={{ color: "red" }}>
                    {handleStudentFromData.errors.gender}
                  </p>
                )}
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default StudentForm;
