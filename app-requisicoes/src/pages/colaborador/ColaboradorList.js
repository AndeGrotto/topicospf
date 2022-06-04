import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const ColaboradorList = (props) => {

  const operacoesBodyTemplate = (rowData) => {
    return (
<<<<<<< HEAD
      <>
        
          <Button type="button" icon="pi pi-pencil" className="p-button-rounded p-button-text " 
                  onClick={() => props.editar(rowData._id)}></Button>
          <Button type="button" icon="pi pi-trash" className="p-button-rounded p-button-text" 
                  onClick={() => { props.excluir(rowData._id); }}></Button>
        
      </>            
    )
  }

  const header = (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      Listagem de Colaboradores
      <Button icon="pi pi-file-o" label="Inserir" className="p-button-sm" onClick={() => props.inserir()} />
    </div>
  );

  const footer = `Total de itens: ${props.colaboradores ? props.colaboradores.length : 0}`;

  return (
    <div className="App">

      {/* Montando uma tabela com datatable  */}
      <DataTable value={props.colaboradores} responsiveLayout="scroll" header={header} footer={footer}
        paginator className="p-datatable-sm" paginatorPosition="top"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
        currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
        rows={5} rowsPerPageOptions={[5, 10, 20, 50]}
        emptyMessage="Nenhum colaborador encontrado."
        selectionMode="single" selection={props.colaborador} onSelectionChange={e => props.setColaborador(e.value)} dataKey="_id"
      >
        <Column field="_id" header="Id" sortable></Column>
        <Column field="nome" header="Nome" sortable filter></Column>
        <Column field="email" header="Email" sortable filter></Column>
        <Column header="Operações" body={operacoesBodyTemplate}></Column>
      </DataTable>

=======
      <div>
<<<<<<< HEAD
        <Button icon="pi pi-times" className="p-button-rounded p-button-text" aria-label="Submit" onClick={() => props.excluir(rowData._id)}/>
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-text" aria-label="Editar" onClick={() => props.editar(rowData._id)}/>
=======
        <Button icon="pi pi-times" className="p-button-rounded p-button-danger" aria-label="Excluir" onClick={() => props.excluir(rowData._id)}/>
        <Button icon="pi pi-pencil" className="p-button-rounded p-button-warning" aria-label="Editar" onClick={() => props.editar(rowData._id)}/>
>>>>>>> f603aa32952f5ab2abe934aec5da3c93e2a5c726
      </div>
    )

  }


  return (
    <div className="App">
      <h4 className='name-colaboradores'>Listagem de Colaboradores</h4>
      <button
        className="btn btn-primary btn-sm"
        onClick={props.onClickAtualizar}
      >
        Atualizar Lista
      </button>
      <button className="btn btn-success btn-sm" onClick={props.inserir}>
        Inserir
      </button>

      <DataTable value={props.colaboradores} paginator responsiveLayout="scroll"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando de {first} até {last} de {totalRecords}"
        rows={5} rowsPerPageOptions={[5, 10, 20, 50]}
        emptyMessage="Nenhum colaborador encontrado."

        selectionMode="single" selection={props.colaborador} 
        onSelectionChange={e => props.setColaborador(e.value)} dataKey="_id">

        <Column field="_id" header="ID" sortable></Column>
        <Column field="nome" header="Nome" sortable filter></Column>
        <Column field="email" header="E-mail" sortable filter></Column>
        <Column header="Operações" body={operacoesBodyTemplate}>
        </Column>
      </DataTable>
>>>>>>> bddcea678cc21022941ce43ecf5cf2af30331a14
    </div>
  );
};
export default ColaboradorList;
