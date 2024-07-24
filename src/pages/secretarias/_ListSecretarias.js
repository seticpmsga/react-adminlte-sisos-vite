import { useEffect, useState } from "react";
import api from '../../service/connection'

import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { FilterMatchMode } from "primereact/api"
import { InputText } from "primereact/inputtext"
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { ConfirmDialog } from 'primereact/confirmdialog'

import AddSecretaria from "./_AddSecretaria"
import EditSecretaria from "./_EditSecretaria"
import DelSecretaria from "./_DelSecretaria"

export default function ListSecretarias() {

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        secretarias: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        ativo: { value: true, matchMode: FilterMatchMode.EQUALS }
    })

    const [globalFilterValue, setGlobalFilterValue] = useState('')
    const [formIn, setFormIn] = useState(false)
    const [secretariaData, setSecretariaData] = useState([])
 
    /* Listar Secretarias */
    const getSecretarias = () => {

        const [listSecretarias, setListSecretarias] = useState([])

        useEffect(() => {
            api.get("/secretarias")
                .then(function (response) {
                    // manipula o sucesso da requisição
                    setListSecretarias(response.data)
                })
                .catch(function (error) {
                    // manipula erros da requisição
                    setListSecretarias([{
                        "id": "-",
                        "secretaria": error.message,
                        "Sigla": "-----"
                    }])
                })
                .finally(function () {
                    // sempre será executado
                });
        }, [])

        return listSecretarias
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
                    data-toggle="modal" data-target="#edit-secretaria"
                    onClick={() => { 
                        setFormIn(true)
                        setSecretariaData(rowData)
                        }}>
                    <i className="fas fa-edit"></i> Editar
                </a>
                &nbsp;
                {/* Componente DelSecretaria */}
                {/* ########################## */}
                <DelSecretaria SecretariaData={rowData}/>
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
                        <a className="btn btn-app" data-toggle="modal" data-target="#add-secretaria">
                            <i className="fas fa-sitemap"></i> Adicionar Secretaria
                        </a>
                    </div>

                </div>

            </div>

            <DataTable value={getSecretarias()} filters={filters} size="small" stripedRows paginator rows={5} totalRecords={5}>
                <Column field="id" header="ID" />
                <Column field="secretaria" header="Secretaria" sortable />
                <Column field="acronimo" header="Sigla" />
                <Column field="" header="." />
                <Column body={statusBodyTemplate} />
            </DataTable>

            {/* Componente AddSecretaria */}
            {/* ########################## */}
            <AddSecretaria />
            {/* ########################## */}

            {/* Componente EditSecretaria */}
            {/* ########################## */}
            <EditSecretaria SecretariaData={secretariaData} />
            {/* ########################## */}

            {/* Complemento Componente DelSecretaria */}
            {/* ########################## */}
            <ConfirmDialog />
            {/* ########################## */}

        </div>
    )
}