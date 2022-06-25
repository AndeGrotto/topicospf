import React, { useState, useRef, useEffect } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { useForm } from "react-hook-form";

const AtividadeForm = (props) => {

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setAtividade({ ...props.atividade, [id]: value });
  };

  const [colaborador, setColaborador] = useState([]);
  const [requisicao, setRequisicao] = useState([]);

  const { handleSubmit } = useForm();
  const onSubmit = data => {
    props.atividade.colaborador = colaborador._id;
    props.atividade.requisicao = requisicao._id;
    props.salvar();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="card">
          <h5>Cadastro de Atividades</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="titulo">Título</label>
              <InputText id="titulo" defaultValue={props.atividade.titulo}
                onChange={handleInputChange} />
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="descricao">Descrição</label>
              <InputText id="descricao" defaultValue={props.atividade.descricao}
                onChange={handleInputChange} />
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="prazo">Prazo</label>
              <InputText type={'date'} id="prazo" defaultValue={props.atividade.prazo}
                onChange={handleInputChange} />
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="agendaInicio">Agenda de Início</label>
              <InputText type={'date'} id="agendaInicio" defaultValue={props.atividade.agendaInicio}
                onChange={handleInputChange} />
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="dataHoraTermino">Data e Hora do Término</label>
              <InputText type={'datetime-local'} id="dataHoraTermino" defaultValue={props.atividade.dataHoraTermino}
                onChange={handleInputChange} />
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="status">Status</label> <br />

              <RadioButton id="status" name="status" value="Nova" defaultValue={props.atividade.status} onChange={handleInputChange} checked={props.atividade.status === 'Nova'} />
              <label>Nova</label><br />

              <RadioButton id="status" name="status" value="Concluída" defaultValue={props.atividade.status} onChange={handleInputChange} checked={props.atividade.status === 'Concluída'} />
              <label>Concluído</label><br />

              <RadioButton id="status" name="status" value="Pendente" defaultValue={props.atividade.status} onChange={handleInputChange} checked={props.atividade.status === 'Pendente'} />
              <label>Pendente</label><br />

              <RadioButton id="status" name="status" value="Finalizada" defaultValue={props.atividade.status} onChange={handleInputChange} checked={props.atividade.status === 'Finalizada'} />
              <label>Finalizada</label><br />

            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="Colaborador">Colaborador</label>
              <Dropdown optionLabel="nome" value={colaborador} options={props.colaboradores} onChange={(e) => setColaborador(e.value)} placeholder="Selecione o colaborador" />
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="Requisicao">Requisição</label>
              <Dropdown optionLabel="titulo" value={requisicao} options={props.requisicoes} onChange={(e) => setRequisicao(e.value)} placeholder="Selecione a requisição" />
            </div>





          </div>
        </div>
      </div>

      <div>
        <Button label="Salvar" icon="pi pi-save"
          className="p-button-secondary p-button-text" />
        <Button label="Cancelar" icon="pi pi-times-circle" onClick={props.cancelar}
          className="p-button-secondary p-button-text" />
      </div>

    </form>
  );
};
export default AtividadeForm;
