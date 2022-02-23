import React, { Component } from "react";
import axios from "axios";
import '../../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";


const Index = () => {
    const [pizza, setState] = useState([]);
    const [selectP, setSelectP] = useState();
    const [selectPA, setSelectPA] = useState();
    const [selectN, setSelectN] = useState();
    const [selectM, setSelectM] = useState();

    useEffect(() => {
        axios
            .get("http://localhost:3004/menu")
            .then((response) => {
                console.log(response.data)
                setState(response.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, []);
    return (
        <section>
            <div className="row">
                {
                    pizza.map(pizza => {
                        if (pizza.kategori === "pizza") {
                            return (
                                <div key={pizza.id} className="col-md-4 mb-3">
                                    <div className=" h-100">
                                        <img src={`/img/pizza/${pizza.gambar}`} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="title">{pizza.kategori}</p>
                                            <select value={selectP} onChange={e => setSelectP(e.target.value)} className="bahasa mb-3">
                                                <option value="">select variant</option>
                                                <option value={`Rp. ${pizza.varian[0].harga}`}>{pizza.varian[0].nama}</option>
                                                <option value={`Rp. ${pizza.varian[1].harga}`}>{pizza.varian[1].nama}</option>
                                                <option value={`Rp. ${pizza.varian[2].harga}`}>{pizza.varian[2].nama}</option>
                                            </select>
                                            <input value={selectP} id="harga" type="text" aria-label="First name" className="form-control"></input>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else if (pizza.kategori === "pasta") {
                            return (
                                <div key={pizza.id} className="col-md-4 mb-3">
                                    <div className=" h-100">
                                        <img src={`/img/pizza/${pizza.gambar}`} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="title">{pizza.kategori}</p>
                                            <select value={selectPA} onChange={e => setSelectPA(e.target.value)} className="bahasa mb-3" id="pizza" >
                                                <option value="">select variant</option>
                                                <option value={`Rp. ${pizza.varian[0].harga}`}>{pizza.varian[0].nama}</option>
                                                <option value={`Rp. ${pizza.varian[1].harga}`}>{pizza.varian[1].nama}</option>
                                                <option value={`Rp. ${pizza.varian[2].harga}`}>{pizza.varian[2].nama}</option>
                                            </select>
                                            <input value={selectPA} id="harga" type="text" aria-label="First name" className="form-control"></input>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else if (pizza.kategori === "nasi") {
                            return (
                                <div key={pizza.id} className="col-md-4 mb-3">
                                    <div className=" h-100">
                                        <img src={`/img/pizza/${pizza.gambar}`} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="title">{pizza.kategori}</p>
                                            <select value={selectN} onChange={e => setSelectN(e.target.value)} className="bahasa mb-3" id="pizza" >
                                                <option value="">select variant</option>
                                                <option value={`Rp. ${pizza.varian[0].harga}`}>{pizza.varian[0].nama}</option>
                                                <option value={`Rp. ${pizza.varian[1].harga}`}>{pizza.varian[1].nama}</option>
                                                <option value={`Rp. ${pizza.varian[2].harga}`}>{pizza.varian[2].nama}</option>
                                            </select>
                                            <input value={selectN} id="harga" type="text" aria-label="First name" className="form-control"></input>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={pizza.id} className="col-md-4 mb-3">
                                    <div className=" h-100">
                                        <img src={`/img/pizza/${pizza.gambar}`} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="title">{pizza.kategori}</p>
                                            <select value={selectM} onChange={e => setSelectM(e.target.value)} className="bahasa mb-3" id="pizza" >
                                                <option value="">select variant</option>
                                                <option value={`Rp. ${pizza.varian[0].harga}`}>{pizza.varian[0].nama}</option>
                                                <option value={`Rp. ${pizza.varian[1].harga}`}>{pizza.varian[1].nama}</option>
                                                <option value={`Rp. ${pizza.varian[2].harga}`}>{pizza.varian[2].nama}</option>
                                                <option value={`Rp. ${pizza.varian[3].harga}`}>{pizza.varian[2].nama}</option>
                                                <option value={`Rp. ${pizza.varian[4].harga}`}>{pizza.varian[2].nama}</option>
                                            </select>
                                            <input value={selectM} id="harga" type="text" aria-label="First name" className="form-control"></input>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </section>
    )
}

export default Index