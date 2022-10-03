import React, { useState, useRef, useEffect} from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { useForm } from "react-hook-form";

const AndamentoForm = (props) => {

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setAndamento({ ...props.andamento, [id]: value });
  };

<<<<<<< HEAD
=======
  const handleInputChangeangeAtividade = (event) => {
    const { id, value } = event.target;
    props.setAtividades({ ...props.atividades, [id]: value });
  };

  const handleInputChangeColaborador = (event) => {
    const { id, value } = event.target;
    props.setColaboradores({ ...props.colaboradores, [id]: value });
  };

>>>>>>> 938c7aa327326b3cd18c898ab61b49e676e08a34
  const [colaborador, setColaborador] = useState([]);
  const [atividade, setAtividade] = useState([]);

  const {handleSubmit} = useForm();
  const onSubmit = data => {
<<<<<<< HEAD
    props.andamento.colaborador = colaborador._id;
    props.andamento.atividade = atividade._id;
=======
    props.andamento.Colaborador = colaborador._id;
    props.andamento.Atividade = atividade._id;
>>>>>>> 938c7aa327326b3cd18c898ab61b49e676e08a34
    props.salvar(); 
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="card">
          <h5>Cadastro de Andamentos</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="dataHora">Data e Hora</label>
              <InputText type={'datetime-local'} id="dataHora" defaultValue={props.andamento.dataHora}
                onChange={handleInputChange} />
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="titulo">Título</label>
              <InputText id="titulo" defaultValue={props.andamento.titulo}
                onChange={handleInputChange} />
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="descricao">Descrição</label>
              <InputText id="descricao" defaultValue={props.andamento.descricao}
                onChange={handleInputChange} />
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="Colaborador">Colaborador</label>
                <Dropdown optionLabel="nome" value={colaborador} options={props.colaboradores} onChange={(e) => setColaborador(e.value)} placeholder="Selecione o colaborador"/>
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="Atividade">Atividade</label>
                <Dropdown optionLabel="titulo" value={atividade} options={props.atividades} onChange={(e) => setAtividade(e.value)} placeholder="Selecione a atividade"/>
            </div>

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
export default AndamentoForm;
