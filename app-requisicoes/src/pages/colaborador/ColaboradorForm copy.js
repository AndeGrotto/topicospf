import React from "react";
<<<<<<< HEAD
=======

>>>>>>> bddcea678cc21022941ce43ecf5cf2af30331a14
const ColaboradorForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setColaborador({ ...props.colaborador, [name]: value });
  };
  return (
<<<<<<< HEAD
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
          type="text"
          name="senha"
          value={props.colaborador.senha}
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <button
          type="button"
          onClick={props.salvar}
          className="btn btn-primary btn-sm"
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={props.cancelar}
          className="btn btn-primary btn-sm"
        >
          Cancelar
        </button>
      </div>
    </form>
=======

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


>>>>>>> bddcea678cc21022941ce43ecf5cf2af30331a14
  );
};
export default ColaboradorForm;
