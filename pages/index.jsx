import Nav from "../components/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'

export default function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("/api").then(function (res) {
      setPets(res.data);
    });
  }, []);

  return (
    <div className="container">
      <Nav />

      <h2 className="title">Top pets</h2>

      <ul className="gallery">
        {pets.map((pet) => {
          return (
            <li key={pet.id}>
              {" "}
              Top {pet.id} : {pet.name} -{" "}
              <Link href={"detail/" + pet.id}>Info</Link>
              <br /> <Image src={pet.img} alt={pet.name} width={600} height={400} objectFit='contain'/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
