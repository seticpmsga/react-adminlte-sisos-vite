import { useEffect, useState } from "react"
import axios from "axios";

import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { FilterMatchMode } from "primereact/api"
import { InputText } from "primereact/inputtext"
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { ButtonGroup } from 'primereact/buttongroup';
import { Button } from 'primereact/button';

import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'

import { getData } from "../../service/clientes/ClienteRepository";

export default function DataTableWithFilter() {

    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
    })
    const [globalFilterValue, setGlobalFilterValue] = useState('')
    const [data, setData] = useState(null)

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    }

    const statusBodyTemplate = () => {
        return (
            <ButtonGroup>
                <a class="btn btn-app bg-info">
                    <i class="fas fa-edit"></i> Editar
                </a>
                &nbsp;
                <a class="btn btn-app bg-warning">
                    <i class="fas fa fa-trash"></i> Excluir
                </a>
            </ButtonGroup>
        )
    };

    
    useEffect(() => {
        console.log(getData())
    },[])

    useEffect(() => {
        axios.get('http://localhost:8080/clientes')
            .then(function (response) {
                // manipula o sucesso da requisição
                setData(response.data)
                // console.log(response.data)
            })
            .catch(function (error) {
                // manipula erros da requisição
                setData(error.message)
            })
            .finally(function () {
                // sempre será executado
            })
    },[])

    // const data = [
    //     {
    //         "id": 1,
    //         "matricula": "05854",
    //         "nome": "ABEL SOARES FERREIRA"
    //     },
    //     {
    //         "id": 2,
    //         "matricula": "84352",
    //         "nome": "ADRIANO MORAIS DE LIMA"
    //     },
    //     {
    //         "id": 3,
    //         "matricula": "07750",
    //         "nome": "ANDREZA PEDRO DE SOUZA"
    //     },
    //     {
    //         "id": 4,
    //         "matricula": "91855",
    //         "nome": "ANGELO HORACIO MEDEIROS DE PAIVA"
    //     },
    //     {
    //         "id": 5,
    //         "matricula": "11315",
    //         "nome": "CLAUDIA TEREZINHA DE MEDEIROS DE FIGUEIREDO"
    //     },
    //     {
    //         "id": 6,
    //         "matricula": "05379",
    //         "nome": "CLENIA DE GOIS OLIVEIRA DANTAS"
    //     },
    //     {
    //         "id": 7,
    //         "matricula": "19734",
    //         "nome": "ERALDO DANIEL DE PAIVA"
    //     },
    //     {
    //         "id": 8,
    //         "matricula": "77313",
    //         "nome": "FRANCISCO ROBERTO JANUARIO"
    //     },
    //     {
    //         "id": 9,
    //         "matricula": "19718",
    //         "nome": "HUGO PEREIRA DE CARVALHO"
    //     },
    //     {
    //         "id": 10,
    //         "matricula": "10738",
    //         "nome": "INGRID DE BRITO RODRIGUES"
    //     },
    //     {
    //         "id": 11,
    //         "matricula": "02099",
    //         "nome": "IRANSIDNEY GONCALVES FERREIRA"
    //     },
    //     {
    //         "id": 12,
    //         "matricula": "06777",
    //         "nome": "JOAO GONZAGA DE OLIVEIRA JUNIOR"
    //     },
    //     {
    //         "id": 13,
    //         "matricula": "11885",
    //         "nome": "KLEBSON MENDES BEZERRA"
    //     },
    //     {
    //         "id": 14,
    //         "matricula": "05038",
    //         "nome": "MARIA DAS GRACAS MARTINS MORAIS DE FREITAS"
    //     },
    //     {
    //         "id": 15,
    //         "matricula": "78468",
    //         "nome": "MIZAEL MARTINS DE MORAIS"
    //     },
    //     {
    //         "id": 16,
    //         "matricula": "10014",
    //         "nome": "PAULO MARCELO LIMA DA SILVA"
    //     },
    //     {
    //         "id": 17,
    //         "matricula": "10105",
    //         "nome": "RODOLFO SILVA DE MELO"
    //     },
    //     {
    //         "id": 18,
    //         "matricula": "07913",
    //         "nome": "RODRIGO LUIS DE OLIVEIRA RODRIGUES"
    //     },
    //     {
    //         "id": 19,
    //         "matricula": "06206",
    //         "nome": "SANDRA MARIA GALVAO DE MELO MENDES CORREA"
    //     },
    //     {
    //         "id": 20,
    //         "matricula": "10267",
    //         "nome": "SERGIO JOSE SILVA DE LIMA"
    //     }
    // ]

    

    return (
        <>
            <div className="flex justify-content-end">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Procurar pelo nome" />
                </IconField>
            </div>
            <hr/>
            <DataTable value={data} filters={filters} paginator rows={5} totalRecords={5}>
                <Column field="id" header="ID"/>
                <Column field="nome" header="Nome" sortable/>
                <Column field="matricula" header="Matrícula"/>
                <Column field="" header="."/>
                <Column body={statusBodyTemplate} />
            </DataTable>
        </>
    )
}