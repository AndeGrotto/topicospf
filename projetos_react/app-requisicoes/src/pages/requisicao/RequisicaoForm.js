<<<<<<< HEAD
import React, { useState, useRef, useEffect} from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { useForm } from "react-hook-form";
=======
import React from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
>>>>>>> 938c7aa327326b3cd18c898ab61b49e676e08a34

const RequisicaoForm = (props) => {

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setRequisicao({ ...props.requisicao, [id]: value });
  };

<<<<<<< HEAD
  const [solicitante, setSolicitante] = useState([]);
  const [tipoRequisicao, setTipoRequisicao] = useState([]);

  const {handleSubmit} = useForm();
  const onSubmit = data => {
    props.requisicao.solicitante = solicitante._id;
    props.requisicao.tipoRequisicao = tipoRequisicao._id;
    props.salvar(); 
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="card">
          <h5>Cadastro de Requisicão</h5>
=======
  return (
    <form>
      <div>
        <div className="card">
          <h5>Cadastro de Tipo de Requisicão</h5>
>>>>>>> 938c7aa327326b3cd18c898ab61b49e676e08a34
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
<<<<<<< HEAD
=======

>>>>>>> 938c7aa327326b3cd18c898ab61b49e676e08a34
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="prazoAtendimento">Prazo de Atendimento</label>
              <InputText type={'date'} id="prazoAtendimento" defaultValue={props.requisicao.prazoAtendimento}
                onChange={handleInputChange} />
            </div>

<<<<<<< HEAD
            <div className="field col-12 md:col-4">
              <label htmlFor="Solicitante">Solicitante</label>
              <Dropdown optionLabel="nome" value={solicitante} options={props.solicitantes} onChange={(e) => setSolicitante(e.value)} placeholder="Selecione o colaborador" />
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="TipoRequisicao">Tipo de Requisição</label>
                <Dropdown optionLabel="descricao" value={tipoRequisicao} options={props.tipoRequisicoes} onChange={(e) => setTipoRequisicao(e.value)} placeholder="Selecione o tipo da requisição"/>
            </div>

=======
>>>>>>> 938c7aa327326b3cd18c898ab61b49e676e08a34
          </div>
        </div>
      </div>

      <div>
<<<<<<< HEAD
        <Button label="Salvar" icon="pi pi-save"
=======
        <Button label="Salvar" icon="pi pi-save" onClick={props.salvar}
>>>>>>> 938c7aa327326b3cd18c898ab61b49e676e08a34
          className="p-button-secondary p-button-text" />
        <Button label="Cancelar" icon="pi pi-times-circle" onClick={props.cancelar}
          className="p-button-secondary p-button-text" />
      </div>

    </form>
  );
};
export default RequisicaoForm;
