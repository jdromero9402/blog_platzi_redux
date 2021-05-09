import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      usuarios: [
        {
          nombre: 'Jesus',
          correo: 'jdrom@asd.com',
          enlace: 'jd.com',
        },
        {
          nombre: 'Platzi',
          correo: 'platzi@platzi.com',
          enlace: 'platzi.com',
        }
      ]
    }
  }

  ponerFilas = () => (
    this.state.usuarios.map((usuario) => (
      <tr>
        <td>
          { usuario.nombre }
        </td>
        <td>
          { usuario.correo }
        </td>
        <td>
          { usuario.enlace }
        </td>
      </tr>
    ))
  ) ;

  render(){
    return(
    <div className="margen">
    <table className="tabla">
      <thead>
        <tr>
          <th>
            Nombre
          </th>
          <th>
            Correo
          </th>
          <th>
            Enlace
          </th>
        </tr>
      </thead>
      { this.ponerFilas() }
      <tbody>
      </tbody>
    </table>
    </div>);
  }
}

export default App;