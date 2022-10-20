import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProfilEdit() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <>
      <div className="p-10">
        <p className="font-bold">Nama Lengkap</p>
        <input
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[450px] h-[50px] rounded-md"
          type="text"
          placeholder="Masukkan Nama"
        />
        <br />
        <br />
        <p className="font-bold">Alamat</p>
        <input
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[450px] h-[50px] rounded-md"
          type="text"
          placeholder="Masukkan Alamat"
        />
        <br />
        <br />
        <p className="font-bold">Nomer Telephone</p>
        <input
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-SocialUp placeholder-Grey w-[450px] h-[50px] rounded-md"
          type="tel"
          placeholder="Masukkan Telephone"
          pattern="[0-9]{12}"
        />
        <br />
        <br />
        <div className="">
          <button
            type="submit"
            className="mt-1 px-3 py-2 bg-white border shadow-sm text-black text-center w-[200px] h-[50px] rounded-md"
          >
            {""}
            <Link to="/profile">Cancel</Link>
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            type="submit"
            className="mt-1 px-3 py-2 gradasi-button border shadow-sm text-white text-center w-[200px] h-[50px] rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfilEdit;
