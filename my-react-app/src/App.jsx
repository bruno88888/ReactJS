function App(){
  return (
  <div>
  <h1>5A EVND</h1>
    <h2>Profesor</h2>
    <h3>M.T.I Ricardo Luna Santos</h3>
    <h3>Alumnos</h3>
    <h4>Erik</h4>
    <h4>Ema</h4>
    <h4>Joa</h4>
    <h4>Bruno</h4>
    <UserComponent />
    <ProfileComponent/>
    <FeedComponent/>
    </div>
  )
}

function UserComponent(){
  const nombre = 'Bruno';
  const apellidos = 'Mendez';
  const nombrecompleto =<h2>El nombre es {nombre} y su apellido es {apellidos}</h2>
  return <h1>User Component {nombrecompleto}</h1>
}

function ProfileComponent(){
  const users= [
    { id: 1, name:'Bruno', role:'Web Developer'},
    { id: 2, name:'Joa', role:'Web Developer'},
    { id: 3, name:'Ema', role:'Web Developer'},
  ]
  return (
    <>
    <p>Lista de usuarios del sistema</p>
    <ul>
      {
        users.map(function(user, index){
          return(
            <li key={index}>{user.name} es un {user.role}</li>
          )
        })
      }
    </ul>
    </>
  )
}

function FeedComponent(){
  const materiales= [
    { id: 1, name:'Cemento'},
    { id: 2, name:'Arcilla'},
    { id: 3, name:'Grava'},
    { id: 4, name:'arena'},
    { id: 5, name:'Tierra'},

  ]
  return(
    <>
    <p>Lista de Materiales</p>
    <ul>
      {materiales.map(function(material, index){
        return (
          <li key={index}>{material.name}</li>
        )
      })
      
    }
    </ul> 
    </>
  )
}

export default App
