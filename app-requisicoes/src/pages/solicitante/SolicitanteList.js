import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const SolicitanteList = (props) => {

  const operacoesBodyTemplate = (rowData) => {
    return (
      <div>
        <Button icon="pi pi-times" className="p-button-rounded p-button-danger" aria-label="Excluir" onClick={() => props.excluir(rowData._id)}/>
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-warning" aria-label="Editar" onClick={() => props.editar(rowData._id)}/>
      </div>
    )

  }


  return (
    <div className="App">
      <h4 className='name-solicitantes'>Listagem de Solicitantes</h4>
      <button
        className="btn btn-primary btn-sm"
        onClick={props.onClickAtualizar}
      >
        Atualizar Lista
      </button>
      <button className="btn btn-success btn-sm" onClick={props.inserir}>
        Inserir
      </button>

      <DataTable value={props.solicitantes} paginator responsiveLayout="scroll"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
        rows={5} rowsPerPageOptions={[5, 10, 20, 50]}
        emptyMessage="Nenhum solicitante encontrado."

        selectionMode="single" selection={props.solicitante} 
        onSelectionChange={e => props.setSolicitante(e.value)} dataKey="_id">

        <Column field="_id" header="ID" sortable></Column>
        <Column field="nome" header="Nome" sortable filter></Column>
        <Column field="email" header="E-mail" sortable filter></Column>
        <Column header="Operações" body={operacoesBodyTemplate}>
        </Column>
      </DataTable>
    </div>
  );
};
export default SolicitanteList;
