import { useEffect, useState } from "react";
import api from '../../service/connection'

import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { FilterMatchMode } from "primereact/api"
import { InputText } from "primereact/inputtext"
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { ConfirmDialog } from 'primereact/confirmdialog'

import AddCliente from "./_AddCliente"
import EditCliente from "./_EditCliente"
import DelCliente from "./_DelCliente"

export default function ListClientes() {

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
    })

    const [globalFilterValue, setGlobalFilterValue] = useState('')
    const [formIn, setFormIn] = useState(false)
    const [clienteData, setClienteData] = useState([])
 
    /* Listar Clientes */
    const getClientes = () => {

        const [listClientes, setListClientes] = useState([])

        useEffect(() => {
            api.get("/clientes")
                .then(function (response) {
                    // manipula o sucesso da requisição
                    setListClientes(response.data)
                })
                .catch(function (error) {
                    // manipula erros da requisição
                    setListClientes([{
                        "id": "-",
                        "matricula": "-----",
                        "nome": error.message
                    }])
                })
                .finally(function () {
                    // sempre será executado
                });
        }, [])

        return listClientes
    }
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }
    /** ######## */
    
    /** ######## */

    const statusBodyTemplate = (rowData) => {

        return (
            <>
                <a className="btn bg-info btn-xs"
                    data-toggle="modal" data-target="#edit-cliente"
                    onClick={() => { 
                        setFormIn(true)
                        setClienteData(rowData)
                        // setMatriculaCliente(props.matricula)
                        // formRender(props.matricula) 
                        }}>
                    <i className="fas fa-edit"></i> Editar
                </a>
                &nbsp;
                {/* Componente DelCliente */}
                {/* ########################## */}
                <DelCliente ClienteData={rowData}/>
                {/* ########################## */}
            </>
        )
    };

    return (
        <div className="card-body">

            <div className="card-header">

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

                    <div style={{ marginBottom: 20 }}>
                        <IconField iconPosition="left">
                            <InputIcon className="pi pi-search" />
                            <InputText value={globalFilterValue} className="p-inputtext-sm" onChange={onGlobalFilterChange} placeholder="Procurar pelo nome" />
                        </IconField>
                    </div>

                    <div>
                        <a className="btn btn-app" data-toggle="modal" data-target="#add-cliente">
                            <i className="fas fa-user-plus"></i> Adicionar Cliente
                        </a>
                    </div>

                </div>

            </div>

            <DataTable value={getClientes()} filters={filters} size="small" stripedRows paginator rows={5} totalRecords={5}>
                <Column field="id" header="ID" />
                <Column field="nome" header="Nome" sortable />
                <Column field="matricula" header="Matrícula" />
                <Column field="email" header="E-mail" />
                <Column field="" header="." />
                <Column body={statusBodyTemplate} />
            </DataTable>

            {/* Componente AddCliente */}
            {/* ########################## */}
            <AddCliente />
            {/* ########################## */}

            {/* Componente EditCliente */}
            {/* ########################## */}
            <EditCliente ClienteData={clienteData} />
            {/* ########################## */}

            {/* Complemento Componente DelCliente */}
            {/* ########################## */}
            <ConfirmDialog />
            {/* ########################## */}

        </div>
    )
}