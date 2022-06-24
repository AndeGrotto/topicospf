import React from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
//import { RadioButton } from 'primereact/radiobutton';

const SolicitanteForm = (props) => {

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setSolicitante({ ...props.solicitante, [id]: value });
  };

  return (
    <form>
      <div>
        <div className="card">
          <h5>Cadastro de Solicitantes</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="nome">Nome</label>
              <InputText id="nome" defaultValue={props.solicitante.nome}
                onChange={handleInputChange} />
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="email">Email</label>
              <InputText id="email" defaultValue={props.solicitante.email}
                onChange={handleInputChange} />
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="senha">Senha</label>
              <InputText type={'password'} id="senha" defaultValue={props.solicitante.senha}
                onChange={handleInputChange} />
            </div>

          </div>
        </div>
      </div>

      <div>
        <Button label="Salvar" icon="pi pi-save" onClick={props.salvar}
          className="p-button-secondary p-button-text" />
        <Button label="Cancelar" icon="pi pi-times-circle" onClick={props.cancelar}
          className="p-button-secondary p-button-text" />
      </div>

    </form>
  );
};
export default SolicitanteForm;
