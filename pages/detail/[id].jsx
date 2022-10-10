import { useRouter } from "next/router";
import Nav from "../../components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from 'next/image'

const Pet = () => {
  const router = useRouter();
  const { id } = router.query;

  const [pet, setPet] = useState([]);

  useEffect(() => {
    axios.get("/api/" + id).then(function (res) {
      setPet(res.data);
    });
  }, [id]);

  return (
    <div className="container detail">
      <Nav />

      <h2 className="title"> {pet.name} </h2>
      {pet.img && <Image src={pet.img} alt={pet.name} width={600} height={400} objectFit='contain'/>}
      <ul>
        <li>Lifespan: {pet.lifespan}</li>
        <li>Size: {pet.size}</li>
        <li>Daily sleep: {pet.sleep}</li>
      </ul>

      <p>{pet.description}</p>

    </div>
  );
};

export default Pet;
