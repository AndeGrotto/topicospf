import React from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';

const RequisicaoForm = (props) => {

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setRequisicao({ ...props.requisicao, [id]: value });
  };

  return (
    <form>
      <div>
        <div className="card">
          <h5>Cadastro de Tipo de Requisicão</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="titulo">Título</label>
              <InputText id="titulo" defaultValue={props.requisicao.titulo}
                onChange={handleInputChange} />
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="descricao">Descrição</label>
              <InputText id="descricao" defaultValue={props.requisicao.descricao}
                onChange={handleInputChange} />
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="dataHoraCriada">Data e Hora Criada</label>
              <InputText type={'datetime-local'} id="dataHoraCriada" defaultValue={props.requisicao.dataHoraCriada}
                onChange={handleInputChange} />
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="status">Status</label> <br />

              <RadioButton id="status" name="status" value="Nova" defaultValue={props.requisicao.status} onChange={handleInputChange} checked={props.requisicao.status === 'Nova'} />
              <label>Nova</label><br />

              <RadioButton id="status" name="status" value="Concluída" defaultValue={props.requisicao.status} onChange={handleInputChange} checked={props.requisicao.status === 'Concluída'} />
              <label>Concluído</label><br />

              <RadioButton id="status" name="status" value="Pendente" defaultValue={props.requisicao.status} onChange={handleInputChange} checked={props.requisicao.status === 'Pendente'} />
              <label>Pendente</label><br />

              <RadioButton id="status" name="status" value="Finalizada" defaultValue={props.requisicao.status} onChange={handleInputChange} checked={props.requisicao.status === 'Finalizada'} />
              <label>Finalizada</label><br />

            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="prazoAtendimento">Prazo de Atendimento</label>
              <InputText type={'date'} id="prazoAtendimento" defaultValue={props.requisicao.prazoAtendimento}
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
export default RequisicaoForm;
