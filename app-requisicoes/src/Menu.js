import React from "react";
import { useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';

<<<<<<< HEAD
function Menu () {
  let navigate = useNavigate();

  const items = [
    { label: 'Home', icon: 'pi pi-home',   
              command: () => { navigate("/") }},
    { label: 'Colaboradores', icon: 'pi pi-id-card', 
              command: () => { navigate("/colaborador") }},
  ];

  return (  <Menubar model={items} /> )
}

=======
function Menu() {
    let navigate = useNavigate();
    const items = [
        {
            label: 'Home', icon: 'pi pi-fw pi-home',
            command: () => { navigate("/") }
        },
        {
            label: 'Cadastros', icon: 'pi pi-fw pi-id-card',
            items: [
                {
                    label: 'Colaboradores', icon: 'pi pi-fw pi-user',
                    command: () => { navigate("/colaborador") }
                },
                {
                    label: 'Solicitantes', icon: 'pi pi-fw pi-users',
                    command: () => { navigate("/solicitante") }
                },
                {
                    label: 'Tipo de Requisições', icon: 'pi pi-fw pi-file',
                    command: () => { navigate("/tipoRequisicao") }
                },
                {
                    label: 'Requisicões', icon: 'pi pi-fw pi-briefcase',
                    command: () => { navigate("/requisicao") }
                }
            ]
        },
        {
            label: 'Sair', icon: 'pi pi-fw pi-power-off'
        }
    ];
    return (<Menubar model={items} />)
}
>>>>>>> bddcea678cc21022941ce43ecf5cf2af30331a14
export default Menu;