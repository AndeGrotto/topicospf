import React from "react";
import { useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';

function Menu() {
  let navigate = useNavigate();

  const items = [
    {
      label: 'Home', icon: 'pi pi-home',
      command: () => { navigate("/") }
    },

    {
      label: 'Cadastros', icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'Colaboradores', icon: 'pi pi-user',
          command: () => { navigate("/colaborador") }
        },
        {
          label: 'Solicitantes', icon: 'pi pi-id-card',
          command: () => { navigate("/solicitante") }
        },
        {
          label: 'Atividades', icon: 'pi pi-book',
          command: () => { navigate("/atividade") }
        },
        {
          label: 'Tipo de Requisições', icon: 'pi pi-file-pdf',
          command: () => { navigate("/tipoRequisicao") }
        },
        {
          label: 'Andamentos', icon: 'pi pi-chart-line',
          command: () => { navigate("/andamento") }
        },
        {
          label: 'Requisições', icon: 'pi pi-briefcase',
          command: () => { navigate("/requisicao") }
        }
      ]
    },
    
    {
      label: 'Sair', icon: 'pi pi-sign-out',
      command: () => {
        sessionStorage.setItem('token', '');
      },
      url: '/'
    },
  ];

  return (<Menubar model={items} />)
}

export default Menu;