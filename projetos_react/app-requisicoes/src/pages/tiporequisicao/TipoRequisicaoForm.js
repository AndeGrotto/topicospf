import React from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
//import { RadioButton } from 'primereact/radiobutton';

const TipoRequisicaoForm = (props) => {

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setTipoRequisicao({ ...props.tipoRequisicao, [id]: value });
  };

  return (
    <form>
      <div>
        <div className="card">
          <h5>Cadastro de Tipo de Requisicão</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="descricao">Descrição</label>
              <InputText id="descricao" defaultValue={props.tipoRequisicao.descricao}
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
export default TipoRequisicaoForm;
