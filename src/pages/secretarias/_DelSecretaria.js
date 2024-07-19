import React, { useEffect, useRef } from 'react'
import api from '../../service/connection'
import { useNavigate } from "react-router-dom"

import { confirmDialog } from 'primereact/confirmdialog'
import { Toast } from 'primereact/toast'

export default function DelSecretaria(props) {
    const toastDelSecretaria = useRef(null);
    let navigate = useNavigate()

    const accept = () => {
        patchSecretaria(props.SecretariaData)
        setTimeout(() => { navigate(0) }, 2000);
        toastDelSecretaria.current.show({ severity: 'success', summary: 'Confirmado', detail: 'Secretaria excluída com sucesso!', life: 2000 });
    }

    const reject = () => {
        toastDelSecretaria.current.show({ severity: 'secondary', summary: 'Cancelado', detail: 'Operação cancelada!', life: 2000 });
    }

    const confirm = () => {
        confirmDialog({
            header: 'Confirmação de Exclusão',
            message: (
                <div>
                    <p><i className='pi pi-exclamation-triangle'style={{ color: 'red' }}/>&nbsp;Deseja realmente excluir a Secretaria </p>
                    <p>{props.SecretariaData['secretaria']} ?</p>
                </div>
            ),
            icon: '',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger border-round-md m-1',
            rejectClassName: 'p-button-secondary border-round-md m-1',
            acceptLabel: 'Excluir',
            rejectLabel: 'Cancelar',
            accept,
            reject
        })
    }

    const patchSecretaria = async (secretariaData) => {
        const secretariaAtiva = { "ativo": false }

        try {
            const response = await api.patch(`/secretarias/${secretariaData.id}/`, secretariaAtiva);
            if (response) {
                console.log(response.status);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <Toast ref={toastDelSecretaria} />
            <a className="btn bg-warning btn-xs" onClick={confirm}>
                <i className="fas fa fa-trash"></i> Excluir
            </a>
        </>
    )
}