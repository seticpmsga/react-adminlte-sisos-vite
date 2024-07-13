import React, { useEffect, useRef } from 'react';
import { confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast'

export default function DelCliente(props) {
    const toastDelCliente = useRef(null);

    const accept = () => {
        console.log(props.ClienteData)
        toastDelCliente.current.show({ severity: 'success', summary: 'Confirmado', detail: 'Cliente excluído com sucesso!', life: 2000 });
    }

    const reject = () => {
        toastDelCliente.current.show({ severity: 'secondary', summary: 'Cancelado', detail: 'Operação cancelada!', life: 2000 });
    }

    const confirm = () => {
        confirmDialog({
            header: 'Confirmação de Exclusão',
            message: (
                <div>
                    <p><i className='pi pi-exclamation-triangle'style={{ color: 'red' }}/>&nbsp;Deseja realmente excluir o(a) cliente </p>
                    <p>{props.ClienteData['nome']} ?</p>
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
        });
    };

    return (
        <>
            <Toast ref={toastDelCliente} />
            <a className="btn bg-warning btn-xs" onClick={confirm}>
                <i className="fas fa fa-trash"></i> Excluir
            </a>
        </>
    )
}