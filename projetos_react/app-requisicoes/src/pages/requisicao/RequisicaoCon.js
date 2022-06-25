import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useRef } from "react";
import RequisicaoList from "./RequisicaoList";
import RequisicaoForm from "./RequisicaoForm";
import RequisicaoSrv from "./RequisicaoSrv";
<<<<<<< HEAD
import SolicitanteSrv from "../solicitante/SolicitanteSrv";
import TipoRequisicaoSrv from "../tiporequisicao/TipoRequisicaoSrv";
=======
>>>>>>> 938c7aa327326b3cd18c898ab61b49e676e08a34
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";


<<<<<<< HEAD
=======

>>>>>>> 938c7aa327326b3cd18c898ab61b49e676e08a34
function RequisicaoCon() {
  const [requisicoes, setRequisicoes] = useState([]);
  const initialState = { id: null, titulo: "", descricao: "", dataHoraCriada: "", status: "", prazoAtendimento: ""};
  const [requisicao, setRequisicao] = useState(initialState);
<<<<<<< HEAD
  const [tipoRequisicoes, setTipoRequisicoes] = useState([]);
  const [solicitantes, setSolicitantes] = useState([]);
  const [editando, setEditando] = useState(false);
  const toastRef = useRef();


  useEffect(() => {
    onClickAtualizar(); // ao inicializar execula método para atualizar
    onClickAtualizarTipoRequisicao(); // ao inicializar execula método para atualizar
    onClickAtualizarSolicitante(); // ao inicializar execula método para atualizar
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
    RequisicaoSrv.listar().then((response) => {
      setChefes(response.data);
    })
    .catch((e) => {
      console.log("Erro: " + e.message);
    });
  };
>>>>>>> 938c7aa327326b3cd18c898ab61b49e676e08a34

  const onClickAtualizar = () => {
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

<<<<<<< HEAD
  const onClickAtualizarTipoRequisicao = () => {
    TipoRequisicaoSrv.listar().then((response) => {
        setTipoRequisicoes(response.data);
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

  const onClickAtualizarSolicitante = () => {
    SolicitanteSrv.listar().then((response) => {
        setSolicitantes(response.data);
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
    setRequisicao(initialState);
    setEditando(true);
  };

  const salvar = () => {
    if (requisicao._id == null) { // inclusão
      RequisicaoSrv.incluir(requisicao)
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
      RequisicaoSrv.alterar(requisicao)
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
    setRequisicao(
      requisicoes.filter((requisicao) => requisicao._id == id)[0]
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
    RequisicaoSrv.excluir(_id)
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
        <RequisicaoList
          requisicoes={requisicoes}
          requisicao={requisicao}
          setRequisicao={setRequisicao}
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
        <RequisicaoForm
          requisicao={requisicao}
          setRequisicao={setRequisicao}
<<<<<<< HEAD
          tipoRequisicoes={tipoRequisicoes}
          setTipoRequisicoes={setTipoRequisicoes}
          solicitantes={solicitantes}
          setSolicitantes={setSolicitantes}
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
export default RequisicaoCon;
