//import React , {useEffect , useState} from "react";
import React , {useState} from "react";
import Stage from './Stage';

export default function Jsx() {
  // init js

  //1
  const name = "jane Doe";
  const age = 25;
  const element = <h1> Hello world</h1>;

  //2
  const etudiant = {
    nom: "Mohamed Aziz",
    prenom: "Ben Ismail",
    age: 90,
  };

  //3
  function getEtudiant(etudiant) {
    return etudiant.nom + "" + etudiant.prenom + "" + etudiant.age;
  }

  //4
  const listeEtudiant = [
    { nom: "dorra", prenom: "labidi", age: 55, objectID: 0 },
    { nom: "aziz", prenom: "Ben Ismail", age: 24, objectID: 1 },
    { nom: "thoraya", prenom: "dhawedi", age: 55, objectID: 2 },
    { nom: "islem", prenom: "slema", age: 55, objectID: 3 },
  ];

  const codeCss = {
    color : "#2ecc71",
    fontSize:"26px"
  }

  //const count = 0
  const [count,setCount] = useState(0)
  const [nom,setNom] = useState("a")

// useEffect(() => {
//      // console.log(isOnline)
//       console.log('cette fonction va etre execute la premiere fois et a chaque modification de la variable count ');
//       console.log('car le deuxieme argument est count ');
//       return () => {
//       console. log('cette partie va etre execute pour nettoyer et lors de loperation unmounting ');
//       }
//       }, [nom])
      
    //   useEffect(() => {
    //   console.log('cette fonction va etre execute une fois seulement ');
    //   console.log('car le deuxieme argument est un tableau vide ');
    //   return () => {
    //   console. log(' cette partie va etre execute seulement lors de loperation unmounting ')
    //   }
      
    //   }, [])
      
    //   useEffect(() => {
    //   console.log('cette fonction va etre execute chaque re-render');
    //   console.log('car pas de deuxieme argument passer');
    //   });
  return (
    <div>
      {/* 1 */}
      <div style={codeCss}>{name}</div>
      <div className="codeCss">{name}</div>
      <br />
      {age}
      <br />
      {element}

      {/* 2 */}
      {etudiant.nom}
      <br />

      {/* 3 */}
      {getEtudiant(etudiant)}

      {/* 4 */}
      <hr />
      {listeEtudiant.map(function (item) {
        return (
          <div key={item.objectID}>
            {item.objectID}
            {item.nom}
            {item.prenom}
            {item.age}
          </div>
        );
      })}

      <table border={2}>
        <thead>
          <tr>
            <td>Nom</td>
            <td>Prenom</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {listeEtudiant.map(function (item) {
            return (
              <tr key={item.objectID}>
                <td> {item.nom}</td>
                <td> {item.prenom}</td>
                <td>{item.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br/>
      <Stage name="9antra"/>
      <br/>
      {count}
      <br/>
      <button onClick={()=>{ setCount(count + 1)}} >+</button>
      <button onClick={()=>{ setCount(count - 1)}} >-</button>
      <br/>
      {nom}
      <br></br>
      <input type="text" onChange={(e)=>{setNom(e.target.value)}}/>
    </div>
  );
}
