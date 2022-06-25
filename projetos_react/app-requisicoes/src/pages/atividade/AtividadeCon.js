import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import AtividadeList from "./AtividadeList";
import AtividadeForm from "./AtividadeForm";
import AtividadeSrv from "./AtividadeSrv";
<<<<<<< HEAD
import ColaboradorSrv from "../colaborador/ColaboradorSrv";
import RequisicaoSrv from "../requisicao/RequisicaoSrv";
=======
>>>>>>> 938c7aa327326b3cd18c898ab61b49e676e08a34
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";



function AtividadeCon() {
  const [atividades, setAtividades] = useState([]);
  const initialState = { id: null, titulo: "", descricao: "", status: "", prazo: "", agendaInicio: "", dataHoraTermino: ""};
  const [atividade, setAtividade] = useState(initialState);
<<<<<<< HEAD
  const [colaboradores, setColaboradores] = useState(initialState);
  const [requisicoes, setRequisicoes] = useState(initialState);
  const [editando, setEditando] = useState(false);
  const toastRef = useRef();


  useEffect(() => {
    onClickAtualizar(); // ao inicializar execula método para atualizar
    onClickAtualizarColaborador(); // ao inicializar execula método para atualizar
    onClickAtualizarRequisicao(); // ao inicializar execula método para atualizar
  }, []);

=======
  const [editando, setEditando] = useState(false);
  const toastRef = useRef();

  const [chefes, setChefes] = useState([]);


  useEffect(() => {
    onClickAtualizar(); // ao inicializar execula método para atualizar
    onClickAtualizarChefes(); // ao inicializar execula método para atualizar
  }, []);

  const onClickAtualizarChefes = () => {
    AtividadeSrv.listar().then((response) => {
      setChefes(response.data);
    })
    .catch((e) => {
      console.log("Erro: " + e.message);
    });
  };
>>>>>>> 938c7aa327326b3cd18c898ab61b49e676e08a34

  const onClickAtualizar = () => {
    AtividadeSrv.listar().then((response) => {
        setAtividades(response.data);
      })
      .catch((e) => {
        console.log("Erro: " + e.message);
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 3000,
        });
      });
  };

<<<<<<< HEAD
  const onClickAtualizarColaborador = () => {
    ColaboradorSrv.listar().then((response) => {
        setColaboradores(response.data);
      })
      .catch((e) => {
        console.log("Erro: " + e.message);
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 3000,
        });
      });
  };

  const onClickAtualizarRequisicao = () => {
    RequisicaoSrv.listar().then((response) => {
        setRequisicoes(response.data);
      })
      .catch((e) => {
        console.log("Erro: " + e.message);
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 3000,
        });
      });
  };

=======
>>>>>>> 938c7aa327326b3cd18c898ab61b49e676e08a34
  const inserir = () => {
    setAtividade(initialState);
    setEditando(true);
  };

  const salvar = () => {
    if (atividade._id == null) { // inclusão
      AtividadeSrv.incluir(atividade)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "success",
            summary: "Salvou",
            life: 2000,
          });
        })
        .catch((e) => {
          toastRef.current.show({
            severity: "error",
            summary: e.message,
            life: 4000,
          });
        });
    } else { // alteração
      AtividadeSrv.alterar(atividade)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "success",
            summary: "Salvou",
            life: 2000,
          });
        })
        .catch((e) => {
          toastRef.current.show({
            severity: "error",
            summary: e.message,
            life: 4000,
          });
        });
    }
  };

  const cancelar = () => {
    setEditando(false);
  };

  const editar = (id) => {
    setAtividade(
      atividades.filter((atividade) => atividade._id == id)[0]
    );
    setEditando(true);
  };

  const excluir = (_id) => {
    confirmDialog({
      message: "Confirma a exclusão?",
      header: "Confirmação",
      icon: "pi pi-question",
      acceptLabel: "Sim",
      rejectLabel: "Não",
      acceptClassName: "p-button-danger",
      accept: () => excluirConfirm(_id),
    });
  };

  const excluirConfirm = (_id) => {
    AtividadeSrv.excluir(_id)
      .then((response) => {
        onClickAtualizar();
        toastRef.current.show({
          severity: "success",
          summary: "Excluído",
          life: 2000,
        });
      })
      .catch((e) => {
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 4000,
        });
      });
  };


  if (!editando) {
    return (
      <div>
        <ConfirmDialog />
        <AtividadeList
          atividades={atividades}
          atividade={atividade}
          setAtividade={setAtividade}
          onClickAtualizar={onClickAtualizar}
          inserir={inserir}
          editar={editar}
          excluir={excluir}
        />
        <Toast ref={toastRef} />
      </div>
    );
  } else {
    return (
      <div>
        <AtividadeForm
          atividade={atividade}
          setAtividade={setAtividade}
<<<<<<< HEAD
          colaboradores={colaboradores}
          setColaboradores={setColaboradores}
          requisicoes={requisicoes}
          setRequisicoes={setRequisicoes}
          salvar={salvar}
          cancelar={cancelar}
=======
          salvar={salvar}
          cancelar={cancelar}
          chefes={chefes}
>>>>>>> 938c7aa327326b3cd18c898ab61b49e676e08a34
        />
        <Toast ref={toastRef} />
      </div>
    );
  }

}
export default AtividadeCon;
