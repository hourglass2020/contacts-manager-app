import React, { useEffect, useRef, useState } from "react";

function MyForm() {
    const [data, setData] = useState({ name: "", email: "" });
    const inputsRef = useRef([]);

    const addRef = element => {
        if (element && !inputsRef.current.includes(element)) {
            inputsRef.current.push(element);
        }
    }

    useEffect(() => {
        console.log(inputsRef);
    }, []);


    const handleSubmit = e => {
        e.preventDefault();
        console.log(`Name: ${inputsRef.current[0].value}, Email: ${inputsRef.current[1].value}`)
    }


    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.name === "name") {
            setData({
                name: e.target.value,
                email: data.name,
            });
        } else if (e.target.name === "email") {
            setData({
                email: e.target.value,
                name: data.name,
            });
        }
    };

    return (
        <>
            <div style={{ padding: "2rem", backgroundColor: "antiquewhite" }}>
                <h5>UnControlled</h5>
                <form onSubmit={handleSubmit} className="w-25 d-flex flex-column align-self-center">
                    <input
                        className="form-form-control"
                        type="text"
                        id="name"
                        name="name"
                        ref={addRef}
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        ref={addRef}
                    />
                    <button>Submit</button>
                </form>
                <div>
                    <p>Name: {data.name}</p>
                    <p>Email: {data.email}</p>
                </div>
            </div>
            <hr className="text-danger" />
            <div style={{ padding: "2rem", backgroundColor: "antiquewhite" }}>
                <h5>Controlled</h5>
                <form className="w-25 d-flex flex-column align-self-center">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        value={data.name}
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                    />
                    <button>Submit</button>
                </form>
                <div>
                    <p>Name: {data.name}</p>
                    <p>Email: {data.email}</p>
                </div>
            </div>
        </>
    );
}

export default MyForm;
