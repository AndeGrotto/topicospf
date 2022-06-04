<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> bddcea678cc21022941ce43ecf5cf2af30331a14
import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";

const ColaboradorForm = (props) => {
  
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    props.setColaborador({ ...props.colaborador, [id]: value });
  };

  const [senha, setSenha] = useState();
  const [contraSenha, setContraSenha] = useState();

  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const onSubmit = data => {
    // Validar senha e contra senha. Se diferentes gerar erro na senha. 
    console.log("S: "+senha+" CS: "+contraSenha);
    if(senha !== contraSenha){
      setError('senha', { type: 'custom', message: 'Senha e contra senha diferentes.' });
    } else if (senha.length < 8){
      setError('senha', { type: 'custom', message: 'A senha deve ter pelo menos 8 caracteres.' });
    } else {
      props.colaborador.senha = senha;
      props.salvar(); 
    }
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="card">
          <h5>Cadastro de Colaboradores</h5>
          <div className="p-fluid grid formgrid">

            <div className="field col-12 md:col-4">
              <label htmlFor="nome">Nome</label>
              <InputText id="nome" defaultValue={props.colaborador.nome}
                {...register("nome", { 
                  required: {value:true, message:"O nome é obrigatório."}, 
                  minLength: {value:2, message:"O nome deve ter pelo menos 2 caracteres."}, 
                  maxLength: {value:50, message:"O nome deve ter no máximo 50 caracteres."} 
                })}
                onChange={handleInputChange} />
              {errors.nome && <span style={{color:'red'}}>{errors.nome.message}</span>}  
            </div>

            <div className="field col-12 md:col-4">
              <label htmlFor="email">Email</label>
              <InputText id="email" defaultValue={props.colaborador.email}
              {...register("email", { 
                required: {value:true, message:"O email é obrigatório."}, 
                minLength: {value:10, message:"O email deve ter pelo menos 10 caracteres."}, 
                maxLength: {value:100, message:"O email deve ter no máximo 100 caracteres."} 
              })}   
                onChange={handleInputChange} />
              {errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}    
            </div>

            <div className="field col-4 md:col-4">
              <label htmlFor="senha">Senha</label>
              <Password id="senha" 
<<<<<<< HEAD
                {...register("senha", {onChange: (e) => setSenha(e.target.value)} , { 
                  required: {value:true, message:"A senha é obrigatória."}, 
                  minLength: {value:4, message:"A senha deve ter pelo menos 4 caracteres."}, 
                  maxLength: {value:10, message:"A senha deve ter no máximo 10 caracteres."} 
                },  )}     
                
                defaultValue={senha} 
                />
=======
                {...register("senha", { 
                })}     
                defaultValue={senha} 
                onChange={e => setSenha(e.target.value)} toggleMask/>
>>>>>>> bddcea678cc21022941ce43ecf5cf2af30331a14
               {errors.senha && <span style={{color:'red'}}>{errors.senha.message}</span>}   
            </div>

            <div className="field col-4 md:col-4">
              <label htmlFor="contraSenha">Contra Senha</label>
              <Password id="contraSenha" defaultValue={contraSenha}
                onChange={e => setContraSenha(e.target.value)} toggleMask />
            </div>



          </div>
        </div>
      </div>

      <div>
        <Button label="Salvar" icon="pi pi-save" type="submit"  
                className="p-button-secondary p-button-text" />
        <Button label="Cancelar" icon="pi pi-times-circle" onClick={props.cancelar} 
                className="p-button-secondary p-button-text" />
      </div>

    </form>
<<<<<<< HEAD
=======
=======
import React from "react";

const ColaboradorForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setColaborador({ ...props.colaborador, [name]: value });
  };
  return (

    <div class="container">
      <div class="row">
        <div class="col">
          <div>
            <form>
              <div class="form">
                <div class="form-toggle"></div>
                <div class="form-panel one">
                  <div class="form-header">
                    <h1>Cadastro de Colaborador</h1>
                  </div>
                  <div class="form-content">
                    <form>
                      <div class="form-group">
                        <label>Nome</label>
                        <input
                          class="form-control"
                          type="text"
                          name="nome"
                          value={props.colaborador.nome}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="form-group">
                        <label>Email</label>
                        <input
                          class="form-control"
                          type="text"
                          name="email"
                          value={props.colaborador.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="form-group">
                        <label>Senha</label>
                        <input
                          class="form-control"
                          type="password"
                          name="senha"
                          value={props.colaborador.senha}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="form-group">
                        <button type="button" onClick={props.salvar}
                          className="btn btn-primary btn-sm">Salvar</button>
                        <button type="button" onClick={props.cancelar}
                          className="btn btn-danger btn-sm">Cancelar</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


>>>>>>> f603aa32952f5ab2abe934aec5da3c93e2a5c726
>>>>>>> bddcea678cc21022941ce43ecf5cf2af30331a14
  );
};
export default ColaboradorForm;
